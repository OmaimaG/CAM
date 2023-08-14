import { connect } from "@/db"
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from 'bcryptjs';


connect()


export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json()
        const { username, surname,addresse,position,email, password } = reqBody
        console.log(reqBody)
        //CHEK IF USER ALREADY EXISTS
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({error:"User already exists"},{status:400})
            
}
//HASH PASWORD
const salt =await bcryptjs.genSalt(10)
const hashedPassword=await bcryptjs.hash (password,salt)

//CREE NEW USER
 const newUser=new User({
username,
surname,
addresse,
position,

email,
password:hashedPassword
})

const savedUser =await newUser.save()
console.log(savedUser);
return NextResponse.json({message:"User created",
success:true,
savedUser}
)




    } catch (error: any) {

        return NextResponse.json({ error: error.message }, { status: 500 })


    }











}