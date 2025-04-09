import React from 'react'

const Product = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <div className="w-[95%] flex p-6 text-amber-600 text-3xl font-bold border-b-2">Itlian Veg Momos</div>
            </div>

            <div className="w-full flex h-screen justify-center items-center">
                <div className="w-[80%] h-auto block rounded-lg p-4 shadow-xs shadow-indigo-100 ">
                    <img
                        alt=""
                        src="./images/food.jfif"
                        className="h-100 w-full rounded-md object-cover"
                    />
                    
                </div>
            </div>
        </>
    )
}

export default Product