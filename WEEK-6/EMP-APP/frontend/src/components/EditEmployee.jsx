import { useForm } from "react-hook-form"
import { useLocation } from "react-router";
import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";

//disabled

function EditEmployee() {
  
  const {register,handleSubmit,formState:{errors},setValue}=useForm()

  const {state} = useLocation();
  //console.log(state)

  const navigate=useNavigate();

  useEffect(()=>{
    setValue("name",state.name);
    setValue("email",state.email);
    setValue("mobile",state.mobile);
    setValue("designation",state.designation);
    setValue("companyName",state.companyName);
  },[])

  const saveModifiedEmployee= async (modifiedEmp)=>{
    try {
      const res = await axios.put(`${process.env.VITE_API_URL || 'http://localhost:5000'}/employee-api/employees/${state._id}`, modifiedEmp);
       if(res.status===200){
       navigate("/employees")
      }
    } catch (err) {
      console.error("Error updating employee:", err);
    }
  }

  return (
    <div>
      <h1 className='text-5xl text-center text-yellow-500 mb-3'>Edit Employee</h1>
      {/* form */}
      <form className='max-w-md mx-auto mt-10 items-center' onSubmit={handleSubmit(saveModifiedEmployee)}>
        <div>
        <input type="text" placeholder='Enter name' {...register("name",
          {
            required:"Username required",
            maxLength:10,
            validate:(value)=>value.trim().length!==0 || "White space is not valid"
          }
        )} className='mb-3 border-2 p-3 w-full rounded-2xl' />
        {/* username validation error message */}
        {
        errors.name?.type === "required" && <p className='text-red-500'>{errors.name.message}</p>
        }
        {
        errors.name?.type === "maxLength" && <p className='text-red-500'>Maximum 10 characters are allowed</p>
        }
        {
        errors.name?.type === "validate" && <p className='text-red-500'>{errors.name.message}</p>
        }
        </div>
        <div>
        <input type="email" placeholder='Enter email' {...register("email",
          {
            required:"Email required",
            validate:(value)=>value.trim().length!==0 || "White space is not valid"
          }
        )} className='mb-3 border-2 p-3 w-full rounded-2xl' />
         {/* email validation error message */}
        {
        errors.email?.type === "required" && <p className='text-red-500'>{errors.email.message}</p>
        }
        {
        errors.email?.type === "validate" && <p className='text-red-500'>{errors.email.message}</p>
        }
        </div>
        <div>
        <input type="text" placeholder='Enter mobile number' {...register("mobile",
          {
            required:"Mobile Number required"
          }
        )} className='mb-3 border-2 p-3 w-full rounded-2xl' />
        {/* mobile validation error message */}
        {
        errors.mobile?.type === "required" && <p className='text-red-500'>{errors.mobile.message}</p>
        }
        </div>
        <div>
        <input type="text" placeholder='Enter designation' {...register("designation",
          {
            required:"Designation required",
            validate:(value)=>value.trim().length!==0 || "White space is not valid"
          }
        )} className='mb-3 border-2 p-3 w-full rounded-2xl' />
        {/* designation validation error message */}
        {
        errors.designation?.type === "required" && <p className='text-red-500'>{errors.designation.message}</p>
        }
        {
        errors.designation?.type === "validate" && <p className='text-red-500'>{errors.designation.message}</p>
        }
        </div>
        <div>
        <input type="text" placeholder='Enter name of the company' {...register("companyName",
          {
            required:"Name of the Company required",
            validate:(value)=>value.trim().length!==0 || "White space is not valid"
          }
        )} className='mb-3 border-2 p-3 w-full rounded-2xl' />
         {/* companyName validation error message */}
        {
        errors.companyName?.type === "required" && <p className='text-red-500'>{errors.companyName.message}</p>
        }
        {
        errors.companyName?.type === "validate" && <p className='text-red-500'>{errors.companyName.message}</p>
        }
        </div>
        <button type="submit" className='border-2 p-3 mb-3 rounded-2xl block mx-auto bg-green-900 text-white'>Save</button>
      </form>
    </div>
  )
}

export default EditEmployee