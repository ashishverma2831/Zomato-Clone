import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantCard from './RestaurantCard';

const Overview = ({handleTabs,activeTab,setActiveTab}) => {

    const cuisines = ["North Indian", "Chinese", "Fast Food", "Beverages", "Asian", "Mughlai"];
    const moreInfo = [
        'Breakfast', 'Takeway Available', 'Happy Hours', 'Buffet', '4/5 Star', 'Family Friendly', 'Serves Alcohol',
        'Live Sports Screening', 'Outdoor Seating', 'Live Music', 'Nightlife', 'Wifi', 'Valet Parking', 'Smoking Area',
    ]
    const reviews = [
        'Dessert Platter', 'Hot N Sour Soup', 'Grilled Chicken Steak', 'Buffet', 'Desserts', 'Sweets', 'Excellent Variety', 'Extensive Bar Menu', 'Ample Seating Area', 'Relaxed Atmosphere', 'Variety of Veg Options', 'Good for Large Groups'
    ]
    

    return (
        <>
            <div className='flex justify-between gap-4'>
                <div className='flex-1 flex flex-col gap-8'>
                    <div>
                        <p className='text-2xl font-semibold'>About this place</p>
                        <div className='flex gap-4 my-4'>
                            <div style={{ boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .13), 0 1px 1px 0 rgba(0, 0, 0, .11)' }} className='bg-white rounded-xl cursor-pointer  flex p-2 justify-between items-center gap-2'>
                                <img className='w-12' src='https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png' />
                                <div className='flex flex-col'>
                                    <p className='uppercase text-[11px] text-gray-500'>Restaurant safety measure</p>
                                    <p className='text-[16px] capitalize'>well sanitized kitchen</p>
                                </div>
                            </div>
                            <div style={{ boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .13), 0 1px 1px 0 rgba(0, 0, 0, .11)' }} className='bg-white cursor-pointer rounded-xl flex p-2 justify-between items-center gap-2'>
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
                        <div className='flex gap-2 flex-wrap'>
                            {cuisines.map((cuisine,index) => {
                                return (
                                    <p key={index} className='px-4 py-1.5 rounded-full cursor-pointer text-teal-500 shadow border'>{cuisine}</p>
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
                        <div className="grid grid-cols-2 py-1">
                            {moreInfo.map((info,index) => {
                                return (
                                    <p key={index} className='text-gray-600 text-md my-1 items-center flex gap-2 font-light'><span className=' rounded-full border-2 border-teal-700 w-5 h-5 grid place-content-center'><i className="fa-solid text-[12px] fa-check text-teal-700"></i></span> {info}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <p style={{ wordSpacing: '4px', letterSpacing: '4px' }} className='uppercase text-lg word tracking-wider text-gray-500'>Our Sponsors</p>
                        <div className='flex flex-wrap mt-2'>
                            <Link className='w-[300px] cursor-pointer bg-transparent p-2 '>
                                <img className='w-full rounded-xl' src='https://b.zmtcdn.com/data/pictures/3/18972533/ecfa428872197028747732c7e0f4ebd0_featured_v2.jpg' alt='restaurant' />
                                <div className='flex flex-col py-2'>
                                    <p className=' truncate text-lg font-semibold'>Mahavir Bhojnalaya And Baati Chokha</p>
                                    <div className='flex items-center'>
                                        <div className='flex gap-2 border-r-2 border-gray-400 pr-4'>
                                            <p className='w-fit flex items-baseline bg-green-500 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3.6 <i className="fa-solid fa-star text-[8px]"></i></p>
                                            <p>Dining</p>
                                        </div>
                                        <div className='flex gap-2 pl-4'>
                                            <p className='w-fit flex items-baseline bg-green-400 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3.6 <i className="fa-solid fa-star text-[8px]"></i></p>
                                            <p>Dining</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 truncate'>North Indian, Chinese, Fast Food, Mughlai,Beverages </p>
                                </div>
                            </Link>
                            <Link className='w-[300px] cursor-pointer bg-transparent p-2 '>
                                <img className='w-full rounded-xl' src='https://b.zmtcdn.com/data/pictures/3/18972533/ecfa428872197028747732c7e0f4ebd0_featured_v2.jpg' alt='restaurant' />
                                <div className='flex flex-col py-2'>
                                    <p className=' truncate text-lg font-semibold'>Mahavir Bhojnalaya And Baati Chokha</p>
                                    <div className='flex items-center'>
                                        <div className='flex gap-2 border-r-2 border-gray-400 pr-4'>
                                            <p className='w-fit flex items-baseline bg-green-500 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3.6 <i className="fa-solid fa-star text-[8px]"></i></p>
                                            <p>Dining</p>
                                        </div>
                                        <div className='flex gap-2 pl-4'>
                                            <p className='w-fit flex items-baseline bg-green-400 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3.6 <i className="fa-solid fa-star text-[8px]"></i></p>
                                            <p>Dining</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 truncate'>North Indian, Chinese, Fast Food, Mughlai,Beverages </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl text-gray-900'>Similiar restaurants</p>
                        <div className='flex flex-wrap mt-2'>
                            <Link className='w-[300px] cursor-pointer bg-transparent p-2 '>
                                <img className='w-full rounded-xl' src='https://b.zmtcdn.com/data/pictures/3/18972533/ecfa428872197028747732c7e0f4ebd0_featured_v2.jpg' alt='restaurant' />
                                <div className='flex flex-col py-2'>
                                    <p className=' truncate text-lg font-semibold'>Mahavir Bhojnalaya And Baati Chokha</p>
                                    <div className='flex items-center'>
                                        <div className='flex gap-2 border-r-2 border-gray-400 pr-4'>
                                            <p className='w-fit flex items-baseline bg-green-500 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3.6 <i className="fa-solid fa-star text-[8px]"></i></p>
                                            <p>Dining</p>
                                        </div>
                                        <div className='flex gap-2 pl-4'>
                                            <p className='w-fit flex items-baseline bg-green-400 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3.6 <i className="fa-solid fa-star text-[8px]"></i></p>
                                            <p>Dining</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 truncate'>North Indian, Chinese, Fast Food, Mughlai,Beverages </p>
                                </div>
                            </Link>
                            <Link className='w-[300px] cursor-pointer bg-transparent p-2 '>
                                <img className='w-full rounded-xl' src='https://b.zmtcdn.com/data/pictures/3/18972533/ecfa428872197028747732c7e0f4ebd0_featured_v2.jpg' alt='restaurant' />
                                <div className='flex flex-col py-2'>
                                    <p className=' truncate text-lg font-semibold'>Mahavir Bhojnalaya And Baati Chokha</p>
                                    <div className='flex items-center'>
                                        <div className='flex gap-2 border-r-2 border-gray-400 pr-4'>
                                            <p className='w-fit flex items-baseline bg-green-500 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3.6 <i className="fa-solid fa-star text-[8px]"></i></p>
                                            <p>Dining</p>
                                        </div>
                                        <div className='flex gap-2 pl-4'>
                                            <p className='w-fit flex items-baseline bg-green-400 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3.6 <i className="fa-solid fa-star text-[8px]"></i></p>
                                            <p>Dining</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 truncate'>North Indian, Chinese, Fast Food, Mughlai,Beverages </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='border-b-2'>
                        <p className='text-xl text-gray-900'>Review Highlights</p>
                        <div className='flex gap-2 mb-8 my-4 flex-wrap'>
                            {reviews.map((review,index) => {
                                return (
                                    <p key={index} className='px-4 py-1.5 rounded-full cursor-pointer text-gray-700 shadow border'>{review}</p>
                                )
                            })}
                        </div>
                    </div>

                    {/* Reviews */}
                    <section>
                        <div className='pb-5 border-b-2 flex flex-col gap-4'>
                            <div className='flex justify-between'>
                                <div className='flex gap-3 items-center'>
                                    <img className='w-11 rounded-full' src='https://b.zmtcdn.com/data/user_profile_pictures/bd6/47ae0778e65f05ca1917988d961f1bd6.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A' />
                                    <div className='flex flex-col'>
                                        <p className='text-gray-950 font-semibold text-md'>Megha</p>
                                        <p className='text-sm text-gray-400'>0 reviews <span className='font-bold text-gray-400'>.</span> 725 Followers</p>
                                    </div>
                                </div>
                                <button className='border border-red-500 text-lg rounded px-4 py-1 font-light text-red-500'>Follow</button>
                            </div>
                            <div className='flex gap-4 font-light'>
                                <div className='flex gap-2 border-gray-400'>
                                    <p className='w-fit flex items-center bg-green-500 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3 <i className="fa-solid fa-star text-[8px]"></i></p>
                                    <p>Dining</p>
                                </div>
                                <p className='text-gray-400 '>May 18,2022</p>
                            </div>
                            <div>
                                <p className='uppercase font-semibold text-[14px] text-green-500'><i className="mr-1 fa-solid fa-thumbs-up"></i><span>positive</span></p>
                                <div className='flex my-2 gap-2 flex-wrap'>
                                    <p className='bg-gray-300/50 text-gray-600 w-fit px-4 py-2 rounded-full text-[13px]'>delicious food</p>
                                </div>
                                <p className='uppercase font-semibold text-[14px] text-red-500'><i className="mr-1 fa-solid fa-thumbs-up rotate-180"></i><span>negative</span></p>
                                <div className='flex my-2 gap-2 flex-wrap'>
                                    <p className='bg-gray-300/50 text-gray-600 w-fit px-4 py-2 rounded-full text-[13px]'>horrible experience</p>
                                    <p className='bg-gray-300/50 text-gray-600 w-fit px-4 py-2 rounded-full text-[13px]'>management</p>
                                </div>
                            </div>
                            <div>
                                <p className=' text-gray-600'>Recently Hilton Garden Inn Lucknow launched a food-fest to relive the raunak and zayka of Shaam-e-awadh where you can enjoy the same authentic flavor of the famous dishes of Lucknow.<br />
                                    There was a large variety of dishes for both vegetarian and non-vegetarian like mushroom karare, rajma ki galawati, makhmali paneer, murgh ke parchey, kakori kebab, galawati kebab, and many more.<br /> All these dishes were prepared by MasterChef Shahnawaz Qureshi, from the 4th generation of the renowned Qureshi family.
                                    The food-fest is open for dinner every Saturday from 7 pm to 11 pm</p>
                            </div>
                            <div>
                                <div className='flex flex-wrap justify-start gap-2'>
                                    <div className='rounded cursor-pointer overflow-hidden transition-all duration-1000'><div className='w-[200px] h-[200px] transition-all duration-1000 bg-center bg-cover hover:scale-110 bg-no-repeat rounded bg-[url(https://b.zmtcdn.com/data/reviews_photos/2ef/0e7e1a503ccc3c7357e1be6eaf2592ef_1605062839.jpg?output-format=webp)]' /></div>
                                    <div className='rounded cursor-pointer overflow-hidden transition-all duration-1000'><div className='w-[200px] h-[200px] transition-all duration-1000 bg-center bg-cover hover:scale-110 bg-no-repeat rounded bg-[url(https://b.zmtcdn.com/data/reviews_photos/2ef/0e7e1a503ccc3c7357e1be6eaf2592ef_1605062839.jpg?output-format=webp)]' /></div>
                                </div>
                            </div>
                            <div>
                                <p className='text-gray-400 font-light text-lg'>5 Votes for helpful, 1 Comment</p>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 w-1/3 justify-between text-gray-400 font-light'>
                                    <p><i className="mr-1 fa-regular fa-thumbs-up"></i><span>Helpful</span></p>
                                    <p><i className="mr-1 fa-regular fa-comment"></i><span>Comment</span></p>
                                    <p><i className="mr-1 fa-solid fa-share"></i><span>Share</span></p>
                                </div>
                            </div>
                        </div>
                        <p className='flex justify-between mt-4' onClick={()=>{setActiveTab('review')}}><Link className='text-red-500 text-[16px]'>View all reviews <i className="text-[14px] mx-2 fa-solid fa-play"></i></Link></p>
                    </section>

                    <div className='flex flex-col gap-1 border-b-2 pb-4'>
                        <p className='uppercase' style={{ letterSpacing: '4px', wordSpacing: '4px' }}>Help Us Make zomato better</p>
                        <p className='font-semibold text-xl '>Report an error in this listing</p>
                        <p className='text-sm text-gray-500'>Help us make Zomato more updated and relevant for everyone</p>
                        <p className='flex justify-between '><Link className='text-red-500 text-[16px]'>Report now <i className="text-[14px] mx-2 fa-solid fa-play"></i></Link></p>
                    </div>
                </div>
                <div className='w-[340px] h-full sticky top-10' >
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