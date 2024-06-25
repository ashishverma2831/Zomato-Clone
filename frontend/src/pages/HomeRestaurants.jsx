import React, { useState } from 'react'
import Footer from '../components/Footer';
import { popularCuisines, popularRestuarants, topRestuarants, cities } from '../data/data';
import RestaurantCard from '../components/RestaurantCard';
import FilterButton from '../components/FilterButton';
import AdvertisementCard from '../components/AdvertisementCard';
import DiningOut from '../components/DiningOut';
import Delivery from '../components/Delivery';
import Nightlife from '../components/Nightlife';

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

            <main className='bg-white'>
                <div className='max-w-screen-lg flex mx-auto px-5 '>
                    <div onClick={() => { handleTabs("dining") }} className={activeTab === "dining" ? 'p-4 text-xl text-red-500 font-semibold flex items-center gap-2 border-b-red-500 border-b-4' : 'p-4 text-xl cursor-pointer text-red-500 font-semibold flex items-center gap-2'}> <div className='p-4 rounded-full bg-[#E5F3F3]'><img className='h-8 w-8' src={activeTab === "dining" ? 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png' : 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png'} /></div>  Dining Out</div>
                    <div onClick={() => { handleTabs("delivery") }} className={activeTab === "delivery" ? 'p-4 text-xl text-red-500 font-semibold flex items-center gap-2 border-b-red-500 border-b-4' : 'p-4 text-xl cursor-pointer text-red-500 font-semibold flex items-center gap-2'}> <div className='p-4 rounded-full bg-[#E5F3F3]'><img className='h-8 w-8' src={activeTab === "delivery" ? 'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png' : 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png'} /></div>  Delivery</div>
                    <div onClick={() => { handleTabs("nightlife") }} className={activeTab === "nightlife" ? 'p-4 text-xl text-red-500 font-semibold flex items-center gap-2 border-b-red-500 border-b-4' : 'p-4 text-xl cursor-pointer text-red-500 font-semibold flex items-center gap-2'}> <div className='p-4 rounded-full bg-[#E5F3F3]'><img className='h-8 w-8' src={activeTab === "nightlife" ? 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png' : 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png'} /></div>  Nightlife</div>
                </div>
                    {
                        activeTab === "dining" ? <DiningOut /> : activeTab === "delivery" ? <Delivery /> : <Nightlife />  
                    }
            </main>

            <AdvertisementCard />
            {/* <FilterButton /> */}
            <RestaurantCard />

            <section className='py-10 text-center'>
                <p className='text-4xl mx-auto max-w-screen-xl px-12 text-left '>Explore options near me</p>
                <div className='max-w-screen-xl px-10 text-center mx-auto my-10'>

                    <div
                        id="accordion-flush"
                        data-accordion="collapse"
                        data-active-classes="bg-white text-gray-900"
                        data-inactive-classes="text-gray-500"
                        className='my-2'
                    >
                        <h2 id="accordion-flush-heading-1" className='mb-4 shadow-sm'>
                            <button
                                type="button"
                                className="flex px-7 border rounded-lg items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                                data-accordion-target="#accordion-flush-body-1"
                                aria-expanded="true"
                                aria-controls="accordion-flush-body-1"
                            >
                                <span> Popular cuisines near me</span>
                                <svg
                                    data-accordion-icon=""
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-flush-body-1"
                            className="hidden border rounded-lg -translate-y-4 shadow-sm"
                            aria-labelledby="accordion-flush-heading-1"
                        >
                            <div className="p-5 border-gray-200">
                                <p className=" text-gray-500 text-left">
                                    {
                                        popularCuisines.map((cuisine, index) => {
                                            if (index !== popularCuisines.length - 1) {
                                                return (<span key={index}>
                                                    <span className='text-gray-500 hover:text-gray-700 cursor-pointer'> {cuisine} </span>
                                                    <span className='text-gray-500 mx-1 text-xl'> . </span>
                                                </span>
                                                )
                                            } else {
                                                return (<span key={index}>
                                                    <span className='text-gray-500 hover:text-gray-700 cursor-pointer'> {cuisine} </span>
                                                </span>
                                                )
                                            }
                                        })
                                    }
                                </p>
                            </div>
                        </div>

                        <h2 id="accordion-flush-heading-2" className='mb-4 shadow-sm'>
                            <button
                                type="button"
                                className="flex px-7 border rounded-lg items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                                data-accordion-target="#accordion-flush-body-2"
                                aria-expanded="true"
                                aria-controls="accordion-flush-body-2"
                            >
                                <span> Popular restaurant types near me </span>
                                <svg
                                    data-accordion-icon=""
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-flush-body-2"
                            className="hidden border rounded-lg -translate-y-4 shadow-sm"
                            aria-labelledby="accordion-flush-heading-2"
                        >
                            <div className="p-5 border-gray-200">
                                <p className=" text-gray-500 text-left">
                                    {
                                        popularRestuarants.map((restaurant, index) => {
                                            if (index !== popularRestuarants.length - 1) {
                                                return (<span key={index}>
                                                    <span className='text-gray-500 hover:text-gray-700 cursor-pointer'> {restaurant} </span>
                                                    <span className='text-gray-500 mx-1 text-xl'> . </span>
                                                </span>
                                                )
                                            } else {
                                                return (<span key={index}>
                                                    <span className='text-gray-500 hover:text-gray-700 cursor-pointer'> {restaurant} </span>
                                                </span>
                                                )
                                            }
                                        })
                                    }
                                </p>
                            </div>
                        </div>

                        <h2 id="accordion-flush-heading-3" className='mb-4 shadow-sm'>
                            <button
                                type="button"
                                className="flex px-7 border rounded-lg items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                                data-accordion-target="#accordion-flush-body-3"
                                aria-expanded="true"
                                aria-controls="accordion-flush-body-3"
                            >
                                <span> Top Restaurant Chains</span>
                                <svg
                                    data-accordion-icon=""
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-flush-body-3"
                            className="hidden border rounded-lg -translate-y-4 shadow-sm"
                            aria-labelledby="accordion-flush-heading-3"
                        >
                            <div className="p-5 border-gray-200">
                                <p className=" text-gray-500 text-left flex justify-evenly gap-4 flex-wrap">
                                    {
                                        topRestuarants.map((restaurant, index) => {
                                            return (
                                                <span key={index} className='min-w-[100px] md:min-w-[200px] text-gray-500 hover:text-gray-700 cursor-pointer'> {restaurant} </span>
                                            )
                                        })
                                    }
                                </p>
                            </div>
                        </div>

                        <h2 id="accordion-flush-heading-4" className='mb-4 shadow-sm'>
                            <button
                                type="button"
                                className="flex px-7 border rounded-lg items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                                data-accordion-target="#accordion-flush-body-4"
                                aria-expanded="true"
                                aria-controls="accordion-flush-body-4"
                            >
                                <span> Cities We Deliver To </span>
                                <svg
                                    data-accordion-icon=""
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-flush-body-4"
                            className="hidden border rounded-lg -translate-y-4 shadow-sm"
                            aria-labelledby="accordion-flush-heading-4"
                        >
                            <div className="p-5 border-gray-200 ">
                                <p className=" text-gray-500 text-left flex justify-center gap-4 flex-wrap">
                                    {
                                        cities.map((city, index) => {
                                            return (
                                                <span key={index} className='min-w-[100px] md:min-w-[200px] text-gray-500 hover:text-gray-700 cursor-pointer'> {city} </span>
                                            )
                                        })
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default HomeRestaurants