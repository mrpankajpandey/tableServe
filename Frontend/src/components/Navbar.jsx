import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector("header");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
    return (
        <header className="bg-transparent sticky z-10 top-0 scr">
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
                                    <NavLink to="/" className="text-white transition hover:text-gray-500/75" href="#"> Home </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className="text-white transition hover:text-gray-500/75" href="#"> About </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/creers" className="text-white transition hover:text-gray-500/75" href="#"> Careers </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/services" className="text-white transition hover:text-gray-500/75" href="#"> Services </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="text-white transition hover:text-gray-500/75" href="#"> Contact </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <NavLink to="/login"
                                className="rounded-md  bg-amber-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                                href="#"
                            >
                                Login
                            </NavLink>

                            <div className="hidden sm:flex">
                                <NavLink to="/register"
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-amber-700"
                                    href="#"
                                >
                                    Register
                                </NavLink>
                            </div>
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

export default Navbar