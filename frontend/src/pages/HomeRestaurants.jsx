import React, { useState } from 'react'

const HomeRestaurants = () => {

    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <header>
                {
                    sidebar ? (<div className='h-[100vh] p-5 absolute md:z-[-1] w-64 bg-gray-300'>
                        <p className='text-2xl font-semibold mb-10 cursor-pointer' onClick={()=>{setSidebar(!sidebar)}}>X</p>
                        <div className='flex flex-col w-[200px] gap-4'>
                            <p className='text-lg hover:bg-gray-50 p-2 rounded'>Log in</p>
                            <p className='text-lg hover:bg-gray-50 p-2 rounded'>Sign up</p>
                        </div>
                    </div>) : (null)
                }
                <div className='max-w-screen-lg gap-4 mx-auto justify-between items-center flex '>
                    <div className='flex flex-1 gap-4 justify-between items-center p-5 md:py-0'>
                        <div className='block md:hidden cursor-pointer' onClick={()=>{setSidebar(!sidebar)}}>
                            <div className='flex flex-col gap-1'>
                                <p className='w-7 h-1 rounded bg-slate-800'>  </p>
                                <p className='w-7 h-1 rounded bg-slate-800'>  </p>
                                <p className='w-7 h-1 rounded bg-slate-800'>  </p>
                            </div>
                        </div>
                        <p className='text-4xl bold italic font-extrabold'>Zomato</p>
                        <input type='text' autoFocus={true} placeholder='Search for restaurant, cuisine or a dish' className='w-full hidden md:block shadow-lg py-3 px-4 text-xl my-4 font-normal placeholder-gray-500 border border-gray-200 focus:outline-none outline-none rounded-lg' />
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex w-[200px] justify-between items-center px-5 gap-2'>
                            <p className='text-lg text-gray-500 hover:text-gray-700'>Log in</p>
                            <p className='text-lg text-gray-500 hover:text-gray-700'>Sign up</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HomeRestaurants