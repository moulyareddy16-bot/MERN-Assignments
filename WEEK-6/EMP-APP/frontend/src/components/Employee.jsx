import { useLocation } from "react-router"

function Employee() {

  const {state} = useLocation();
  
  return (
    <div className="text-center text-3xl py-20 mx-100 border-2 border-gray-900 shadow-2xl rounded-2xl">
      <p className="mb-2">NAME: {state.name}</p>
      <p className="mb-2">EMAIL: {state.email}</p>
      <p className="mb-2">MOBILE: {state.mobile}</p>
      <p className="mb-2">DESIGNATION: {state.designation}</p>
      <p className="mb-2">COMPANYNAME: {state.companyName}</p>
    </div>
  )
}

export default Employee