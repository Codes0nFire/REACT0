const mongoose=require("mongoose");

require("dotenv").config({path:"./.env"});



exports.dbconnection= async()=>{

   await mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("connection done lets go ")
    }
   ).catch(
    (error)=>{
        console.log(`error is => ${error}`)
    }
   )    

}