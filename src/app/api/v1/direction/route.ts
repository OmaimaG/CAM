import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { getSession } from "@/lib/session"

const depSchema = z.object({
  name: z
    .string({
      required_error: "The direction name field is required",
      invalid_type_error: `Invalid input type. The direction name field must be a string`,
    })
    .trim()
    .nonempty("The direction name field cannot be empty")
    .min(2, {
      message: `The direction name must have a minimum length of 2 characters`,
    })
    .max(40, {
      message: `The direction name must have a maximum length of 40 characters`,
    })
    .toUpperCase()
    .transform((value) => value.replaceAll(" ", "_")),
  description: z
    .string({
      invalid_type_error: `Invalid input type. The direction description field must be a string`,
    })
    .trim()
    .min(10, {
      message: `The direction description must have a minimum length of 10 characters`,
    })
    .max(100, {
      message: `The direction description must have a maximum length of 100 characters`,
    })
    .optional(),
})

export async function POST(req: NextRequest, res: NextRequest) {
  try {
    const session = await getSession()
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json(
        {
          message: `Only admins can access this route`,
          result: null,
        },
        { status: 401 }
      )
    }
    const { name, description } = depSchema.parse(await req.json())

    const findDir = await prisma.direction.findUnique({
      where: {
        name,
      },
    })

    if (findDir) {
      return NextResponse.json(
        {
          message: `This direction name already exists`,
          result: findDir,
        },
        { status: 400 }
      )
    }

    const direction = await prisma.direction.create({
      data: {
        name: name,
        description: description ? description : null,
      },
    })

    return NextResponse.json(
      {
        message: `Direction created ${direction.name}`,
        result: direction,
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

export async function GET() {
  try {
    const session = await getSession()
    if (false && session?.user?.role !== "ADMIN") {
      return NextResponse.json(
        {
          message: `Only admins can access this route`,
          result: null,
        },
        { status: 401 }
      )
    }

    const directions = await prisma.direction.findMany()

    return NextResponse.json(
      {
        message: `Directions`,
        result: directions,
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
