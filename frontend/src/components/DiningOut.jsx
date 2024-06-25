import React from 'react'
import FilterButton from './FilterButton';

const DiningOut = () => {

    const filters = [
        'Filters', 'Offers', 'Rating:', 'Pet friendly', 'Outdoor Seating', 'Serves Alcohol', 'Open now'
    ]
    const rating = 0;

    return (
        <>
            <section className='bg-gray-100'>
                <div className='max-w-screen-xl mx-auto p-8'>
                    <div className='w-full'>
                        <p className='text-4xl text-left px-3'>Collections</p>
                        <div className='flex justify-between p-3'>
                            <p className='text-xl text-gray-500'>Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends</p>
                            <p className='flex justify-between'><button className='text-red-500 text-xl'>All collections in Lucknow <i className="text-sm mx-2 fa-solid fa-play"></i></button></p>
                        </div>
                        <div className='p-3 flex gap-4 justify-evenly flex-wrap'>
                            <div className='flex-1 h-[360px] min-w-[240px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className='flex-1 h-[360px] min-w-[240px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className='flex-1 h-[360px] min-w-[240px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className='flex-1 h-[360px] min-w-[240px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-red-800 sticky top-0'>
                <div className='bg-white max-w-screen-xl flex flex-wrap gap-4 mx-auto px-10 py-5'>
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

export default DiningOut