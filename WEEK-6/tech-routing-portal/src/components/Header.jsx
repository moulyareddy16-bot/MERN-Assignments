import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="p-5">
      <ul className="flex justify-end gap-6">
        <li>
          <NavLink to = "/" className={({isActive})=> (isActive? "text-blue-600 bg-blue-200 p-3 rounded-2xl":"")}>Home</NavLink>
        </li>
        <li>
          <NavLink to = "/register" className={({isActive})=> (isActive? "text-blue-600 bg-blue-200 p-3 rounded-2xl":"")}>Register</NavLink>
        </li>
        <li>
          <NavLink to = "/login" className={({isActive})=> (isActive? "text-blue-600 bg-blue-200 p-3 rounded-2xl":"")}>Login</NavLink>
        </li>
        <li>
          <NavLink to ="/technologies" className={({isActive})=> (isActive? "text-blue-600 bg-blue-200 p-3 rounded-2xl":"")}>Technologies</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header 