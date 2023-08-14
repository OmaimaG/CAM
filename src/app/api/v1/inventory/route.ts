import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { getSession } from "@/lib/session"

export async function POST(req: NextRequest, res: NextRequest) {
  try {
     const data = await req.json()
     
    await prisma.inventory.create({
      data : data
    })
     
     return NextResponse.json({message : "Inventory created"})
     
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


// import { prisma } from "@/lib/prisma"
// import { inventorySchema } from "@/schemas/inventorySchema" // Import the Zod schema for Inventory

export async function PATCH(req: NextRequest, res: NextRequest) {
  try {
    const { id, name, ...rest} = await req.json()

    if (!id) {
      return NextResponse.json(
        {
          message: `Inventory ID required`,
        },
        { status: 400 }
      )
    }

    const updatedInventory = await prisma.inventory.update({
      where: { id },
      data: {
        name,
        ...rest ,
      },
    })

    return NextResponse.json(
      {
        message: `Inventory updated, new name is (${updatedInventory.name})`,
        result: updatedInventory,
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
    }
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    )
  }
}
