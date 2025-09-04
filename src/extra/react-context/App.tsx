import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Route, Routes } from 'react-router'

import Layout from './components/Layout/layout'
import Home from './pages/Home/home'
import AddNewSite from './pages/addNewSite/addNewSite'
import About from './pages/about/about'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new-site" element={<AddNewSite />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App