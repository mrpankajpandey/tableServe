import React from 'react'
import { NavLink } from 'react-router-dom'

const UserNavbar = () => {
    return (
        <header className="bg-[#00000098] shadow-2xl sticky z-10 top-0 scr">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-amber-700" href="#">
                            <span className="sr-only">Home</span>
                            <img src="/images/icont.png" alt="" className='w-30 h-20' />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <NavLink to="/user" className="text-white transition hover:text-gray-500/75" href="#"> Home </NavLink>
                                </li>
                                
                                <li>
                                    <NavLink to="/contact" className="text-white transition hover:text-gray-500/75" href="#"> Contact </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <div className="flex items-center text-amber-600 transition">Alina Gomaze</div><img src="./images/profile.jfif" alt=""  className='w-10 h-10 rounded-4xl'/>                            
                        </div>

                        <div className="block md:hidden">
                            <button
                                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default UserNavbar