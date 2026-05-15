import {Schema, model, Types} from 'mongoose'

//craete comment schema
const commentSchema = new Schema ({
    user : {
        type : Types.ObjectId,
        ref : "user",
        required : [true,"User ID is required"]
    },
    comment : {
        type : String,
        required :[true,"Enter Comment"]
    }
})

//create article schema
const articleSchema = new Schema({
    author : {
        type : Types.ObjectId,
        ref : "user",
        required : [true,"Author ID is required"]
    },
    title : {
        type : String,
        required : [true,"Title is required"]
    },
    category : {
        type : String,
        required : [true,"Category is required"]
    },
    content : {
        type : String,
        required : [true,"Content is required"]
    },
    comments : [{type:commentSchema, default:[]}],
    isArticleActive : {
        type : Boolean,
        default : true
    }
},
{
    versionKey : false,
    timestamps : true,
    strict : "throw"
})

//create article mode;
export const ArticleModel = model("article",articleSchema)