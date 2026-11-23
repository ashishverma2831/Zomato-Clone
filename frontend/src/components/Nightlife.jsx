import React from 'react'
import FilterButton from './FilterButton'
import AdvertisementCard from './AdvertisementCard'
import RestaurantCard from './RestaurantCard'
import CollectionComponent from './CollectionComponent'

const Nightlife = ({city,town}) => {

  const filters = [
    'Filters', 'Offers', 'Serves Alcohol', 'Open now'
  ]

  return (
    <>
      <CollectionComponent city={city} />


      <section className='border-t'>
        <div className='bg-white max-w-screen-xl flex flex-wrap gap-2 sm:gap-4 px-4 sm:px-6 lg:px-10 mx-auto py-4 sm:p-6'>
          {
            filters.map((filter, index) => (
              <FilterButton key={index} text={filter} />
            ))
          }
        </div>
      </section>

      <AdvertisementCard />

      <section>
        <div className='py-5 px-4 sm:px-6 lg:px-10 max-w-screen-xl mx-auto '>
          <p className='px-2 text-2xl sm:text-3xl md:text-4xl font-normal'>Nightlife: Night clubs, pubs and bar in T. Nagar</p>
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

export default Nightlife