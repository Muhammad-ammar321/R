import { Outlet } from 'react-router'
import Navbar from '../Navbar/navbar'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout