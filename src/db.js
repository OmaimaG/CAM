import mongoose from "mongoose";
export async function connect (){
    /*if (connection.isConnected) {
        return;
    }*/

    try {
        console.log(process.env.MONGODB_URI);
      const {connection} =await mongoose.connect(process.env.MONGODB_URI);
if (connection.readyState==1){
console.log("Databaseconnected")

}
    } catch (error) {
        console.error(error);
    }

}
