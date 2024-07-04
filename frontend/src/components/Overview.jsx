import React from 'react'
import { Link } from 'react-router-dom'

const Overview = () => {

    const cuisines = ["North Indian", "Chinese", "Fast Food", "Beverages","Asian","Mughlai"];
    const moreInfo = [
        'Breakfast','Takeway Available','Happy Hours','Buffet','4/5 Star','Family Friendly','Serves Alcohol',
        'Live Sports Screening','Outdoor Seating','Live Music','Nightlife','Wifi','Valet Parking','Smoking Area',
    ]
    return (
        <>
            <div className='flex justify-between gap-4'>
                <div className='flex-1 flex flex-col gap-8'>
                    <div>
                        <p className='text-2xl font-normal'>About this place</p>
                        <div className='flex gap-4 my-4'>
                            <div style={{boxShadow:'0 2px 4px 0 rgba(0, 0, 0, .13), 0 1px 1px 0 rgba(0, 0, 0, .11)'}} className='bg-white rounded-xl cursor-pointer  flex p-2 justify-between items-center gap-2'>
                                <img className='w-12' src='https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png' />
                                <div className='flex flex-col'>
                                    <p className='uppercase text-[11px] text-gray-500'>Restaurant safety measure</p>
                                    <p className='text-[16px] capitalize'>well sanitized kitchen</p>
                                </div>
                            </div>
                            <div style={{boxShadow:'0 2px 4px 0 rgba(0, 0, 0, .13), 0 1px 1px 0 rgba(0, 0, 0, .11)'}} className='bg-white cursor-pointer rounded-xl flex p-2 justify-between items-center gap-2'>
                                <img className='w-12' src='https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png' />
                                <div className='flex flex-col'>
                                    <p className='uppercase text-[11px] text-gray-500'>Restaurant safety measure</p>
                                    <p className='text-[16px] capitalize'>well sanitized kitchen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <p className="text-2xl  text-gray-700">Menu</p>
                            <p className='flex justify-between '><Link className='text-red-500 text-[16px]'>See all menus <i className="text-[14px] mx-2 fa-solid fa-play"></i></Link></p>
                        </div>
                        <div className='overflow-hidden w-fit my-2'>
                            <img className='rounded-xl shadow-lg hover:scale-110 transition-all duration-1000' src='https://b.zmtcdn.com/data/menus/733/18614733/2f28e9a9f3ac0390859dfa253e912235.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A' />
                        </div>
                        <div className='my-2'>
                            <p>Menu</p>
                            <p className='text-gray-500 text-[12px]'>6 pages</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-2xl text-gray-700'>Cuisines</p>
                        <div className='flex gap-2'>
                        {cuisines.map((cuisine)=>{
                            return (
                                <p className='px-4 py-1.5 rounded-full cursor-pointer text-teal-500 shadow border'>{cuisine}</p>
                            )
                        })}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-2xl  text-gray-700'>Popular Dishes</p>
                        <p className='text-gray-500 text-lg font-light'>Dessert Platter, Hot N Sour Soup, Grilled Chicken Steak, Buffet, Desserts, Sweets</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-2xl  text-gray-700'>People Say This Place Is Known For</p>
                        <p className='text-gray-500 text-lg font-light'>Excellent Variety, Extensive Bar Menu, Ample Seating Area, Relaxed Atmosphere, Variety of Veg Options, Good for Large Groups</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-2xl text-gray-700'>Average Cost</p>
                        <p className='text-gray-900 text-lg font-light'>₹2,000 for two people (approx.) Without alcohol</p>
                        <p className='text-sm text-gray-500 font-light'>Exclusive of applicable taxes and charges, if any</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='text-2xl text-gray-700'>More Info</p>
                        <div className="grid grid-cols-2">
                            {moreInfo.map((info)=>{
                                return (
                                    <p className='text-gray-600 text-md my-1 items-center flex gap-2 font-light'><span className=' rounded-full border-2 border-teal-700 w-5 h-5 grid place-content-center'><i className="fa-solid text-[12px] fa-check text-teal-700"></i></span> {info}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='w-[340px]'>
                    <img src='https://b.zmtcdn.com/data/o2_assets/28c43f9f8429ea034ffad3782e6b846f1716307842.png' />
                    <div className='p-3 mt-4 flex flex-col gap-1 bg-white rounded-xl shadow-2xl'>
                        <p className='text-xl'>Call</p>
                        <p className='text-red-500'>+91 7991578618</p>
                        <p className='text-xl mt-2'>Direction</p>
                        <img src='https://maps.zomato.com/php/staticmap?center=26.8636628703,81.0083864629&maptype=zomato&markers=26.8636628703,81.0083864629,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250' />
                        <p>TCG 7/7, Hilton Garden Inn, Vibhuti Khand, Gomti Nagar, Lucknow</p>
                        <div className='flex justify-start gap-4 py-2'>
                            <Link className='text-gray-400 hover:bg-gray-50 font-normal border-[1.4px] border-gray-500 hover:shadow px-2 py-1 rounded-lg'><i className="text-red-500 mr-2 fa-regular fa-copy"></i> Copy</Link>
                            <Link className='text-gray-400 hover:bg-gray-50 font-normal border-[1.4px] border-gray-500 hover:shadow px-2 py-1 rounded-lg'><i className="text-red-500 mr-2 fa-solid fa-diamond-turn-right"></i>Direction</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview