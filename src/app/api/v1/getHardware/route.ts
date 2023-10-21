import { PrismaClient } from '@prisma/client';
import {  NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(res: NextResponse) {
  try {
    const hardwareIPs = await prisma.inventory.findMany({
      where: {
        type: 'hardware',
      },
      select: {
        ip: true,
        
      },
    });
    const ips = hardwareIPs.map((item) => item.ip);

    // Return the list of technician names as JSON response
    return NextResponse.json(
      {
        message: `Technicians`,
        result: ips,
      }
    );
  
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
}
}
