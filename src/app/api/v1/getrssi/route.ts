import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// Export a named function for the GET request handler
export async function GET(req: NextRequest, res: NextResponse) {
  try {
 
    

    // Fetch technicians based on their role (assuming a relationship between User and Role)
    const rssis = await prisma.user.findMany({
      where: {
        // Use the role relation to filter by Role_id
        Role: {
          id: "64cf8cbb5dd39cc313bc42d7",
        },
      },
      // You can select only the name field if needed
      select: {
        name: true,
      },
    });

    // Extract the names from the technician objects
    const rssiNames = rssis.map((rssi) => rssi.name);

    // Return the list of technician names as JSON response
    return NextResponse.json(
      {
        message: `Technicians`,
        result: rssiNames,
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
