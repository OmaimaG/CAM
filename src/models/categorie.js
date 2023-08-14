import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';



const categorySchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: [true, "Please provide a name"],
        unique: true,


    },
    description:  {
        type: String,
        required: [true, "Please provide a name"],
        unique: true,


    },




})

const Categorie = mongoose.models.asset || mongoose.model("asset", categorySchema);
export default Categorie;




