import { useState } from 'react'
import './App.css'
import logo from './Images/logo.svg';
import flag from './Images/india-flag.svg';
function App() {
 
  return (
    <>
      <nav>
         <ul className=' bg-[#02042A]  w-full  px-4   ' >
         <div className=' relative w-[1080px]  mx-auto flex items-center  space-x-10  '>
          
          <a href="/" className=' cursor-pointer py-7 pr-7 '>  
          <img src={logo} width="100" height="50" />
          </a>
           <ul className='flex space-x-8'>

            <li className=' text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href="#"> Payments </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href="#"> Banking+ </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href="#"> Credit </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href="#"> Payroll </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href="#"> Resources </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href="#"> Support </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href="#"> Pricing </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>
            </li>
           </ul>
           
           <div className='flex space-x-4'>
           
                  
                  <img src={flag} width="28" height="28" />
                  <li>
                    <button className=' border-lightBlue border-2  text-white px-5 py-3 font-mullish rounded-md font-bold'> Log In </button>
                  </li>

                  <li>
                    <button className=' border-lightBlue  border-2 text-lightBlue bg-white px-4 py-3 font-mullish rounded-md font-bold transition-all duration-200 hover:text-lightBlue500  overflow-hidden' > Sign Up <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="w-[14px] h-[14px] ml-3 overflow-hidden "
            >
              <path className='overflow-hidden'
                fill="currentColor"
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path>
            </svg> </button>
                  </li>

           </div>





         </div>
        </ul>
      </nav>
    
    </>
  )
}

export default App
