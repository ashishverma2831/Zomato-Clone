import React from 'react'

const Photos = () => {
  return (
    <>
      <section>
        <p className='text-2xl font-semibold'>Garden Grille & Bar - Hilton Garden Inn Photos</p>
        <div>
          <div className='flex gap-4'>
            <button className='text-gray-500 rounded-md border py-2 px-4'>All (247)</button>
            <button className='text-gray-500 rounded-md border py-2 px-4'>Food (184)</button>
            <button className='text-gray-500 rounded-md border py-2 px-4'>Ambience (29)</button>
          </div>
          <div className='flex flex-wrap py-5 justify-start gap-2'>
            <div className='rounded cursor-pointer overflow-hidden transition-all duration-1000'><div className='w-[200px] h-[200px] transition-all duration-1000 bg-center bg-cover hover:scale-110 bg-no-repeat rounded bg-[url(https://b.zmtcdn.com/data/reviews_photos/2ef/0e7e1a503ccc3c7357e1be6eaf2592ef_1605062839.jpg?output-format=webp)]' /></div>
            <div className='rounded cursor-pointer overflow-hidden transition-all duration-1000'><div className='w-[200px] h-[200px] transition-all duration-1000 bg-center bg-cover hover:scale-110 bg-no-repeat rounded bg-[url(https://b.zmtcdn.com/data/reviews_photos/2ef/0e7e1a503ccc3c7357e1be6eaf2592ef_1605062839.jpg?output-format=webp)]' /></div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  )
}

export default Photos