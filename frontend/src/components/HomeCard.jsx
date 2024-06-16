import React from 'react'

const HomeCard = ({cardData}) => {
    return (
        <>
            {
                cardData.map((card,index) => {
                    return (
                        <div key={index} className='w-[320px] rounded-2xl border-1 border overflow-hidden'>
                            {/* <div className={`w-full h-[150px] bg-center bg-cover bg-[url(${card.imageUrl})]`} /> */}
                            <img src={card.imageUrl} alt='food' className='w-full h-[150px] object-cover' /> 
                            <div className='p-5'>
                                <p className='text-xl mb-1'> {card.title} </p>
                                <p className='text-lg text-gray-500 font-thin text-ellipsis'> {card.description} </p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default HomeCard