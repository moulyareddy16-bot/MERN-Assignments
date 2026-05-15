import jwt from "jsonwebtoken"
const {verify} = jwt
import {config} from "dotenv"
config()


export function verifyToken(req,res,next){

    //token verification logic
    const token = req.cookies?.token;

    //if req from unauthorized user
    if(!token){
        return res.status(401).json({message:"Please Login"})
    }

    try{ //this is not a route so no built-in error handling
    //if token is existed
    const decodedToken = verify(token,process.env.SECRET_KEY)  //verify function returns error when token is invalid
    console.log(decodedToken);

    //Attach decoded user to req
    req.user=decodedToken

    //call next
    next();
    
    } catch(err){
        res.status(401).json({mesage:"Session Expired...Please Re-login to Continue"})
    }
    
}