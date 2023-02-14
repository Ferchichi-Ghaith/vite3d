import React from 'react'
import "./footer.css"

function footer() {
  const year = new Date().getFullYear();
  return (
   <div className='footer'>
       <span className='text-footer opacity-70 bg-slate-600 font-mono px-1 py-0.5 rounded-sm'>  Copyright © {year} powered by 2810<sup>+</sup> TECHNOLOGY ! </span>

   </div>
    
  )
}

export default footer