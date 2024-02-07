import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import UpcommingEvents from "../../Pages/UpcommingEvents/UpcommingEvents";
import Gallery from "../../Pages/Gallery/Gallery";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [

        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/upcommingevents",
          element:<UpcommingEvents></UpcommingEvents>
        },
        {
          path:"/gallery",
          element:<Gallery></Gallery>
        }
      ]
    },
  ]);