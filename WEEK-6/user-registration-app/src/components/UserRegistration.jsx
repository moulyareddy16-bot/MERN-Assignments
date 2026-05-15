import {useForm} from 'react-hook-form';
import { useState } from 'react';

function UserRegistration(){
    const {register, //to register form fields
        handleSubmit, //to handle for submission
        reset, //to clear form fields
        formState:{errors} //to handle validations
    } = useForm();
    
    const [users, setUsers] = useState([]);
    //form submit function
    const onFormSubmit=(obj)=>{
        setUsers([...users,obj]);
        reset();
    }

    return(
        <div>
            {/* Users Form */}
            <div>
            <h1 className='text-center text-5xl'>Users Form</h1>
            {/* form */}
            <form className='max-w-md mx-auto mt-10' onSubmit={handleSubmit(onFormSubmit)}>
                {/* firstName */}
                <div className='mb-3'>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" {...register("firstname",
                        {
                            required:"First name is required",
                            validate:(value)=>value.trim().length!==0 || "White space is invalid",
                            maxLength:15
                        }
                    )} id="firstname" placeholder='firstName' className='border w-full p-3'/>
                    {
                        errors.firstname?.type === "required" && <p className='text-red-500'>{errors.firstname.message}</p>
                    }
                    {
                        errors.firstname?.type === "validate" && <p className='text-red-500'>{errors.firstname.message}</p>
                    }
                    {
                        errors.firstname?.type === "maxLength" && <p className='text-red-500'>15 characters are only allowed</p>
                    }
                </div>
                {/* email */}
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email",
                        {
                            required:"Email is required",
                            validate:(value)=>value.trim().length!==0 || "White space is invalid"
                        }
                    )} id="email" placeholder='Email' className='border w-full p-3'/>
                    {
                        errors.email?.type === "required" && <p className='text-red-500'>{errors.email.message}</p>
                    }
                    {
                        errors.email?.type === "validate" && <p className='text-red-500'>{errors.email.message}</p>
                    }
                </div>
                {/* dob */}
                <div className='mb-3'>
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" {...register("dob",
                        {
                            required:"DOB is required",
                            validate:(value)=>value.trim().length!==0 || "White space is invalid"
                        }
                    )} id="dob" placeholder='dd-mm-yyyy' className='border w-full p-3'/>
                    {
                        errors.dob?.type === "required" && <p className='text-red-500'>{errors.dob.message}</p>
                    }
                    {
                        errors.dob?.type === "validate" && <p className='text-red-500'>{errors.dob.message}</p>
                    }
                </div>
                {/* submit button */}
                <button type="submit" className='p-3 border bg-blue-400 block mx-auto rounded-2xl'>Add User</button>
            </form>
            </div>
            
            {/* Table tp store user data */}
            {
                <div>
                <h1 className='text-center text-5xl mb-3'>List Of Users</h1>
                <table className='border border-collapse mx-auto mb-3 p-3'>
                  <thead>
                    <tr className='bg-gray-200'>
                    <th className='border p-3'>firstName</th>
                    <th className='border p-3'>email</th>
                    <th className='border p-3'>dateOfBirth</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        users.map((obj, index)=>(
                            <tr key={index}>
                              <td className='border p-3'>{obj.firstname}</td>
                              <td className='border p-3'>{obj.email}</td>
                              <td className='border p-3'>{obj.dob}</td>
                            </tr>  
                        ))
                      }
                  </tbody>
                </table>
                </div>

            }

        </div>
    )
}   

export default UserRegistration;