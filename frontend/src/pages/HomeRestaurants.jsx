import React, { useState } from 'react'

const HomeRestaurants = () => {

    const [sidebar, setSidebar] = useState(false);

    const [activeTab, setActiveTab] = useState("dining");
    const handleTabs = (tab) => {
        setActiveTab(tab);
    }

    return (
        <>
            <header>
                {
                    sidebar ? (<div className='h-[100vh] p-5 absolute md:z-[-1] w-64 bg-gray-300'>
                        <p className='text-2xl font-semibold mb-10 cursor-pointer' onClick={() => { setSidebar(!sidebar) }}>X</p>
                        <div className='flex flex-col w-[200px] gap-4'>
                            <p className='text-lg hover:bg-gray-50 p-2 rounded'>Log in</p>
                            <p className='text-lg hover:bg-gray-50 p-2 rounded'>Sign up</p>
                        </div>
                    </div>) : (null)
                }
                <div className='max-w-screen-lg gap-4 mx-auto justify-between items-center flex '>
                    <div className='flex flex-1 gap-4 justify-between items-center p-5 md:py-0'>
                        <div className='block md:hidden cursor-pointer' onClick={() => { setSidebar(!sidebar) }}>
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

            <main className='bg-red-400'>
                <div className='max-w-screen-lg flex mx-auto px-5 '>
                    <div onClick={()=>{handleTabs("dining")}} className={activeTab === "dining" ?'p-4 text-xl text-red-500 font-semibold flex items-center gap-2 border-b-red-500 border-b-4' :'p-4 text-xl text-red-500 font-semibold flex items-center gap-2' }> <div className='p-4 rounded-full bg-[#E5F3F3]'><img className='h-8 w-8' src={activeTab==="dining"?'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png':'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png'} /></div>  Dining Out</div>
                    <div onClick={()=>{handleTabs("delivery")}} className={activeTab === "delivery" ?'p-4 text-xl text-red-500 font-semibold flex items-center gap-2 border-b-red-500 border-b-4' :'p-4 text-xl text-red-500 font-semibold flex items-center gap-2' }> <div className='p-4 rounded-full bg-[#E5F3F3]'><img className='h-8 w-8' src={activeTab==="delivery"?'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png':'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png'} /></div>  Delivery</div>
                    <div onClick={()=>{handleTabs("nightlife")}} className={activeTab === "nightlife" ?'p-4 text-xl text-red-500 font-semibold flex items-center gap-2 border-b-red-500 border-b-4' :'p-4 text-xl text-red-500 font-semibold flex items-center gap-2' }> <div className='p-4 rounded-full bg-[#E5F3F3]'><img className='h-8 w-8' src={activeTab==="nightlife"?'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png':'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png'} /></div>  Nightlife</div>
                </div>
                <div className='bg-blue-500'>
                    <p>{activeTab} </p>
                </div>
            </main>
        </>
    )
}

export default HomeRestaurants