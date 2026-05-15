import exp from "express";
import { connect } from "mongoose";
import { userApp } from "./APIs/UserAPI.js";
import { productApp } from "./APIs/ProductAPIs.js";
import cookieParser from "cookie-parser";
import {config} from "dotenv";

config(); //process object will get all env variables => process.env.PORT 

const app=exp()

//add body parser middleware
app.use(exp.json())  

//add cookie parser middleware
app.use(cookieParser())



//forward req to userApp if path starts with /user-api
app.use("/user-api",userApp)

//forward req to productApp if path starts with /product-api
app.use("/product-api",productApp)

const port = process.env.PORT || 4000
//Connect to DB server
async function connectDB(){
    try{
    await connect(process.env.DB_URL);
    console.log("DB connection successful...");

    //start server
    app.listen(port,()=>console.log(`server on port ${port}`))

    }catch (err){
        console.log("error in db connection: ",err);
    }

}

connectDB() 

//ERROR HANDLING MIDDLEWARE
app.use((err,req,res,next)=>{

    //ValidationError
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"Error occured",error:err.message})
    }
    //CastError
    if(err.name==="CastError"){
        return res.status(400).json({message:"Error occured",error:err.message})
    }
    

    //send server side errors
    res.status(500).json({message:"Error ocuured",error:"Server side error"})

})

//every error contains => {name, message, callstack}