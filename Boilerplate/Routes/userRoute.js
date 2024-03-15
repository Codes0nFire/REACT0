const express=require("express");
const router=express.Router();


//sending get request to the server 
router.get("/", function(req,res,next){
   res.json({working:true,firstroute:true})
})


//sending post request to the server(it caanot be acccesed without body parser in app.js)
router.post("/posting",function(req,res,next){
    res.send(req.body);
})

module.exports=router;