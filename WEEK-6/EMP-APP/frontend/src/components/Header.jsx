import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-end bg-gray-600 gap-16 p-6">
      <NavLink to = "" className={({isActive})=>isActive?"text-white":""}>Home</NavLink>
      <NavLink to = "create-employee" className={({isActive})=>isActive?"text-white":""}>Add Employee</NavLink>
      <NavLink to = "employees" className={({isActive})=>isActive?"text-white":""}>Employees</NavLink>
    </nav>
  )
}

export default Header