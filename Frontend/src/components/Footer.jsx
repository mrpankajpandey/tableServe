import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#7b3306]">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-left">
                            <img src="/images/icont.png" className='w-30' /> <div className='flex justify-center items-center font-serif text-4xl text-white'>Table Serve</div>
                        </div>

                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                            cum itaque neque.
                        </p>
                    </div>

                    <ul
                        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                    >
                        <li>
                            <a className="text-white transition hover:text-[#e0c07a]" href="#"> About </a>
                        </li>

                        <li>
                            <a className="text-white transition hover:text-[#e0c07a]" href="#"> Services </a>
                        </li>

                        <li>
                            <a className="text-white transition hover:text-[#e0c07a]" href="#"> Projects </a>
                        </li>

                        <li>
                            <a className="text-white transition hover:text-[#e0c07a]" href="#"> Blog </a>
                        </li>
                    </ul>
                </div>

                <p className="mt-12 text-center text-sm text-white lg:text-right">
                    Copyright &copy; 2022. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer