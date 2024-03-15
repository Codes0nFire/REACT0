const express=require("express");//require express
const userRouter=require("./Routes/userRoute");


//require db connection from dbconfig file
require("./Models/dbconfig").dbconnection();
// const dotenv=require("dotenv");
// dotenv.config({path:"./.env"})

//require enviorment variables
require("dotenv").config({path:"./.env"});

const app=express(); 

//setting up the [port to accces
const PORT=process.env.PORT;

// logger(log the entry of routes in terminal)
const logger = require("morgan");
app.use(logger("tiny"));

// body pasrser(cannot send post req without it)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 
//setting up the base route (/)
app.use("/",userRouter)

//turn on the server on the port: PORT
app.listen(PORT,()=>{
    console.log(`The server is running on port: ${PORT}`);
})


