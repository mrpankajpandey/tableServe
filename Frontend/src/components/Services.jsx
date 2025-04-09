import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { BsClipboard2Data } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { FaDiamond } from "react-icons/fa6";

const Services = () => {
  return (
    <div className='h-[100vh] bg-amber-900'>
        <div className="h-[50%] w-[100%] flex items-center justify-center gap-15">
            <div className="h-[300px] w-[300px] flex flex-col justify-center items-center">
              <IoFastFoodOutline  className='text-white text-[100px]'/>
              <div className='text-amber-600 text-[25px] uppercase font-serif text-center mt-10'>
                Order Booking
              </div>
              <div className="text-white text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odio </div>
            </div>
            <div className="h-[300px] w-[300px] flex flex-col justify-center items-center">
              <BsClipboard2Data   className='text-white text-[100px]'/>
              <div className='text-amber-600 text-[25px] uppercase font-serif text-center mt-10'>
                Restaurant Analysis
              </div>
              <div className="text-white text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odio </div>
            </div>
            <div className="h-[300px] w-[300px] flex flex-col justify-center items-center ">
              <IoFastFoodOutline  className='text-white text-[100px]'/>
              <div className='text-amber-600 text-[25px] uppercase font-serif text-center mt-10'>
                Order Booking
              </div>
              <div className="text-white text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odio </div>
            </div>
        </div>
        <div className="h-3 w-[100%] flex justify-center items-center">
          <div className="border-t-2 w-[90%] border-amber-700"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-amber-900 w-20 h-1 mt-[-10px] flex justify-center items-center text-white text-2xl">
          <IoDiamondOutline />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-white rochester-regular text-2xl mt-10 flex items-center">
          <FaDiamond className='text-[10px]'/>&nbsp; Why Choose Us &nbsp;<FaDiamond className='text-[10px]'/>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <div className="text-amber-600 font-serif text-5xl mt-2">WE PROVIDE YOU BEST SERVICES</div>
        </div>
        <div className="flex justify-center items-center">
            <div className="text-white font-serif text-1xl mt-2 w-[50%] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit esse veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam velit nisi vel asperiores dolorem, obcaecati, necessitatibus quos in cum tempore sed ad qui praesentium nulla est laudantium architecto provident fugit.
            </div>
        </div>
    </div>
  )
}

export default Services