import bcrypt from "bcrypt"
import prisma from "@/lib/prisma"
import { userLoginSchema } from "@/validation/zod"
import { NextRequest, NextResponse } from "next/server"
import { ErrorCode, AuthMethod } from "@/types/enums"

const checkTextType = (text) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
  const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/
  const phoneRegex = /^\+?[1-9]\d{1,14}$/

  if (emailRegex.test(text)) {
    return "email"
  } else if (usernameRegex.test(text)) {
    return "username"
  } else if (phoneRegex.test(text)) {
    return "phone"
  } else {
    return "unknown"
  }
}

export async function POST(request : NextRequest, response : NextResponse) {
  try {
    const {
      username,
      password,
    } = userLoginSchema.parse(await request.json())

    let cred = checkTextType(username)

    if (cred === "unknown") {
      return Response.json(
        {
          message: `Invalid username.`,
        },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: {
        email: username,
      },
    })

    if (!user) {
      return NextResponse.json(
        {
          message: `Couldn't find an account with this ${cred}.`,
          error: {
            message: `UserNotExists`,
            code: ErrorCode.UserNotExists,
          },
          helper: {
            message: `Couldn't find an account with this ${cred}.`,
            field: "username",
            code: ErrorCode.UserNotExists,
          },
        },
        { status: 401 }
      )
    }


    // default log with password
    if (!user.password) {
      return Response.json(
        {
          message: `Please provide password`,
          error: {
            code: ErrorCode.NeedOtp,
          },
        },
        { status: 400 }
      )
    }

    if (!password) {
      return NextResponse.json(
        {
          message: `Password need it.`,
          helper: {
            message: `Password need it.`,
            field: "password",
            type: "info",
            code: ErrorCode.PasswordNeedIt,
          },
          error: {
            code: ErrorCode.PasswordNeedIt,
          },
        },
        { status: 401 }
      )
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return NextResponse.json(
        {
          message: `Wrong password.`,
          helper: {
            message: `Wrong password.`,
            field: "password",
            code: ErrorCode.WrongPassword,
          },
          error: {
            code: ErrorCode.WrongPassword,
          },
        },
        { status: 401 }
      )
    }


    return NextResponse.json(
      {
        message: `Welcome back ${user.name || user.username || ""}`,
        result:{
          email : user.email ,
          password
        },
      },
      { status: 200 }
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
    } else {
      return NextResponse.json(
        { message: error.message, error },
        { status: 500 }
      )
    }
  }
}
