import transporter from "@/lib/nodemailer"
import bcrypt from "bcrypt"
import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { emailSchema, nameSchema , passwordSchema } from "@/validation/zod"
import { Role } from "@prisma/client"
import generatedUserInfo from "@/helpers/user/generatedUserInfo"
import generateStrongPassword from "@/helpers/generate_password"
import siteConfig from "@/config/site"

const userSchema = z.object({
  id : z.string().optional() , 
  name: nameSchema,
  email: emailSchema,
  password:  passwordSchema(),
  direction_id: z.string({
    required_error: "Direction ID is required",
  }),
  service : z.string().nullable().optional() , 
  department_id: z.string({
    required_error: "Department ID is required",
  }),
  position_id: z.string({
    required_error: "Position ID is required",
  }),
  role_id: z
    .string({
      required_error: "The role id field is required",
      invalid_type_error: `Invalid input type. The role id field must be a string`,
    })
    .nonempty("The role id field cannot be empty"),
    phone : z.string({}).optional()
})

export async function POST(req: NextRequest, res: NextRequest) {
  try {
    const { email, name , password : _password , ...rest } =
      userSchema.parse(await req.json())

    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (findUser) {
      return NextResponse.json(
        {
          message: "User with this email already exists",
        },
        { status: 400 }
      )
    }

    const userPayload = await generatedUserInfo(email, { name })
    const password = _password || generateStrongPassword()
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        ...rest,
        ...userPayload,
        password: hashedPassword,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_FROM, // sender address
      to: user.email, // user's email address
      subject: "Account Credentials", // Subject line
      text: `Hello,\n\nYour account has been created. Here are your credentials:\n\nEmail: ${user.email}\nPassword: ${password}\n\nPlease keep this information secure.\n\nBest regards,\nThe Admin Team`, // plain text body
      html: `<p>Hello,</p><p>Your account has been created. Here are your credentials:</p><ul><li><b>Email:</b> ${user.email}</li><li><b>Password:</b> ${password}</li></ul><p>Please keep this information secure.</p><p>Best regards,<br>The ${siteConfig.name} Team</p>`, // html body
    }

    const emailResponse = await transporter.sendMail(mailOptions)

    if (!emailResponse) {
      return NextResponse.json(
        {
          message: `Some thing wrong when sending email`,
        },
        { status: 400 }
      )
    }

    // sned user email and password

    return NextResponse.json(
      {
        message: `User created (${user.name})`,
      },
      { status: 201 }
    )
  } catch (error) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          message: error.errors[0].message,
          error: error,
        },
        { status: 400 }
      )
    }
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    )
  }
}

export async function PATCH(req: NextRequest, res: NextRequest) {
  try {
    const { id , email, name , phone ,  } =
     await req.json()

    const findUser = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    
    if (!findUser) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        { status: 400 }
      )
    }

    if(findUser?.email === email) {
      const user = await prisma.user.update({
        where : {
         id
        },
        data: {
          name ,phone
        },
      })

      return NextResponse.json(
        {
          message: `User updated (${user.name})`,
        },
        { status: 201 }
      )
    }


    const findEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    
    if (findEmail) {
      return NextResponse.json(
        {
          message: "User with this email already exists",
        },
        { status: 400 }
      )
    }

    const user = await prisma.user.update({
      where : {
       id
      },
      data: {
        name ,email ,phone
      },
    })

    // sned user email and password

    return NextResponse.json(
      {
        message: `User updated (${user.name})`,
      },
      { status: 201 }
    )
  } catch (error) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          message: error.errors[0].message,
          error: error,
        },
        { status: 400 }
      )
    }
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    )
  }
}