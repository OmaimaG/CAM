import { connect } from "@/db"
import Categorie from "@/models/categorie";
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from 'bcryptjs';


connect()


export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json()
        const { name, name_desc } = reqBody
        console.log(reqBody)
        //CHEK IF USER ALREADY EXISTS
        const user = await Categorie.findOne({ name_desc })
        if (user) {
            return NextResponse.json({error:"type already exists"},{status:400})
            
}
//HASH PASWORD
//const salt =await bcryptjs.genSalt(10)
//const hashedPassword=await bcryptjs.hash (password,salt)

//CREE NEW categorie
 const newCategorie=new Categorie({
name,
name_desc,

})

const savedCategorie =await newCategorie.save()
console.log(savedCategorie);
return NextResponse.json({message:"categorie created",
success:true,
savedCategorie}
)




    } catch (error: any) {

        return NextResponse.json({ error: error.message }, { status: 500 })


    }











}