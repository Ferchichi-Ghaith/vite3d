import React, { useState } from "react";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import './Navbar.css'
import Dialog from "./Dialog";
import Openspace from "./openspace";
import { QueryClientProvider, QueryClient } from "react-query";



function Navbar() {
  const queryClient = new QueryClient()
  return (

    <div className="header">
  <ul className="nav">
  <li className="logo px-7">Open Space<sup>+</sup> </li>
    <li className=" px-6  py-6 bg-slate-500 rounded-2xl w-0 justify-center flex">
    <QueryClientProvider client={queryClient}>
     <Openspace />
    </QueryClientProvider>  
      </li>
    
    <li className="nav-item py-6 px-5 "> 
    <Dialog />
    </li>
  </ul>
</div> 
        
      
       

      
     
      
  )
}

export default Navbar
//       <li className='about py-4 px-4  text-white tracking-widest font-bold ' > <Dialog />  </li>
// <li className="btn-try">

