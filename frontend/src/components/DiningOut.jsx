import React from 'react'
import FilterButton from './FilterButton';
import AdvertisementCard from './AdvertisementCard';
import RestaurantCard from './RestaurantCard';
import Carousel from 'react-multi-carousel';
import CollectionComponent from './CollectionComponent';

const DiningOut = ({city,town}) => {

    const filters = [
        'Filters', 'Offers', 'Rating:', 'Pet friendly', 'Outdoor Seating', 'Serves Alcohol', 'Open now'
    ]
    const rating = 0;

    return (
        <>
            <CollectionComponent city={city} />

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
                        <RestaurantCard city={city} town={town} />
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