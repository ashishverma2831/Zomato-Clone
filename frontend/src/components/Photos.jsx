import React, { useState } from 'react'

const Photos = () => {

  

  return (
    <>
      <section className='border-b-2'>
        <p className='text-2xl font-semibold'>Garden Grille & Bar - Hilton Garden Inn Photos</p>
        <div>
          <div className='flex mt-6 gap-4'>
            <button className='text-gray-500 rounded-md border py-2 px-4'>All (247)</button>
            <button className='text-gray-500 rounded-md border py-2 px-4'>Food (184)</button>
            <button className='text-gray-500 rounded-md border py-2 px-4'>Ambience (29)</button>
          </div>
          <div className='flex flex-wrap py-5 justify-start gap-2'>
            <div className='rounded cursor-pointer overflow-hidden transition-all duration-1000'><div className='w-[200px] h-[200px] transition-all duration-1000 bg-center bg-cover hover:scale-110 bg-no-repeat rounded bg-[url(https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg)]' /></div>
            <div className='rounded cursor-pointer overflow-hidden transition-all duration-1000'><div className='w-[200px] h-[200px] transition-all duration-1000 bg-center bg-cover hover:scale-110 bg-no-repeat rounded bg-[url(https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392)]' /></div>
          </div>
          <div className=' flex justify-between p-4'>
            <p>Showing 1-30 of 247 images</p>
            <div>hello</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Photos