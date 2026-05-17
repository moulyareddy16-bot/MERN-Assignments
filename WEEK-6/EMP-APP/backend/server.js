import exp from "express"
import { connect } from "mongoose";
import {config} from "dotenv";
import { employeeApp } from "./routes/employeeRoutes.js";
import cors from 'cors';

config();

const app=exp()

//add cors middleware
app.use(
    cors({
        origin:[process.env.FRONTEND_URL || "http://localhost:5173"]
    }) 
)

//add body parser middleware
app.use(exp.json())

// Root route for health check
app.get("/", (req, res) => {
    res.send("Server is running...");
})

app.use("/employee-api", employeeApp)

const port = process.env.PORT || 5000
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

connectDB();

//error handling middleware
app.use((err,req,res,next)=>{

    //ValidationError
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"Error occurred",error:err.message})
    }
    //CastError
    if(err.name==="CastError"){
        return res.status(400).json({message:"Error occurred",error:err.message})
    }
    

    //send server side errors
    res.status(500).json({message:"Error occurred",error:"Server side error"})

})