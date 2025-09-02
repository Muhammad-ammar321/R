import {  NavLink } from "react-router"

const routesArray = [
    { to: '/', title: 'Home' },
    { to: 'about', title: 'About Us' },
    { to: 'contact', title: 'Contact Us' },
]


const Navbar = () => {
    return (
        <nav>
            {routesArray.map((route) => (
                <NavLink to={route.to} className={({ isActive, isPending }) => 
                isPending ? 'pending' : isActive ? "active" :""} >
                    {route.title}
                </NavLink>
            ))
            }
        </nav>
    )
}
export default Navbar

