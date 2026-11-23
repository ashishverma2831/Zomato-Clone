import React from 'react'
import HeaderFourth from '../components/HeaderFourth'
import Footer from '../components/Footer'
import { cities, deliveryCities } from '../data/data'

const DeliverCities = () => {
    return (
        <>
            <HeaderFourth />
            <section className='mx-auto my-6 max-w-screen-xl px-4 sm:my-10 sm:px-6'>
                <p className='px-1 py-4 text-2xl font-normal sm:text-3xl md:text-4xl'>Cities we deliver to</p>
                <div className='rounded-lg border-gray-200 p-2 sm:p-5'>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-3 text-left text-gray-500 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4">
                        {
                            deliveryCities.map((city, index) => {
                                return (
                                    <span key={index} className='min-w-0 break-words text-sm text-gray-500 hover:text-gray-700 sm:text-base'> <span className='cursor-pointer'>{city}</span> </span>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default DeliverCities