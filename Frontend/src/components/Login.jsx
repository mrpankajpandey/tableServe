import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className="bg-gray-100 flex justify-center items-center h-screen mt-[-64px]">
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="/images/login.jfif" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full h-full lg:w-1/2 bg-[#fee685]">
                    <h1 className="text-2xl font-semibold mb-4 text-amber-600">Login</h1>
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label className="relative">
                                <input
                                    type="text"
                                    placeholder=""
                                    required
                                    className="peer mt-0.5 w-full p-2 rounded-sm outline-none border-amber-600 border-2 shadow-sm sm:text-sm"
                                />

                                <span
                                    className="absolute items-center flex h-[50%] mt-2 inset-y-0 start-3 -translate-y-5 bg-[#fee685] px-0.5 text-sm font-[50px] text-amber-600 font-bold transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                                >
                                    Username
                                </span>
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="relative">
                                <input
                                    required
                                    type="password"
                                    placeholder=""
                                    className="peer mt-0.5 w-full p-2 rounded-sm outline-none border-amber-600 border-2 shadow-sm sm:text-sm"
                                />

                                <span
                                    className="absolute items-center flex h-[50%] mt-2 inset-y-0 start-3 -translate-y-5 bg-[#fee685] px-0.5 text-sm font-[50px] text-amber-600 font-bold transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                                >
                                    Password
                                </span>
                            </label>
                        </div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-amber-60" />
                            <label for="remember" className="text-amber-600 ml-2">Remember Me</label>
                        </div>
                        <div className="mb-6 text-blue-500">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>
                        <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                    </form>
                    <div className="mt-6 text-amber-600 text-center">
                        <NavLink to="/register" className="hover:underline">Sign up Here</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login