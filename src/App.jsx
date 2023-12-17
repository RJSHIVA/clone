import { useState } from 'react'
import './App.css'
import logo from './Images/logo.svg';
import flag from './Images/india-flag.svg';
import hero from './Images/hero-illustration.jpg';
import heroshape from './Images/hero-shape.svg';
import dot from './Images/feature-section1-dottedrows.png' ;
import payment from './Images/payment-suite.png'
import { Check } from 'react-feather';
import { ArrowRight } from 'react-feather';
import { ChevronRight } from 'react-feather';
import paylink from './Images/payment-link-icon.svg';
import flame from './Images/x-flame-1.png';
import rozarpay from './Images/razorpayX.svg'
import business from './Images/buisness-banking.png'
import current from './Images/current-icon.svg';
import flame2 from './Images/x-flame-2.png' 


function App() {
 
  return (
    <>
   <script src='https://unpkg.com/feather-icons'></script>
      <nav>
         <ul className=' bg-[#02042A]  w-full  px-4   ' >
         <div className=' relative w-[1080px]  mx-auto flex items-center  space-x-10  '>
          
          <a href='/' className=' cursor-pointer py-7 pr-7 '>  
          <img src={logo} width='120' height='50' />
          </a>
           <ul className='flex space-x-8'>

            <li className=' text-sm  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href='#'> Payments </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-white text-sm font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href='#'> Banking+ </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-sm  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href='#'> Credit </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-sm  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href='#'> Payroll </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-sm  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href='#'> Resources </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-sm  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href='#'> Support </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>

            </li>
            <li className=' text-sm  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group '>
              <a href='#'> Pricing </a>

               <div className=' absolute w-full h-1  group-hover:bg-lightBlue block transition-all duration-200 '></div>
            </li>
           </ul>
           
           <div className='flex space-x-6'>
              <img
                  src={flag}
                  width='28px'
                  height='20px'
                  className='hidden lg:block'
                  />
              <button className='py-3 px-5 font-mullish text-white border-lightBlue border
              rounded-sm text-sm  font-bold'>Log in</button>
              <button className='py-3 px-4 font-mullish rounded-sm text-sm font-bold
              bg-white text-lightBlue300 border transition-all duration-200
              hover:text-lightBlue500 hidden lg:flex'>Sign Up
              <svg
              viewBox='0 0 24 24'
              focusable='false'
              className='w-[14px] h-[14px] ml-3'
            >
              <path
                fill='currentColor'
                d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'
              ></path>
            </svg></button>
          </div>

         </div>
        </ul>
      </nav>
       

       <section className='relative  bg-deepBlue'>
       
       <div className='flex w-11/12 max-w-[1080px] flex-row   justify-between  items-center  mx-auto  '>
        
        <div className=' space-y-8 text-left'>
         <h1 className='
          font-mullish font-bold text-[40px] leading-[1.2] text-white'> Power Your finanace, grow your bussiness </h1> 
         <div className='w-6 h-1 bg-greenLight'></div>
         <p className=' font-mullish text-[18px] leading-7  text-white opacity-70'>Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.</p>
         <button className=' border-lightBlue   text-white bg-lightBlue font-mullish  rounded-sm  font-bold transition-all duration-200 hover:text-lightBlue500  overflow-hidden py-[14px] px-[18px]'>Sign Up Now</button>
        </div>

        
        <img src={hero} width='500' height='400' className=' w-full max-w-2xl'/>
        </div>     

        <div className=' absolute left-0 right-0 w-full '>
        <img src={heroshape} width='500' height='80' className='w-full ' />
        </div>
       </section>
      
      <section className='relative mt-60 overflow-hidden'>
      <img src={dot} width='233' height='167' loading='lazy' className=' absolute -top-[8rem] left-[10rem] inline-block -z-10   '/>

      <img src={dot} width='233' height='167' className='absolute  -top-  -right-0 inline-block rotate-180 '/>

      <div className=' relative w-11/12 max-w-[1080px] mx-auto pt-4'>
        <h2 className=' font-mullish text-center text-2xl leading-[1.2] font-bold'>Accept Payments with Razorpay Payment Suite</h2>
        <div className='w-6 h-1 mx-auto bg-greenLight mt-4 mb-6'></div>


        <div className='w-full min-h-[520]  border-2  bg-white flex rounded-md relative p-10 py-12 '>
          <div className='flex flex-col justify-between  w-full'>
            <h3 className='   font-mullish text-[28px] leading-10 font-bold max-w-[500px]'>Supercharge your business with the all‑powerful <span className='text-lightBlue'> Payment Gateway</span></h3>
            <ul className='space-y-2 mt-10'>
              <li className=' font-mullish flex items-center space-x-2'>< Check className='text-greenLight'/><span>100+ Payment Methods</span></li>
              <li className=' font-mullish flex items-center space-x-2'>< Check className='text-greenLight'/><span>Industry Leading Success Rate</span></li>
              <li  className=' font-mullish flex items-center space-x-2'>< Check className='text-greenLight'/><span>Superior Checkout Experience</span></li>
              <li  className=' font-mullish flex items-center space-x-2'>< Check className='text-greenLight'/><span>Easy to Integrate</span></li>
              <li  className=' font-mullish flex items-center space-x-2'>< Check className='text-greenLight'/><span>Instant Settlements from day 1</span></li>
              <li  className=' font-mullish flex items-center space-x-2' >< Check className='text-greenLight'/><span>In-depth Reporting and Insights</span></li>
            </ul>

          <div className=' mt-10 flex flex-row items-center space-x-4 '>
            <button className='flex flex-row border-lightBlue   text-white bg-lightBlue font-mullish  rounded-md  font-bold transition-all duration-200 hover:text-lightBlue500  overflow-hidden py-[14px] px-[18px]'>Sign Up Now <ArrowRight/></button>
            <div className='flex items-center cursor-pointer group '>
              <a href='#' className='flex font-mullish font-bold text-lightBlue500  group-hover:text-gray-500 transition-all duration-200'>Know more <ChevronRight/></a>
              <i></i>
            </div>
          </div>

         </div>
          <img src={payment}  className=' absolute max-w-[600px] right-0 bottom-0'/>

        </div>

        
      <div className='w-full mt-10  grid grid-cols-3 gap-4'>
          
          <div className='w-full min-h-[15rem] relative cursor-pointer'>

          <img src={paylink} width='233' height='167' className='absolute w-12 h-12 rounded-full -top-3  -right-3  bg-lightBlue z-[8] transition-all duration-200 '/>
           
                <svg
                      viewBox='0 0 349.32501220703125 225'
                      xmlns='http://www.w3.org/2000/svg'
                      preserveAspectRatio='none'
                      className='stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200  opacity-[0.25] '
                      
                       >
                <path
                      d='m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 250.32501220703125 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -337.32501220703125 
                  a 6 6 0 0 1 -6 -6 
                  z'
                      fill='#fff'
                ></path>
                  </svg>
           
           <div className='z-[100] absolute w-full h-full flex flex-col jus pl-5 py-6 pr-8'>
            <div>
              <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.3rem]'>Payment Links</h3>
              <p className=' font-mullish text-gray-500'>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
            </div>
            <div>
              <a href='#' className='flex font-mullish font-bold text-lightBlue500  group-hover:text-gray-500 transition-all duration-200'>Know More <ChevronRight/> </a>
              <i></i>
            </div>
           </div>
          </div>

          <div className=' group w-full min-h-[15rem] relative cursor-pointer '>

          <img src={paylink} width='233' height='167' className='absolute w-12 h-12 rounded-full -top-3  -right-3  bg-lightBlue z-[8] transition-all duration-200 group-hover:shadow-md '/>
           
                <svg
                      viewBox='0 0 349.32501220703125 225'
                      xmlns='http://www.w3.org/2000/svg'
                      preserveAspectRatio='none'
                      className='stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200  opacity-[0.25]  group-hover:shadow-md  '
                      
                       >
                <path
                      d='m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 250.32501220703125 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -337.32501220703125 
                  a 6 6 0 0 1 -6 -6 
                  z'
                      fill='#fff'
                ></path>
                  </svg>
           
           <div className='z-[100] absolute w-full h-full flex flex-col jus pl-5 py-6 pr-8'>
            <div>
              <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.3rem]'>Payment Links</h3>
              <p className=' font-mullish text-gray-500'>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
            </div>
            <div>
              <a href='#' className='flex font-mullish font-bold text-lightBlue500  group-hover:text-gray-500 transition-all duration-200'>Know More <ChevronRight/> </a>
              <i></i>
            </div>
           </div>
          </div>
           
          <div className='w-full min-h-[15rem] relative cursor-pointer'>

<img src={paylink} width='233' height='167' className='absolute w-12 h-12 rounded-full -top-3  -right-3  bg-lightBlue z-[8] transition-all duration-200 '/>
 
      <svg
            viewBox='0 0 349.32501220703125 225'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            className='stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200  opacity-[0.25] '
            
             >
      <path
            d='m 0 6 
        a 6 6 0 0 1 6 -6 
        h 250.32501220703125 
        a 16 16 0 0 1 11 5 
        l 77 77 
        a 16 16 0 0 1 5 11 
        v 126 
        a 6 6 0 0 1 -6 6 
        h -337.32501220703125 
        a 6 6 0 0 1 -6 -6 
        z'
            fill='#fff'
      ></path>
        </svg>
 
 <div className='z-[100] absolute w-full h-full flex flex-col jus pl-5 py-6 pr-8'>
  <div>
    <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.3rem]'>Payment Links</h3>
    <p className=' font-mullish text-gray-500'>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
  </div>
  <div>
    <a href='#' className='flex font-mullish font-bold text-lightBlue500  group-hover:text-gray-500 transition-all duration-200'>Know More <ChevronRight/> </a>
    <i></i>
  </div>
 </div>
          </div>

          <div className='w-full min-h-[15rem] relative cursor-pointer'>

<img src={paylink} width='233' height='167' className='absolute w-12 h-12 rounded-full -top-3  -right-3  bg-lightBlue z-[8] transition-all duration-200 '/>
 
      <svg
            viewBox='0 0 349.32501220703125 225'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            className='stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200  opacity-[0.25] '
            
             >
      <path
            d='m 0 6 
        a 6 6 0 0 1 6 -6 
        h 250.32501220703125 
        a 16 16 0 0 1 11 5 
        l 77 77 
        a 16 16 0 0 1 5 11 
        v 126 
        a 6 6 0 0 1 -6 6 
        h -337.32501220703125 
        a 6 6 0 0 1 -6 -6 
        z'
            fill='#fff'
      ></path>
        </svg>
 
 <div className='z-[100] absolute w-full h-full flex flex-col jus pl-5 py-6 pr-8'>
  <div>
    <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.3rem]'>Payment Links</h3>
    <p className=' font-mullish text-gray-500'>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
  </div>
  <div>
    <a href='#' className='flex font-mullish font-bold text-lightBlue500  group-hover:text-gray-500 transition-all duration-200'>Know More <ChevronRight/> </a>
    <i></i>
  </div>
 </div>
          </div>

          <div className='w-full min-h-[15rem] relative cursor-pointer'>

<img src={paylink} width='233' height='167' className='absolute w-12 h-12 rounded-full -top-3  -right-3  bg-lightBlue z-[8] transition-all duration-200 '/>
 
      <svg
            viewBox='0 0 349.32501220703125 225'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            className='stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200  opacity-[0.25] '
            
             >
      <path
            d='m 0 6 
        a 6 6 0 0 1 6 -6 
        h 250.32501220703125 
        a 16 16 0 0 1 11 5 
        l 77 77 
        a 16 16 0 0 1 5 11 
        v 126 
        a 6 6 0 0 1 -6 6 
        h -337.32501220703125 
        a 6 6 0 0 1 -6 -6 
        z'
            fill='#fff'
      ></path>
        </svg>
 
 <div className='z-[100] absolute w-full h-full flex flex-col jus pl-5 py-6 pr-8'>
  <div>
    <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.3rem]'>Payment Links</h3>
    <p className=' font-mullish text-gray-500'>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
  </div>
  <div>
    <a href='#' className='flex font-mullish font-bold text-lightBlue500  group-hover:text-gray-500 transition-all duration-200'>Know More <ChevronRight/> </a>
    <i></i>
  </div>
 </div>
          </div>

          <div className='w-full min-h-[15rem] relative cursor-pointer'>

<img src={paylink} width='233' height='167' className='absolute w-12 h-12 rounded-full -top-3  -right-3  bg-lightBlue z-[8] transition-all duration-200 '/>
 
      <svg
            viewBox='0 0 349.32501220703125 225'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            className='stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200  opacity-[0.25] '
            
             >
      <path
            d='m 0 6 
        a 6 6 0 0 1 6 -6 
        h 250.32501220703125 
        a 16 16 0 0 1 11 5 
        l 77 77 
        a 16 16 0 0 1 5 11 
        v 126 
        a 6 6 0 0 1 -6 6 
        h -337.32501220703125 
        a 6 6 0 0 1 -6 -6 
        z'
            fill='#fff'
      ></path>
        </svg>
 
 <div className='z-[100] absolute w-full h-full flex flex-col jus pl-5 py-6 pr-8'>
  <div>
    <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.3rem]'>Payment Links</h3>
    <p className=' font-mullish text-gray-500'>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
  </div>
  <div>
    <a href='#' className='flex font-mullish font-bold text-lightBlue500  group-hover:text-gray-500 transition-all duration-200'>Know More <ChevronRight/> </a>
    <i></i>
  </div>
 </div>
          </div>

      </div>







      </div>


    


      </section>
          
      
          
      <section  className=' bg-[url(./Images/feature-section-2BG.svg)]  bg-no-repeat bg-cover overflow-x-hidden pb-[350px] mt-14 pt-[10rem]'>
        {/* This is a single-line comment in JSX */}
          {/* top level container */}
         <div className='w-11/12 max-w-[1080px]  mx-auto relative  pt-4   '>
          
          <h2 className='font-mullish text-center text-2xl leading-[1.2] text-white font-bold'
          >Explore Razorpay Business Banking</h2>
          <div className='w-6 h-1 bg-greenLight mx-auto mt-4 mb-6'></div>

          {/* main feature */}
          <div className='w-full min-h[440px] flex flex-col relative'>

          <img src={flame} alt=''
              loading='lazy'
              className='absolute -top-[142px] -left-[140px] w-[200px]'/>
              
          <img src= {flame2} alt=''
              loading='lazy'
              className='absolute top-[150px] -right-[180px] w-[200px]'/>
            
             {/* content */}
             <div className='w-full min-h-[520]  border-2  border-slate-700  border-white-100 bg-deepBlue flex rounded-md relative p-10 py-12 '>
          <div className='flex flex-col justify-between  w-full'>
            <h3 className='   font-mullish text-[28px] leading-10 text-white font-bold max-w-[500px]'>Manage your company’s finances and supercharge your business banking with
            <img src={rozarpay}
            loading='lazy'
            width="190px"
            height="48px"
            className='inline px-5 ' />
            
            </h3>
           
            <ul className='space-y-2 mt-10 text-white'>
              <li className=' font-mullish flex items-center space-x-2'>< Check className='text-greenLight'/><span>Open a fully digital current account</span></li>
              <li className=' font-mullish flex items-center space-x-2'>< Check className='text-greenLight'/><span>Automate payables & compliment payments</span></li>
              <li  className=' font-mullish flex items-center space-x-2'>< Check className='text-greenLight'/><span>Simplify and track spends with Corporate cards</span></li>
              <li  className=' font-mullish flex items-center space-x-2'>< Check className='text-greenLight'/><span>View financial insights at a glance</span></li>
              
            </ul>

          <div className=' mt-10 flex flex-row items-center space-x-4 '>
            <button  className='relative bg-lightBlue flex items-center 
                          justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md
                           font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200'>
                              Sign Up Now
                              <div className='w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] 
                              flex justify-center items-center'>
                                  
                                  <svg
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  class="w-[20px] h-[20px] -skew-x-[20deg] "
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                                  ></path>
                                </svg>
                              </div></button>
            <div className='flex items-center cursor-pointer group '>
              <a href='#' className='flex font-mullish font-bold text-lightBlue500  group-hover:text-gray-500 transition-all duration-200'>Know more <ChevronRight/></a>
              <i></i>
            </div>
          </div>

         </div>
          <img src={business}  className=' absolute max-w-[600px] right-0 bottom-0'/>

             </div>

            {/* card box*/ }

              <div className='w-full mt-10  grid grid-cols-3 gap-4 '>
          
         
<div
className='w-full min-h-[15rem] relative cursor-pointer featureCard2'
>

<img
  src={current}
  className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200'
/>

<svg
  viewBox="0 0 349.32501220703125 225"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
  className='stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
  style="stroke-opacity: 0.8'
>
  <path
    d="m 0 6 
  a 6 6 0 0 1 6 -6 
  h 250.32501220703125 
  a 16 16 0 0 1 11 5 
  l 77 77 
  a 16 16 0 0 1 5 11 
  v 126 
  a 6 6 0 0 1 -6 6 
  h -337.32501220703125 
  a 6 6 0 0 1 -6 -6 
  z"
    fill="#181C2E"
  ></path>
</svg>

<div
  className='z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox'
>
  <div>
    <h3
      className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]"
    >
      Current Account
    </h3>
    <p className='font-mullish text-grayText mt-6'>
      Current accounts for fast-growing businesses, supported by the
      best-in-className technology
    </p>
  </div>
  <div className='flex items-center cursor-pointer place-items-end'>
    <a
      href="#"
      className='font-mullish font-bold text-lightBlue500 transition-all duration-200'
      >Know More</a
    >
    <i
      data-feather="chevron-right"
      className='w-5 h-5 text-lightBlue500 transition-all duration-200'
    ></i>
  </div>
</div>
</div>


<div
className='w-full min-h-[15rem] relative cursor-pointer featureCard2'
>

<img
  src={current}
  className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200'
/>

<svg
  viewBox="0 0 349.32501220703125 225"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
  className='stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
  style="stroke-opacity: 0.8'
>
  <path
    d="m 0 6 
  a 6 6 0 0 1 6 -6 
  h 250.32501220703125 
  a 16 16 0 0 1 11 5 
  l 77 77 
  a 16 16 0 0 1 5 11 
  v 126 
  a 6 6 0 0 1 -6 6 
  h -337.32501220703125 
  a 6 6 0 0 1 -6 -6 
  z"
    fill="#181C2E"
  ></path>
</svg>

<div
  className='z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox'
>
  <div>
    <h3
      className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]"
    >
      Current Account
    </h3>
    <p className='font-mullish text-grayText mt-6'>
      Current accounts for fast-growing businesses, supported by the
      best-in-className technology
    </p>
  </div>
  <div className='flex items-center cursor-pointer place-items-end'>
    <a
      href="#"
      className='font-mullish font-bold text-lightBlue500 transition-all duration-200'
      >Know More</a
    >
    <i
      data-feather="chevron-right"
      className='w-5 h-5 text-lightBlue500 transition-all duration-200'
    ></i>
  </div>
</div>
</div>


<div
className='w-full min-h-[15rem] relative cursor-pointer featureCard2'
>

<img
  src={current}
  className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200'
/>

<svg
  viewBox="0 0 349.32501220703125 225"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
  className='stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
  style="stroke-opacity: 0.8'
>
  <path
    d="m 0 6 
  a 6 6 0 0 1 6 -6 
  h 250.32501220703125 
  a 16 16 0 0 1 11 5 
  l 77 77 
  a 16 16 0 0 1 5 11 
  v 126 
  a 6 6 0 0 1 -6 6 
  h -337.32501220703125 
  a 6 6 0 0 1 -6 -6 
  z"
    fill="#181C2E"
  ></path>
</svg>

<div
  className='z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox'
>
  <div>
    <h3
      className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]"
    >
      Current Account
    </h3>
    <p className='font-mullish text-grayText mt-6'>
      Current accounts for fast-growing businesses, supported by the
      best-in-className technology
    </p>
  </div>
  <div className='flex items-center cursor-pointer place-items-end'>
    <a
      href="#"
      className='font-mullish font-bold text-lightBlue500 transition-all duration-200'
      >Know More</a
    >
    <i
      data-feather="chevron-right"
      className='w-5 h-5 text-lightBlue500 transition-all duration-200'
    ></i>
  </div>
</div>
</div>

      </div>


          {/* demo box */}
          <div className='flex flex-row w-full items-center justify-between border-2 border-slate-700 mb-24  gap-y-6 relative rounded-md p-8 mt-14 text-white font-mullish leading-[1.2]  text-xl space-x-2'>
            <p className='text-white font-mullish leading-[1.2]   space-x-2'>
            Check out the live demo to learn how RazorpayX works 
              <span className='font-mullish font-bold '>
                . No sign-up required!
              </span>
            </p>
            <button                           className='relative bg-lightBlue flex items-center 
                          justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md
                           font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200'>
                              Check out the demo
                              <div className='w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] 
                              flex justify-center items-center'>
                                  
                                  <svg
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  class="w-[20px] h-[20px] -skew-x-[20deg] "
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                                  ></path>
                                </svg>
                              </div>
            </button>
          </div>

          </div>
         </div>


         


      </section>

       

      

            
  <section className='bg-white relative'>
  <div className='relative w-11/12 max-w-[1080px] mx-auto pt-4'>
      <img src={dot} alt=""
      className='absolute w-[233px] left-[300px] -top-[6rem] z-10'/>
      <img src={dot} alt=""
      className='absolute w-[233px] -right-[3.5rem] -top-[6rem] z-10' />

      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 relative z-[100]'>

          <div className='relative flex items-center z-0'>
              <h2
              className='text-deepBlueHead font-mullish font-extrabold text-4xl leading-[3.375rem]'
              >New in the
                  <span className='text-lightBlue500'>
                      Razorpay
                  </span> <br/>
                  Product Suite
              </h2>
          </div>
        
          <div
          className='p-10 bg-[url(/Images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer
          bg-no-repeat hover:scale-105 transition-all duration-200
          hover:bg-[url(/Images/instant-settlement-bghover.svg)]
          bg-white' >
           <img src={rozarpay} alt=""
              className=' w-24 h-10  bg-deepBlue rounded-md'/>
              <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Cards</h3>
              <p
              className='font-mullish py-3 text-grayText leading-normal'
              >Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month.</p>
              <div className='flex flex-row items-center cursor-pointer group'>
                  <a href=""
                  className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                  transition-all duration-200'>Know More</a>
                  <ChevronRight
                      
                      className='w-5 h-5 text-lightBlue500 
                      group-hover:text-grayBlue transition-all duration-200'/>
                  </div>
              
          </div>
        
          <div
          className='p-10 bg-[url(/Images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer
          bg-no-repeat hover:scale-105 transition-all duration-200
          hover:bg-[url(/Images/instant-settlement-bghover.svg)] bg-white' >
           <img src={rozarpay} alt=""
              className=' w-24 h-10  bg-deepBlue rounded-md'/>
              <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Cards</h3>
              <p
              className='font-mullish py-3 text-grayText leading-normal'
              >Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month.</p>
              <div className='flex flex-row items-center cursor-pointer group'>
                  <a href=""
                  className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                  transition-all duration-200'>Know More</a>
                 <ChevronRight
                      
                      className='w-5 h-5 text-lightBlue500 
                      group-hover:text-grayBlue transition-all duration-200'/>
                  </div>
              
          </div>
         
          <div
          className='p-10 bg-[url(/Images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer
          bg-no-repeat hover:scale-105 transition-all duration-200
          hover:bg-[url(/Images/instant-settlement-bghover.svg)] bg-white' >
             <img src={rozarpay} alt=""
              className=' w-24 h-10  bg-deepBlue rounded-md'/>
              <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Cards</h3>
              <p
              className='font-mullish py-3 text-grayText leading-normal'
              >Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month.</p>
              <div className='flex flex-row items-center cursor-pointer group'>
                  <a href=""
                  className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                  transition-all duration-200'>Know More</a>
                  <ChevronRight
                      
                      className='w-5 h-5 text-lightBlue500 
                      group-hover:text-grayBlue transition-all duration-200'/>
                  </div>
              
          </div>
         
          <div
          className='p-10 bg-[url(/Images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer
          bg-no-repeat hover:scale-105 transition-all duration-200
          hover:bg-[url(/Images/instant-settlement-bghover.svg)] bg-white' >
            <img src={rozarpay} alt=""
              className=' w-24 h-10  bg-deepBlue rounded-md'/>
              <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Cards</h3>
              <p
              className='font-mullish py-3 text-grayText leading-normal'
              >Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month.</p>
              <div className='flex flex-row items-center cursor-pointer group'>
                  <a href=""
                  className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                  transition-all duration-200'>Know More</a>
                  <ChevronRight
                      
                      className='w-5 h-5 text-lightBlue500 
                      group-hover:text-grayBlue transition-all duration-200'/>
                  </div>
              
          </div>
         
          <div
          className='p-10 bg-[url(/Images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer
          bg-no-repeat hover:scale-105 transition-all duration-200
          hover:bg-[url(/Images/instant-settlement-bghover.svg)] bg-white' >
             <img src={rozarpay} alt=""
              className=' w-24 h-10  bg-deepBlue rounded-md'/>
              <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Cards</h3>
              <p
              className='font-mullish py-3 text-grayText leading-normal'
              >Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month.</p>
              <div className='flex flex-row items-center cursor-pointer group'>
                  <a href=""
                  className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                  transition-all duration-200'>Know More</a>
                  <ChevronRight
                      
                      className='w-5 h-5 text-lightBlue500 
                      group-hover:text-grayBlue transition-all duration-200'/>
                  </div>
              
          </div>
      </div>
  </div>
</section>
  

    </>
  )
}

export default App;
