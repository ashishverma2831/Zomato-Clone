import React from 'react'

const HeroSecondTwo = () => {
  return (
    <>
        <div className="bg-white p-10">
            <div className='max-w-screen-lg mx-auto p-10'>
                <p className='text-center font-semibold text-4xl mb-8'>Why should you partner with Zomato?</p>
                <p className='text-center font-normal text-gray-500 text-xl px-10 my-4'>Zomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
                <div className='p-5 flex gap-5 mt-10'>
                    <div className='flex-1 flex justify-center items-center shadow-xl py-6 rounded-lg'>
                        <i className="fa-solid fa-earth-asia text-4xl text-blue-500 w-1/4"></i>
                        <div>
                            <p className='text-blue-600 font-semibold text-xl'>1000+ cities</p>
                            <p className='text-gray-500 font-normal text-lg'>in India</p>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center items-center gap-4 shadow-xl py-6 rounded-lg'>
                        <i className="fa-solid fa-shop text-4xl text-blue-500 w-1/4"></i>
                        <div>
                            <p className='text-blue-600 font-semibold text-xl'>3 lakh+</p>
                            <p className='text-gray-500 font-normal text-lg'>restaurant listings</p>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center items-center gap-4 shadow-xl py-6 rounded-lg'>
                        <i className="fa-solid fa-house text-4xl text-blue-500 w-1/4"></i>
                        <div>
                            <p className='text-blue-600 font-semibold text-xl'>5.0 crore+</p>
                            <p className='text-gray-500 font-normal text-lg'>monthly orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSecondTwo