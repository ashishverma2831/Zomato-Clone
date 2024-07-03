import React from 'react'
import HeaderFourth from '../components/HeaderFourth'
import Footer from '../components/Footer'
import { useParams,Link } from 'react-router-dom'

const RestaurantDetail = () => {

    const {city,town,restaurant} = useParams();

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
        <div className='max-w-screen-xl px-5 mx-auto flex flex-col gap-4'>
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
      </section>

        <Footer />
    </>
  )
}

export default RestaurantDetail