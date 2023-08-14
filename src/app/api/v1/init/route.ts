import bcrypt from "bcrypt"
import prisma from "@/lib/prisma"
import {  NextResponse } from "next/server"
import generatedUserInfo from "@/helpers/user/generatedUserInfo"

const EMAIL = "jbaliomyma@gmail.com"
const PASSWORD = "97029856Hb"

export async function GET() {
  try {
    const userPayload = await generatedUserInfo(EMAIL)
    const hashedPassword = await bcrypt.hash(PASSWORD, 12)

  
    const direction = await prisma.direction.create({
      data: {
        name: "Direction 1",
        description: "This is Organizational Strategy direction",
      },
    })

    const direction2 = await prisma.direction.create({
      data: {
        name: "Direction 2",
        description: "This is Organizational Strategy direction",
      },
    })

    const department = await prisma.department.create({
      data: {
        name: "IT",
        description: "IT",
        direction_id : direction.id,
      },
    })

    // create department
    const department2 = await prisma.department.create({
      data: 
        {
          name : "Finance",
          direction_id : direction2.id,
        },
    })

    const positions = await prisma.position.createMany({
      data: [
          {
          name : "Senior Software Engineer" ,description : "Senior Software Engineer" , department_id :department.id 
          },
          {
          name : "Data Scientist" ,description : "Data Scientist"  , department_id : department.id  ,
          },
          {
          name : "Product Designer" ,description : "Product Designere" ,department_id: department2.id 
          },
          {
          name : "Customer Service Representative" ,description : "Customer Service Representative" , department_id: department2.id 
          }
      ],
    })

    
    const user = await prisma.user.create({
      data : {
          ...userPayload , 
        department_id : department.id,
        direction_id:direction.id ,
        password : hashedPassword
      },
      
    })

    const roles = await prisma.role.createMany({
      data: [
          {
          name : "ADMIN" ,description : "This is ADMIN role" ,created_by_id :user.id
          },
          {
          name : "RSSI" ,description : "This is RSSI role" ,created_by_id :user.id
          },
          {
          name : "DIRECTOR_GENERAL" ,description : "This is director DIRECTOR_GENERAL role" ,created_by_id :user.id
          },
          {
          name : "CHEF_DEPARTMENT" ,description : "This is director CHEF_DEPARTMENT role" ,created_by_id :user.id
          },
          {
          name : "TECHNICIAN" ,description : "This is director TECHNICIAN role" ,created_by_id :user.id
          }
      ],
    })

    const roleAdmin = await prisma.role.findUnique({
         where : {
            name : "ADMIN"
         }
    })

    const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          role_id: roleAdmin?.id,
        },
        include  : {
          Role : true
        }
      });

     return NextResponse.json(
      {
        message: `DB created`,
        result :updatedUser
      },
      { status: 201 }
    )
  }
 catch (error :any) {
    console.log("🚀 ~ file: route.ts:86 ~ GET ~ error:", error)
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    )
  }

}
