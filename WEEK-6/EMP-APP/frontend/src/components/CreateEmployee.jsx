import {useForm} from 'react-hook-form';
import { useState } from 'react';
import {useNavigate} from 'react-router';
import { useContext } from 'react';
import { counterContextObj } from '../contexts/ContextProvider';

function CreateEmployee() {

  const {counter,changeCounter} = useContext(counterContextObj);

  const [loading,setLoading]=useState(false);
  const [error,setErrors]=useState(null);
  const navigate = useNavigate();

  const {register,handleSubmit,formState:{errors}}=useForm()

  //form submit
  const onFormSubmit= async (newEmpObj)=>{

    try{
    //make HTTP POST REQ
    setLoading(true)

    let res = await fetch(`${process.env.VITE_API_URL || 'http://localhost:5000'}/employee-api/employees`,{
      method:"POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(newEmpObj)
    })
    if(res.status===201){
      //navigate to employees component programatically
      navigate("/employees")
    }else{
      let errorRes = await res.json()
      //console.log("error response is ",errorRes)
      throw new Error(errorRes.message || errorRes.error || "Something went wrong")
    }
    }catch(err){
      setErrors(err.message)
    }finally{
      setLoading(false)
    }

  }
  
  if(loading){
    return <p className='text-2xl text-red-500 text-center'>Loading...</p>
  }
  if(error){
    return <p className='text-2xl text-red-500 text-center'>{error}</p>
  }
  
  return (
    <div>
      <div>
         <h1 className='text-4xl text-center mb-0.5 p-3'>Counter: {counter}</h1>
         <button onClick={changeCounter} className='bg-gray-400 border border-gray-900 block mx-auto text-3xl mb-3'>+1</button>
      </div>
      <h1 className='text-5xl text-center text-gray-900 mb-3'>Create New Employee</h1>
      {/* form */}
      <form className='max-w-md mx-auto mt-10 items-center' onSubmit={handleSubmit(onFormSubmit)}>
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
        <button type="submit" className='border-2 p-3 mb-3 rounded-2xl block mx-auto bg-gray-700 text-white'>Add Emp</button>
      </form>
    </div>
  )
}

export default CreateEmployee