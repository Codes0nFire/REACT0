const express=require("express");
// const dotenv=require("dotenv");
// dotenv.config({path:"./.env"})
require("dotenv").config({path:"./.env"});

const app=express(); 

const PORT=process.env.PORT;

 
app.listen(PORT,()=>{
    console.log(`The server is running on port: ${PORT}`);
})