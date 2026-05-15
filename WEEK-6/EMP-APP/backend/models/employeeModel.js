import { Schema, model, Types } from "mongoose";

//Create Employee Schema (name,email,mobile,designation,companyName)
const employeeSchema = new Schema({

    //structure of Employee resource
    name : {
        type : String,
        required : [true,"Name is required"],
        minLength : [5,"Minimum 5 characters are required"],
        maxLength : [10,"Maximum of 10 characters are possible"]
    },
    email : {
        type : String,
        required : [true,"Email is required"],
        unique : true
    },
    mobile : {
        type : String,
        required : [true,"Mobile number is required"],
        match : [/^\d{10}$/,"Mobile number must be 10 digits"]
    },
    designation : {
        type : String,
        required : [true,"Designation is required"]
    },
    companyName : {
        type : String,
        required :[true,"CompanyName is required"]
    }
},{
    versionKey : false,
    timestamps : true
}
)

//Generate EmployeeModel
export const EmployeeModel=model("employee",employeeSchema)