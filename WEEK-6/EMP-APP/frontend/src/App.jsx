import {createBrowserRouter, RouterProvider} from 'react-router';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import Employee from './components/Employee';
import EditEmployee from './components/EditEmployee';


function App() {

  const routerObj = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children: [
        {
          path:"",
          element:<Home />
        },
        {
          path:"create-employee",
          element:<CreateEmployee />
        },
        {
          path:"employees",
          element:<EmployeeList />
        },
        {
          path:"employee",
          element:<Employee />
        },
        {
          path:"edit-emp",
          element:<EditEmployee />
        }
      ]
    }
  ])
  return (
    <RouterProvider router ={routerObj} />
  )
}

export default App