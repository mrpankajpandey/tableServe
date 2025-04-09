import React from 'react'
import { NavLink } from 'react-router-dom'
const Register = () => {
    return (
        <>
            <div className="bg-gray-100 flex justify-center items-center h-screen mt-[-64px]">
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="/images/register.jfif" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                <div className="lg:p-36 md:p-52 sm:20 p-8 h-full w-full lg:w-1/2 bg-[#fee685]">
                    <h1 className="text-2xl font-semibold mb-4 text-amber-600">Register</h1>
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label className="relative">
                                <input
                                    type="text"
                                    placeholder=""
                                    className="peer mt-0.5 w-full p-2 rounded-sm outline-none border-amber-600 border-2 shadow-sm sm:text-sm"
                                    required
                                />

                                <span
                                    className="absolute items-center flex h-[50%] mt-2 inset-y-0 start-3 -translate-y-5 bg-[#fee685] px-0.5 text-sm font-[50px] text-amber-600 font-bold transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                                >
                                    Name
                                </span>
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="relative">
                                <input
                                    type="Email"
                                    placeholder=""
                                    className="peer mt-0.5 w-full p-2 rounded-sm outline-none border-amber-600 border-2 shadow-sm sm:text-sm"
                                    required
                                />

                                <span
                                    className="absolute items-center flex h-[50%] mt-2 inset-y-0 start-3 -translate-y-5 bg-[#fee685] px-0.5 text-sm font-[50px] text-amber-600 font-bold transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                                >
                                    Email
                                </span>
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="relative">
                                <input
                                    type="text"
                                    placeholder=""
                                    className="peer mt-0.5 w-full p-2 rounded-sm outline-none border-amber-600 border-2 shadow-sm sm:text-sm"
                                    required
                                    oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                                    maxlength="10" minlength="10" pattern="\d{10}"
                                    title="Please enter exactly 10 digits."
                                />

                                <span
                                    className="absolute items-center flex h-[50%] mt-2 inset-y-0 start-3 -translate-y-5 bg-[#fee685] px-0.5 text-sm font-[50px] text-amber-600 font-bold transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                                >
                                    Contact No
                                </span>
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="relative">
                                <input
                                    type="text"
                                    placeholder=""
                                    className="peer mt-0.5 w-full p-2 rounded-sm outline-none border-amber-600 border-2 shadow-sm sm:text-sm"
                                    required
                                />

                                <span
                                    className="absolute items-center flex h-[50%] mt-2 inset-y-0 start-3 -translate-y-5 bg-[#fee685] px-0.5 text-sm font-[50px] text-amber-600 font-bold transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"

                                >
                                    Address
                                </span>
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="relative">
                                
                                <input
                                    type="password"
                                    placeholder=''
                                    minlength="8" 
                                    className="peer mt-0.5 w-full p-2 rounded-sm outline-none border-amber-600 border-2 shadow-sm sm:text-sm"
                                    pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$" 
                                    required
                                    title="Password must be at least 8 characters long, contain at least one uppercase letter, and one number."

                                />

                                <span
                                    className="absolute items-center flex h-[50%] mt-2 inset-y-0 start-3 -translate-y-5 bg-[#fee685] px-0.5 text-sm font-[50px] text-amber-600 font-bold transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                                >
                                    Password
                                </span>
                            </label>
                        </div>
                        <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md py-2 px-4 w-full">Register</button>
                    </form>
                    <div className="mt-6 text-amber-600 text-center">
                        <NavLink to="/login" className="hover:underline">already register? login</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register