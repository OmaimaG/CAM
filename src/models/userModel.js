import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,


    },
    surname: {
        type: String,
        required: [true, "Please provide a username"],
       


    },
    addresse: {
        type: String,
        required: [true, "Please provide a username"],
       


    },
    position: {
        type: String,
        required: [true, "Please provide a username"],
       


    },
 

    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,


    },
    password: {
        type: String,
        required: [true, "Please provide a password"],

    },
    isVerfied: {

        type: Boolean,
        default: false,},
    isAdmin:{
        type: Boolean,
        default: false,},
        
        forgotPasswordToken :String,
        forgotPassordTokenExpiry:Date,
        verifyToken:String,
        verifyTokenExpiry:Date,



})
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;