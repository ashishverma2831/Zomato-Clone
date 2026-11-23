import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({cardData,city}) => {
    return (
        <>
            {
                cardData.map((card,index) => {
                    return (
                        <Link to={index===0?`/${city}/order-online`:index===1?`/${city}/dining`:`/${city}/nightlife-and-clubs`} key={index} className='md:flex-1 rounded-2xl border-1 border overflow-hidden hover:scale-105 transition-all duration-200'>
                            {/* <div className={`w-full h-[150px] bg-center bg-cover bg-[url(${card.imageUrl})]`} /> */}
                            <img src={card.imageUrl} alt='food' className='w-full h-[150px] object-cover' /> 
                            <div className='p-4'>
                                <p className='text-xl mb-1'> {card.title} </p>
                                <p className='text-base sm:text-lg text-gray-500 font-thin line-clamp-2'> {card.description} </p>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default HomeCard