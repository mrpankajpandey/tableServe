import React from 'react'
import { FaDiamond } from "react-icons/fa6";
const Contact = () => {
    return (
        <div className="h-[100vh] bg-[#fee685]">
            <div className="flex justify-center items-center">
                <div className="text-black rochester-regular text-2xl mt-10 flex items-center">
                    <FaDiamond className='text-[10px]' />&nbsp; Want To Share Your Experience With Us &nbsp;<FaDiamond className='text-[10px]' />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="text-amber-600 font-serif text-5xl mt-2">Contact US</div>
            </div>
            <div className="h-auto w-[100%] flex mt-20">
                <div className="w-[50%] h-[100%]">
                    <div className='h-auto w-[100%] flex items-center justify-center'>
                        <label className="relative">
                            <input
                                type="text"
                                placeholder=""
                                className="peer mt-0.5 w-[300px] p-2 rounded-sm outline-none border-amber-600 border-2 shadow-sm sm:text-sm"
                            />

                            <span
                                className="absolute items-center flex h-[50%] mt-3 inset-y-0 start-3 -translate-y-5 bg-[#fee685] px-0.5 text-sm font-[50px] text-amber-600 font-bold transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Name
                            </span>
                        </label>
                    </div>
                    <div className='h-auto w-[100%] flex items-center justify-center mt-6'>
                        <label className="relative">
                            <input
                                type="Email"
                                placeholder=""
                                className="peer mt-0.5 w-[300px] p-2 rounded-sm outline-none border-amber-600 border-2 shadow-sm sm:text-sm"
                            />

                            <span
                                className="absolute items-center flex h-[50%] mt-3 inset-y-0 start-3 -translate-y-5 bg-[#fee685] px-0.5 text-sm font-[50px] text-amber-600 font-bold transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Email
                            </span>
                        </label>
                    </div>
                    <div className='h-auto w-[100%] flex items-center justify-center mt-6'>
                        <label className="relative">
                            <textarea
                                type="text"
                                placeholder=""
                                className="peer mt-0.5 w-[300px] rounded-sm p-2 h-[100px] outline-none border-amber-600 border-2 shadow-sm sm:text-sm"
                            />

                            <span
                                className="absolute flex h-[50%] mt-3 inset-y-0 start-3 -translate-y-5 bg-[#fee685] px-0.5 text-sm font-[50px] text-amber-600 font-bold transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Message
                            </span>
                        </label>
                    </div>
                    <div className='h-auto w-[100%] flex items-center justify-center mt-6'>
                        <label className="relative">
                            <button
                                type="button"
                                className="peer mt-0.5 w-[300px] rounded-sm p-2 outline-none text-[#fee685] font-bold border-amber-600 bg-amber-600 border-2 shadow-sm sm:text-sm"
                            >Submit</button>
                        </label>
                    </div>
                </div>
                <div className="w-[50%] h-[100%]">
                    <div className='h-auto w-[100%] flex justify-center'>
                        <img src="/images/download.jfif" className='w-[300px] rounded-[40%]' />
                    </div>
                </div>
                <div className="h-[100%]">
                    <div className='h-auto w-[100%] flex justify-center'>
                        <div className='w-[300px] h-[300px] border-2 rounded-[40%] border-amber-600 ml-[-680px] rotate-45' ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact