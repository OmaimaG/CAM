import { NextRequest, NextResponse } from "next/server"
import { connect } from "@/db"
import Categorie from "@/models/categorie";
connect()

export async function GET(request: NextRequest) {
 
  try {
   const asset = await Categorie.find({});

   return NextResponse.json({message:"Fetched users",
    success:true,
    asset}
   )

  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({error:"Internal Server Error"},{status:400})  
    }
}
