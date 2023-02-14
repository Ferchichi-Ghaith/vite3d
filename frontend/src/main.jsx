import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Footer from "./components/footer"
import Home from "./components/Navbar"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home className="Nav-bar" />
      <App />
   <Footer className="footer" />
  </React.StrictMode>,
)

