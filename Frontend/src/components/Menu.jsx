import React from 'react'
import Card from './Card'

const Menu = () => {
    return (
        <>
            <div className=''>
                <div className="w-full flex items-center justify-center">
                    <div className="w-[95%] flex p-6 text-amber-600 text-3xl font-bold border-b-2">Our Menu </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-[95%] grid gap-5 p-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] ">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu