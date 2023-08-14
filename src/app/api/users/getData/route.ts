import { NextRequest, NextResponse } from "next/server"
import { connect } from "@/db"
import User from "@/models/userModel";
connect()

export async function GET(request: NextRequest) {
 
  try {
   const users = await User.find({});

   return NextResponse.json({message:"Fetched users",
    success:true,
    users}
   )

  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({error:"Internal Server Error"},{status:400})  
    }
}
