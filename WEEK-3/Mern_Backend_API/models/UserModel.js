import {Schema , model , Types} from "mongoose"

//craete cart Schema(product, count)
const cartSchema = new Schema ({
    //structure of cart Schema
    product : {
        type : Types.ObjectId,
        ref : "product" //name of the product model     
    },
    count : {
        type : Number,
        default : 1
    }
})

//Create User Schema(username,password,email,age)
const userSchema = new Schema({

    //structure of User resource
    username : {
        type : String,
        required : [true,"Username is required"],
        minLength : [5,"Minimum 5 chracters are required"],
        maxLength : [10,"Maximum of 10 characters are possible"]
    },
    password : {
        type : String,
        required : [true,"Password is required"] 
    },
    email : {
        type : String,
        required : [true,"Email is required"],
        unique : [true,"Email already existed"]
    },
    age : {
        type : Number
    },
    cart : [cartSchema] 

},{
    versionKey:false,
    timestamps:true
}) 

//Generate UserModel
export const UserModel=model("user",userSchema)