// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Welcome from './components/welcome'
import Bio from './components/bio/bio'

function App() {
  return (
    <>
    <Bio name="user" email="user@email.com" occupation=''>
      <p>My hobbies are</p>
      <ol>
        <li>reading</li>
        <li>gaming</li>
      </ol>
    </Bio> 
    </>
  )
}

export default App
