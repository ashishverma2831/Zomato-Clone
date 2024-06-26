import React from 'react'
import FilterButton from './FilterButton';
import AdvertisementCard from './AdvertisementCard';
import RestaurantCard from './RestaurantCard';
import Carousel from 'react-multi-carousel';

const DiningOut = () => {

    const filters = [
        'Filters', 'Offers', 'Rating:', 'Pet friendly', 'Outdoor Seating', 'Serves Alcohol', 'Open now'
    ]
    const rating = 0;

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
                        <Carousel
                            autoPlay={false}
                            autoPlaySpeed={4000}
                            containerClass="container-with-dots"
                            dotListClass="react-multi-carousel-dot-list"
                            draggable={true}
                            infinite={false}
                            renderButtonGroupOutside={true}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024
                                    },
                                    items: 4,
                                    partialVisibilityGutter: 40
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 512
                                    },
                                    items: 3,
                                    partialVisibilityGutter: 30
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 512,
                                        min: 0
                                    },
                                    items: 2,
                                    partialVisibilityGutter: 30
                                }
                            }}
                            customLeftArrow={<button className='hover:bg-gray-100 border border-gray-400 shadow-2xl text-gray-900 font-bold text-xl flex justify-center absolute w-8 left-0 -translate-x-1 bg-white h-8 mx-1 rounded-full'>{'<'}</button>}
                            customRightArrow={<button className='hover:bg-gray-100  border border-gray-400 shadow-2xl text-gray-900 font-bold text-xl flex justify-center absolute right-0 translate-x-1 bg-white w-8 h-8 mx-1 rounded-full'>{'>'}</button>}
                            customDot={<button className='bg-gray-400/50 w-2 h-2 mx-1 my-5 rounded-full'></button>}
                            rewind={false}
                            rewindWithAnimation={false}
                            shouldResetAutoplay={true}
                            showDots={false}
                            slidesToSlide={1}
                            swipeable={true}
                        >
                            <div className=' mx-2 cursor-pointer flex-1 h-[360px] min-w-[150px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer flex-1 h-[360px] min-w-[150px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer flex-1 h-[360px] min-w-[150px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer flex-1 h-[360px] min-w-[150px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>

            <section>
                <div className='bg-white max-w-screen-xl flex flex-wrap gap-4 mx-auto px-10 py-5'>
                    {
                        filters.map((filter, index) => (
                            <FilterButton key={index} text={filter} />
                        ))
                    }
                </div>
            </section>

            <AdvertisementCard />

            <section>
                <div className='py-5 px-10 max-w-screen-xl mx-auto '>
                    <p className='px-2 text-4xl font-normal'>T. Nagar Restaurants, Chennai</p>
                    <div className='flex flex-wrap py-5 gap-2 md:gap-6'>
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                    </div>
                </div>
            </section>

        </>
    )
}

export default DiningOut