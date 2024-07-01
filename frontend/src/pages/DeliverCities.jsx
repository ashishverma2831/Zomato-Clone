import React from 'react'
import HeaderFourth from '../components/HeaderFourth'
import Footer from '../components/Footer'
import { cities, deliveryCities } from '../data/data'

const DeliverCities = () => {
    return (
        <>
            <HeaderFourth />
            <section className='max-w-screen-xl my-10 mx-auto'>
                <p className='p-5 font-normal text-4xl'>Cities we deliver to</p>
                <div className={`p-5 border-gray-200 rounded-lg`}>
                    <p className=" text-gray-500 text-left flex gap-2 flex-wrap">
                        {
                            deliveryCities.map((city, index) => {
                                return (
                                    <span key={index} className='min-w-[100px] md:min-w-[240px] text-gray-500 hover:text-gray-700 '> <span className='cursor-pointer'>{city}</span> </span>
                                )
                            })
                        }
                    </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default DeliverCities