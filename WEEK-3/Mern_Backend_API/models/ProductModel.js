import {Schema , model} from "mongoose"

const productSchema= new Schema({

    //structure of product 
    productId : {
        type : Number,
        required : [true,"Product ID is required"],
    },
    productName : {
        type : String,
        required : [true,"Product Name is required"]
    },
    price : {
        type : Number,
        required : [true,"Price is required"],
        min : [10000,"Min price is 10000"],
        max : [50000,"Max price is 50000"]
    },
    brand : {
        type : String,
        required : [true,"Brand is required"]
    }

},{
    versionKey:false,
    timestamps:true
})

//Generate product model
export const ProductModel = model("product",productSchema)