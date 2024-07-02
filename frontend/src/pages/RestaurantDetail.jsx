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

        <Footer />
    </>
  )
}

export default RestaurantDetail