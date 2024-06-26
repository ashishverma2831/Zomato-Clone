import React from 'react'

const Nightlife = () => {

  const filters = [
    'Filters', 'Offers', 'Serves Alcohol', 'Open now'
  ]
  
  return (
    <>
      <section className='bg-gray-100'>
        <div className='max-w-screen-xl mx-auto md:p-8'>
          <div className='w-full'>
            <p className='text-4xl text-left px-2 pt-2'>Collections</p>
            <div className='flex justify-between p-2 gap-2'>
              <p className='text-lg md:text-xl text-gray-500 '>Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends</p>
              <p className='flex justify-between '><button className='text-red-500 text-lg md:text-xl'>All collections in Lucknow <i className="text-sm mx-2 fa-solid fa-play"></i></button></p>
            </div>
            <div className='p-3 flex gap-4 justify-evenly flex-wrap'>
              <div className='cursor-pointer flex-1 h-[360px] min-w-[150px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                <p>Best insta-worthy places</p>
                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
              </div>
              <div className='cursor-pointer flex-1 h-[360px] min-w-[150px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                <p>Best insta-worthy places</p>
                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
              </div>
              <div className='cursor-pointer flex-1 h-[360px] min-w-[150px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                <p>Best insta-worthy places</p>
                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
              </div>
              <div className='cursor-pointer flex-1 h-[360px] min-w-[150px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                <p>Best insta-worthy places</p>
                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='border-t'>
        <div className='bg-white max-w-screen-xl flex flex-wrap gap-4 px-10 mx-auto p-6'>
          {
            filters.map((filter, index) => (
              <FilterButton key={index} text={filter} />
            ))
          }
        </div>
      </section>

    </>
  )
}

export default Nightlife