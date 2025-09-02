import { Outlet } from "react-router"
import Navbar from "./navbar/navbar"
import Footer from "./footer"

const AppLayout =()=>{
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout