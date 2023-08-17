import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@picocss/pico'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
  [ ] : En üstte bir nav bar olsun searchbarlı
  [ ] : Altında bir slider olsun
  [ ] : Sonrasında product list olsun
  [ ] : Bir rooter yapısı ile product details sayfası oluşturulsun.
*/