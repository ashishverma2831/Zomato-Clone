import React from 'react'
import HeaderSecond from './HeaderSecond'
import HeroSecond from './HeroSecond'
import HeroSecondTwo from './HeroSecondTwo'
import SliderOne from './SliderOne'
import SliderTwo from './SliderTwo'

const AddRestaurant = () => {

  return (
    <>
      <HeaderSecond />
      <HeroSecond />
      <HeroSecondTwo />

      <section className=' h-[560px] '>
        <div className='bg-gray-100 bg-no-repeat bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8fDA%3D)] h-[360px]'>
          <div className='text-center max-w-screen-lg mx-auto p-5 translate-y-10'>
            <p className='text-4xl mb-5'>How it works?</p>
            <div className='flex gap-6  py-10 justify-evenly'>
              <div className='bg-white shadow-md rounded-lg flex-col w-[270px] text-center items-center flex p-5 gap-2'>
                  <img className='bg-yellow-50 my-2 p-10 rounded-full' src='https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png' />
                  <p className='text-xl'>Step 1</p>
                  <p className='text-lg text-gray-700'>Create your page on Zomato</p>
                  <p className='text-sm text-gray-500 text-center'>Help users discover your place by creating a listing on Zomato</p>
              </div>
              <div className='bg-white shadow-md rounded-lg flex-col w-[270px] text-center items-center flex p-5 gap-2'>
                  <img className='bg-pink-50 my-2 p-10 rounded-full' src='https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png' />
                  <p className='text-xl'>Step 2</p>
                  <p className='text-lg text-gray-700'>Register for online ordering</p>
                  <p className='text-sm text-gray-500 text-center'>And deliver orders to millions of customers with ease</p>
              </div>
              <div className='bg-white shadow-md rounded-lg flex-col w-[270px] text-center items-center flex p-5 gap-2'>
                  <img className='bg-orange-50 my-2 p-10 rounded-full' src='https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png' />
                  <p className='text-xl'>Step 3</p>
                  <p className='text-lg text-gray-700'>Start receiving orders online</p>
                  <p className='text-sm text-gray-500 text-center'>Manage orders on our partner app, web dashboard or API partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 py-10 my-10'>
        <div className='max-w-screen-lg flex flex-col gap-6 text-center px-10 py-10 mx-auto'>
          <p className='text-4xl leading-snug font-semibold'>Already have your restaurant listed?</p>
          <p className='text-xl text-gray-500 '>Search here and claim the ownership of your restaurant</p>
          <div className='w-full'>
            <input type='text' className='w-10/12 outline-none border-none rounded-md py-2.5' placeholder='Search for your restaurant, eg. Greenland Cafe' />
          </div>
        </div>
      </section>
      <SliderOne />
      <SliderTwo />

      <section className='bg-red-300 p-20'>
        <div className='bg-red-400 bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8fDA%3D)] rounded-xl max-w-screen-lg mx-auto p-8'>
          <p className='text-4xl mb-6 text-white font-semibold'>Start your journey with Zomato</p>
          <p className='text-white mb-6'>Create your restaurant page and register for online ordering</p>
          <button className='bg-blue-500 mb-6 hover:bg-blue-600 px-8 py-2 text-lg text-white font-normal rounded-md'>Start now</button>
        </div>
      </section>

    </>
  )
}

export default AddRestaurant