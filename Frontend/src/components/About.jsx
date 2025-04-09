import React from 'react'
import { FaDiamond } from "react-icons/fa6";
const About = () => {
    return (
        <>
        <div className='h-[100vh]' id="about">
            <div className="flex justify-center items-center">
                <div className="text-black rochester-regular text-2xl mt-10 flex items-center">
                    <FaDiamond className='text-[10px]' />&nbsp; Who We Are &nbsp;<FaDiamond className='text-[10px]' />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="text-amber-600 font-serif text-5xl mt-2">ABOUT US</div>
            </div>
            <div className="h-auto w-[100%] flex mt-10">
                <div className="w-[50%] h-[100%]">
                    <div className='h-auto w-[100%] flex items-center justify-center'>
                        <img src="/images/about2.jpg" className='w-[350px]' />
                    </div>
                    <div className="text-amber-600 font-serif text-3xl mt-2 text-center uppercase">Our Company</div>
                    <div className="flex justify-center items-center w-[100%] ">
                        <div className="text-center w-[80%] rochester-regular">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur odit adipisci
                            amet suscipit placeat laudantium quaerat,
                            voluptatum sint accusamus cumque omnis a! Quas, hic sit cupiditate necessitatibus officiis aperiam?
                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-[100%]">
                <div className="text-amber-600 font-serif text-3xl text-center uppercase">Our Employee</div>
                    <div className="flex justify-center items-center w-[100%] ">
                        <div className="text-center w-[80%] rochester-regular">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur odit adipisci
                            amet suscipit placeat laudantium quaerat,
                            voluptatum sint accusamus cumque omnis a! Quas, hic sit cupiditate necessitatibus officiis aperiam?
                        </div>
                    </div>
                    <div className='h-auto w-[100%] flex items-center mt-2 justify-center'>
                        <img src="/images/about.jpg" className='w-[350px]' />
                    </div>
                    
                </div>
            </div>
        </div>
        
        </>
    )
}

export default About