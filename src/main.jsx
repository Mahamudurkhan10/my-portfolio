import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import ContactMe from './Components/Contact/ContactMe';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/aboutMe',
        element: <AboutMe></AboutMe>

      },
      {
        path:'/contactMe',
        element: <ContactMe></ContactMe>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div >
   <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
 </div>,
)
