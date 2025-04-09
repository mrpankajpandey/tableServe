import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='h-[100vh] hero-image mt-[-64px]'>
        <div className="bg-[#00000098] w-[100%] h-[100%] justify-center flex flex-col items-center ">
            <div className="text-white text-[30px] rochester-regular">Welcome to Our Table Serve</div>
            <div className="text-white font-serif w-[60%] leading-none text-center text-[50px]">Deal Your's Customers Easily</div>
            <div><button className='rounded-md bg-gray-100 px-10 py-2 text-[40px] font-medium text-amber-700 cursor-pointer mt-10 hover:bg-amber-700 hover:text-white'>Get started</button></div>
        </div>
    </div>                 
  )
}

export default Home