import { Outlet } from "react-router";
import { NavLink } from "react-router";

function Technologies() {
  return (
    <div>
      <nav className="p-5">
      <ul className="flex justify-center gap-6">
        <li>
          <NavLink to = "java" className={({isActive})=> (isActive? "text-red-600 bg-red-200 p-3 rounded-2xl":"")}>Java</NavLink>
        </li>
        <li>
          <NavLink to = "nodejs" className={({isActive})=> (isActive? "text-red-600 bg-red-200 p-3 rounded-2xl":"")}>Nodejs</NavLink>
        </li>
        <li>
          <NavLink to = "vue" className={({isActive})=> (isActive? "text-red-600 bg-red-200 p-3 rounded-2xl":"")}>Vue</NavLink>
        </li>
      </ul>
    </nav>
      <Outlet />
    </div>
  )
}

export default Technologies