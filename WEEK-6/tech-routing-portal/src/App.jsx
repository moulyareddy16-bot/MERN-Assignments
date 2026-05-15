import { createBrowserRouter,RouterProvider, Navigate} from "react-router";
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Technologies from './components/Technologies';
import Java from './components/Java';
import Nodejs from './components/Nodejs';
import Vue from './components/Vue';

function App() {

  //adding routing configuration
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
          path:"register",
          element:<Register />
        },
        {
          path:"login",
          element:<Login />
        },
        {
          path:"technologies",
          element:<Technologies />,
          children: [
            {
              index:true,  //index true means it checks with its perent path and loads with respect to its parents path
              element:<Navigate to="java" replace />
            },
            {
              path:"java",
              element:<Java />
            },
            {
              path:"nodejs",
              element:<Nodejs />
            },
            {
              path:"vue",
              element:<Vue />
            }
          ]
        }
      ]
    }
  ]);


  return (
    <RouterProvider router={routerObj} />
  )
}

export default App