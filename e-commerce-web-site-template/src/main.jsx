import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter } from 'react-router-dom'
import { SiteContextProvider } from './context/SiteContext.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SiteContextProvider>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
      </SiteContextProvider>  
    </BrowserRouter>
  </React.StrictMode>,
)
