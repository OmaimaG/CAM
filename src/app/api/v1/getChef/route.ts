import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// Export a named function for the GET request handler
export async function GET(req: NextRequest, res: NextResponse) {
  try {
 
    

    // Fetch technicians based on their role (assuming a relationship between User and Role)
    const chefDepartements = await prisma.user.findMany({
      where: {
        // Use the role relation to filter by Role_id
        Role: {
          id: "64cf8cbb5dd39cc313bc42d9",
        },
      },
      // You can select only the name field if needed
      select: {
        name: true,
      },
    });

    // Extract the names from the technician objects
    const chefDepartementNames = chefDepartements.map((chef_department) =>chef_department.name);

    // Return the list of technician names as JSON response
    return NextResponse.json(
      {
        message: `chef`,
        result: chefDepartementNames,
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
