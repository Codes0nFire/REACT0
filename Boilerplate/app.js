const express=require("express");//require express
const userRouter=require("./Routes/userRoute");

require("./Models/dbconfig").dbconnection();//require db connection from dbconfig file
// const dotenv=require("dotenv");
// dotenv.config({path:"./.env"})
require("dotenv").config({path:"./.env"});//require enviorment variables

const app=express(); 


const PORT=process.env.PORT;//setting up the [port to accces

// logger(log the entry of routes in terminal)
const logger = require("morgan");
app.use(logger("tiny"));
// body pasrser(cannot send post req without it)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 

app.use("/",userRouter)//setting up the base route (/)

app.listen(PORT,()=>{
    console.log(`The server is running on port: ${PORT}`);
})//turn on the server on the port: PORT


