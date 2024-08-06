import React from 'react'
import HeaderFourth from '../components/HeaderFourth'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { act } from 'react'
import Overview from '../components/Overview'
import OrderOnline from '../components/OrderOnline'
import Review from '../components/Review'
import Photos from '../components/Photos'
import Menu from '../components/Menu'
import BookTable from '../components/BookTable'

const RestaurantDetail = () => {

    const { city, town, restaurant } = useParams();

    const [activeTab, setActiveTab] = useState("overview");
    const handleTabs = (tab) => {
        setActiveTab(tab);
    };

    const relatedRestaurants = [
        'Restaurants in Double Tree by Hilton Gomti Nagar', 'Restaurants in Lucknow', ' Lucknow Restaurants', 'Gomti Nagar restaurants', 'Best Gomti Nagar restaurants', 'East Lucknow restaurants', 'Casual Dining in Lucknow', 'Casual Dining near me', 'Casual Dining in Gomti Nagar', 'Bar in Lucknow', 'Bar near me', 'Bar in Gomti Nagar', 'in Lucknow', 'near me', 'in Gomti Nagar', 'Order food online in Gomti Nagar', 'Order food online in Lucknow'
    ]
    const aroundThePlace = [
        'Patrakar Puram restaurants', 'Indira Nagar restaurants', 'Nishatganj restaurants', 'Mahanagar restaurants'
    ]
    const frequentRestaurants = [
        'hilton garden inn lucknow restaurant', 'garden grill lucknow', 'hilton garden inn lucknow buffet price', 'hilton garden inn menu', 'menu for hilton garden inn lucknow'
    ]

    return (
        <>
            <HeaderFourth />

            <section>
                <div className='max-w-screen-lg mx-auto px-5 py-4 '>
                    <p className='text-gray-500 text-sm'>
                        <Link to={'/' + city + '/' + town} className='capitalize hover:text-red-600'> Home / </Link>
                        <Link to={'/'} className='capitalize hover:text-red-600'> India /  </Link>
                        <Link to={'/' + city} className='capitalize hover:text-red-600'>{city} / </Link>
                        <Link to={'/' + city} className='capitalize hover:text-red-600'>{town} / </Link>
                        <span className='capitalize text-gray-400'>{restaurant}</span>
                    </p>
                </div>
            </section>

            <section>
                <div className=' max-w-screen-xl px-5 mx-auto flex flex-col gap-4'>
                    <div className='grid grid-cols-4 gap-2 grid-rows-2 h-[340px]'>
                        {/* <img className='col-span-2 row-span-2 p-5 bg-red-600' src='https://b.zmtcdn.com/data/pictures/3/18972533/ecfa428872197028747732c7e0f4ebd0_featured_v2.jpg' alt='restaurant' /> */}
                        {/* <img className='col-start-3 p-5 bg-gray-600' src='https://b.zmtcdn.com/data/pictures/3/18972533/ecfa428872197028747732c7e0f4ebd0_featured_v2.jpg' alt='restaurant' /> */}
                        {/* <img className='col-start-3 p-5 bg-blue-600' src='https://b.zmtcdn.com/data/pictures/3/18972533/ecfa428872197028747732c7e0f4ebd0_featured_v2.jpg' alt='restaurant' /> */}
                        {/* <img className=' p-5 bg-yellow-600' src='https://b.zmtcdn.com/data/pictures/3/18972533/ecfa428872197028747732c7e0f4ebd0_featured_v2.jpg' alt='restaurant' /> */}
                        <div className='col-span-2 row-span-2 overflow-hidden'><div className='h-full cursor-pointer hover:scale-110 transition-all duration-1000 bg-center bg-cover bg-no-repeat bg-[url(https://b.zmtcdn.com/data/pictures/3/18614733/0ba8efe1346be0dabb2e6b2b5fa9fcd9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*)] '></div></div>
                        <div className='overflow-hidden'><div className='h-full cursor-pointer hover:scale-110 transition-all duration-1000  bg-center bg-cover bg-no-repeat bg-[url(https://b.zmtcdn.com/data/pictures/3/18614733/08fea855ead043508ba8731f6c992639.jpg?fit=around|300:273&crop=300:273;*,*)]'></div></div>
                        <div className='row-span-2 '><div className='h-full cursor-pointer bg-center bg-cover bg-no-repeat bg-[url(https://b.zmtcdn.com/data/pictures/3/18614733/b3eba44432334bec3b99ee26b696eb05.jpg?fit=around|300:273&crop=300:273;*,*)]  relative '><p className='bg-gray-800 opacity-60 items-center flex justify-center h-full absolute w-full text-white'>View Gallery</p></div></div>
                        <div className='overflow-hidden'><div className='h-full cursor-pointer hover:scale-110 bg-center transition-all duration-1000  bg-cover bg-no-repeat bg-[url(https://b.zmtcdn.com/data/pictures/3/18614733/abf31a6e5d445751013ba8512968cf8b.jpg?fit=around|300:273&crop=300:273;*,*)]'></div></div>
                    </div>
                    <div className=' gap-2 flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <p className='text-4xl'>Garden Grille & Bar - Hilton Garden Inn</p>
                            <div className='flex gap-4'>
                                <p className='flex items-center gap-2'>
                                    <p className=' flex items-baseline bg-green-500 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3.6 <i className="fa-solid fa-star text-[8px]"></i></p>
                                    <p className='border-b border-dashed'>
                                        <p className='font-semibold'>289</p>
                                        <p>Dining Ratings</p>
                                    </p>
                                </p>
                                <p className='flex items-center gap-2'>
                                    <p className=' flex items-baseline bg-green-500 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3.6 <i className="fa-solid fa-star text-[8px]"></i></p>
                                    <p className='border-b border-dashed'>
                                        <p className='font-semibold'>289</p>
                                        <p>Delivery Ratings</p>
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>North Indian, Asian, Mughlai, Fast Food, Desserts, Ice Cream</p>
                            <p className='text-gray-500'>Double Tree by Hilton Gomti Nagar, Lucknow</p>
                            <p><span className='text-red-400'>Open now </span> - 7am – 11pm (Today)</p>
                        </div>
                        <div className='flex justify-start gap-4 py-2'>
                            <Link className='text-gray-400 hover:bg-gray-50 font-normal border-[1.4px] border-gray-500 hover:shadow px-2 py-1 rounded-lg'><i className="text-red-500 mr-2 fa-solid fa-diamond-turn-right"></i>Direction</Link>
                            <Link className='text-gray-400 hover:bg-gray-50 font-normal border-[1.4px] border-gray-500 hover:shadow px-2 py-1 rounded-lg'><i className="text-red-500 mr-2 fa-regular fa-bookmark"></i> Bookmark</Link>
                            <Link className='text-gray-400 hover:bg-gray-50 font-normal border-[1.4px] border-gray-500 hover:shadow px-2 py-1 rounded-lg'><i className="text-red-500 mr-2 fa-solid fa-share"></i>Share</Link>
                        </div>
                    </div>
                </div>
            </section>


            <main className='bg-white'>
                <div className='max-w-screen-xl flex flex-wrap mx-auto border-b-2 '>
                    <div onClick={() => { handleTabs("overview") }} className={activeTab === "overview" ? 'p-4 text-xl text-red-500 font-normal flex items-center gap-2 border-b-red-500 border-b-2' : 'p-4 text-xl cursor-pointer text-gray-500 font-normal flex items-center gap-2'}>  Overview </div>
                    <div onClick={() => { handleTabs("order-online") }} className={activeTab === "order-online" ? 'p-4 text-xl text-red-500 font-normal flex items-center gap-2 border-b-red-500 border-b-2' : 'p-4 text-xl cursor-pointer text-gray-500 font-normal flex items-center gap-2'}> Order Online </div>
                    <div onClick={() => { handleTabs("review") }} className={activeTab === "review" ? 'p-4 text-xl text-red-500 font-normal flex items-center gap-2 border-b-red-500 border-b-2' : 'p-4 text-xl cursor-pointer text-gray-500 font-normal flex items-center gap-2'}> Review </div>
                    <div onClick={() => { handleTabs("photos") }} className={activeTab === "photos" ? 'p-4 text-xl text-red-500 font-normal flex items-center gap-2 border-b-red-500 border-b-2' : 'p-4 text-xl cursor-pointer text-gray-500 font-normal flex items-center gap-2'}> Photos </div>
                    <div onClick={() => { handleTabs("menu") }} className={activeTab === "menu" ? 'p-4 text-xl text-red-500 font-normal flex items-center gap-2 border-b-red-500 border-b-2' : 'p-4 text-xl cursor-pointer text-gray-500 font-normal flex items-center gap-2'}> Menu </div>
                    <div onClick={() => { handleTabs("book-table") }} className={activeTab === "book-table" ? 'p-4 text-xl text-red-500 font-normal flex items-center gap-2 border-b-red-500 border-b-2' : 'p-4 text-xl cursor-pointer text-gray-500 font-normal flex items-center gap-2'}> Book a Table </div>
                </div>
                <div className='max-w-screen-xl py-2 mx-auto'>
                    {
                        activeTab === 'overview' ?
                            <Overview activeTab={activeTab} setActiveTab={setActiveTab} handleTabs={handleTabs} /> :
                            activeTab === 'order-online' ?
                                <OrderOnline /> :
                                activeTab === 'review' ?
                                    <Review /> :
                                    activeTab === 'photos' ?
                                        <Photos /> :
                                        activeTab === 'menu' ?
                                            <Menu /> :
                                            <BookTable />
                    }
                </div>
            </main>
            <div className='max-w-screen-xl mx-auto'>
                <div className='mb-6'>
                    <p className='uppercase font-medium my-1' style={{ wordSpacing: '4px', letterSpacing: '1px' }}>RELATED TO GARDEN GRILLE & BAR - HILTON GARDEN INN, GOMTI NAGAR</p>
                    <div>
                        {
                            relatedRestaurants.map((res, index) => {
                                if (index !== relatedRestaurants.length - 1) {
                                    return (
                                        <Link key={index} className='text-gray-500 hover:text-gray-900'>{res}, </Link>
                                    )
                                }
                                else {
                                    return (
                                        <Link key={index} className='text-gray-500 hover:text-gray-900'>{res}</Link>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className='mb-6'>
                    <p className='uppercase font-medium my-1' style={{ wordSpacing: '4px', letterSpacing: '1px' }}>RESTAURANTS AROUND GOMTI NAGAR</p>
                    <div>
                        {
                            aroundThePlace.map((res, index) => {
                                if (index !== aroundThePlace.length - 1) {
                                    return (
                                        <Link key={index} className='text-gray-500 hover:text-gray-900'>{res}, </Link>
                                    )
                                }
                                else {
                                    return (
                                        <Link key={index} className='text-gray-500 hover:text-gray-900'>{res}</Link>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className='mb-6'>
                    <p className='uppercase font-medium my-1' style={{ wordSpacing: '4px', letterSpacing: '1px' }}>FREQUENT SEARCHES LEADING TO THIS PAGE</p>
                    <div>
                        {
                            frequentRestaurants.map((res, index) => {
                                if (index !== frequentRestaurants.length - 1) {
                                    return (
                                        <Link key={index} className='text-gray-500 hover:text-gray-900'>{res}, </Link>
                                    )
                                }
                                else {
                                    return (
                                        <Link key={index} className='text-gray-500 hover:text-gray-900'>{res}</Link>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default RestaurantDetail