import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantCard = ({city,town}) => {
  return (
    <>
        <Link to={'/'+city+'/'+town+'/punjabi-tadka'} className='w-full min-w-0 flex-none sm:w-[calc(50%_-_0.25rem)] md:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)] cursor-pointer hover:bg-white hover:shadow-lg p-2 hover:rounded-xl'>
            <img className='w-full aspect-[4/3] object-cover rounded-xl' src='https://b.zmtcdn.com/data/pictures/3/18972533/ecfa428872197028747732c7e0f4ebd0_featured_v2.jpg' alt='restaurant' />
            <div className='flex flex-col py-2'>
                <div className=' flex justify-between items-center '>
                    <p className=' w-4/5 truncate text-lg font-semibold'>Mahavir Bhojnalaya And Baati Chokha</p>
                    <p className=' flex items-baseline bg-green-500 text-sm text-white font-bold gap-1 py-[0.5px] px-1 rounded-md'>3.6 <i className="fa-solid fa-star text-[8px]"></i></p>
                </div>
                <div className='flex min-w-0 justify-between gap-2 text-sm text-gray-500 sm:text-base'>
                    <p className='min-w-0 flex-1 truncate'>North Indian, Chinese, Fast Food, Mughlai, Beverages </p>
                    <p className='shrink-0'>₹500 for two</p>
                </div>
                <p className='text-gray-400 w-full truncate'> Pandeypur, Varanasi</p>
                <div className='flex justify-between '>
                    <p className='text-red-600'>Opens at 11am</p>
                    <p className='text-gray-500'>3.7 Km</p>
                </div>
            </div>
        </Link>
    </>
  )
}

export default RestaurantCard