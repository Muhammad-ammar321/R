import { createBrowserRouter } from "react-router"
import AppLayout from "../components/AppLayout"
import Home from "../pages/home"
import About from "../pages/aboutus"
import Contact from "../pages/contact"


const Routers  =  createBrowserRouter([
    {
        path: '/',
        element:<AppLayout />,
        children:[
            {
                path: '/',
                element:<Home />,
            },
            {
                path: 'about',
                element:<About />,
            },
            {
                path: 'contact',
                element:<Contact/>,
            },
            
        ]
    }
  ])

  export default Routers