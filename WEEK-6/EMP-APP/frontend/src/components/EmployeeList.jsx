import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

function EmployeeList() {
  const navigate=useNavigate();

  const gotoEmployee=(empObj)=>{
    //navigate to /employee along with selected emp obj
    navigate("/employee", {state: empObj});
  }

  const gotoEditEmployee = (empObj)=>{
    navigate("/edit-emp", {state: empObj});
  }
  

  const deleteEmpById = async (id)=>{
    try {
      let res = await axios.delete(`${process.env.VITE_API_URL || 'http://localhost:5000'}/employee-api/employees/${id}`)
      console.log(res)
      if(res.status === 200){
        //get latest emps data
        getEmps();
      }
    } catch (err) {
      console.error("Error deleting employee:", err);
    }
  }

  const [emps,setEmps] = useState([])

  async function getEmps(){
      try {
        let res = await axios.get(`${process.env.VITE_API_URL || 'http://localhost:5000'}/employee-api/employees`)
        if(res.status===200){
          let resObj = res.data
          setEmps(resObj.payload)
        }
      } catch (err) {
        console.error("Error fetching employees:", err);
      }
    }

  useEffect(()=>{
    getEmps();
  },[]);
  
  
  return (
    <div>
      <h1 className="text-4xl text-gray-900 p-3 mb-3 text-center">List Of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {emps.map((empObj)=>(
          <div key={empObj._id} className="bg-white border shadow-2xl">
            <p className="mt-3">{empObj.name}</p>
            <p className="mb-3">{empObj.email}</p>
            {/* 3 buttons */}
            <div className="flex justify-around gap-4 mb-3 mx-2">
              <button onClick={() => gotoEmployee(empObj)} className="bg-blue-500 rounded-2xl p-2 w-full text-white">View</button>
              <button onClick={() => gotoEditEmployee(empObj)} className="bg-yellow-500 rounded-2xl p-2 w-full text-white">Edit</button>
              <button onClick={()=> deleteEmpById(empObj._id)} className="bg-red-500 rounded-2xl p-2 w-full text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmployeeList