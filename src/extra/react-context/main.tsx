import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './main.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import SiteProvider from './context/contextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteProvider>

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SiteProvider>
  
  </StrictMode>
)