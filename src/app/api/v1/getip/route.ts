import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { searchText } = await req.json();

    const hardwareIPs = await prisma.inventory.findMany({
      where: {
        ip: searchText,
      },
      select: {
        name: true,
        type  : true ,
        status : true,
        version : true ,
        item : true ,
        physical_location :true ,
        installation_date :true ,

      },
    });

    //const names = hardwareIPs.map((item) => item.name);

    // Retournez la liste des noms de techniciens en tant que réponse JSON
    return NextResponse.json({
   
       hardwareIPs 
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
