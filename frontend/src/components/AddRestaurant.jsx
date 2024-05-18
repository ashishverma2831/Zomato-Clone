import React from 'react'
import HeaderSecond from './HeaderSecond'
import HeroSecond from './HeroSecond'
import HeroSecondTwo from './HeroSecondTwo'
import SliderOne from './SliderOne'
import SliderTwo from './SliderTwo'

const AddRestaurant = () => {

  const data = [
    {
      title: 'What will Zomato charge me for creating a page on its platform?',
      description: 'Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.'
    },
    {
      title: 'What all documents are required for registering on online ordering?',
      description: 'You need to have a valid FSSAI license, GST certificate, and a cancelled cheque to register for online ordering. You can also register with a food delivery partner of your choice.'
    }, {
      title: 'I have a large fleet of delivery boys, why should I use Zomato’s delivery service?',
      description: "You can use your and Zomato's delivery fleet simultaneously to increase the network of your delivery radius. Also, our delivery fleet delivers orders in minimum possible time, a key factor leading to increased customer satisfaction."
    },
    {
      title: 'What happens if the average order value of Zomato orders is very low',
      description: 'Average order value from our platform is generally more than Rs 250. However, in some cases, users want to try out your place by ordering for lesser amount. But we have observed that they eventually come back with higher value orders if they like your food.'
    }
  ]

  return (
    <>
      <HeaderSecond />
      <HeroSecond />
      <HeroSecondTwo />

      <section className=' h-[560px] '>
        <div className='bg-gray-100 bg-no-repeat bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8fDA%3D)] h-[360px]'>
          <div className='text-center max-w-screen-lg mx-auto p-5 translate-y-10'>
            <p className='text-4xl mb-5'>How it works?</p>
            <div className='flex gap-6  py-10 justify-evenly'>
              <div className='bg-white shadow-md rounded-lg flex-col w-[270px] text-center items-center flex p-5 gap-2'>
                <img className='bg-yellow-50 my-2 p-10 rounded-full' src='https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png' />
                <p className='text-xl'>Step 1</p>
                <p className='text-lg text-gray-700'>Create your page on Zomato</p>
                <p className='text-sm text-gray-500 text-center'>Help users discover your place by creating a listing on Zomato</p>
              </div>
              <div className='bg-white shadow-md rounded-lg flex-col w-[270px] text-center items-center flex p-5 gap-2'>
                <img className='bg-pink-50 my-2 p-10 rounded-full' src='https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png' />
                <p className='text-xl'>Step 2</p>
                <p className='text-lg text-gray-700'>Register for online ordering</p>
                <p className='text-sm text-gray-500 text-center'>And deliver orders to millions of customers with ease</p>
              </div>
              <div className='bg-white shadow-md rounded-lg flex-col w-[270px] text-center items-center flex p-5 gap-2'>
                <img className='bg-orange-50 my-2 p-10 rounded-full' src='https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png' />
                <p className='text-xl'>Step 3</p>
                <p className='text-lg text-gray-700'>Start receiving orders online</p>
                <p className='text-sm text-gray-500 text-center'>Manage orders on our partner app, web dashboard or API partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 py-10 my-10'>
        <div className='max-w-screen-lg flex flex-col gap-6 text-center px-10 py-10 mx-auto'>
          <p className='text-4xl leading-snug font-semibold'>Already have your restaurant listed?</p>
          <p className='text-xl text-gray-500 '>Search here and claim the ownership of your restaurant</p>
          <div className='w-full'>
            <input type='text' className='w-10/12 outline-none border-none rounded-md py-2.5' placeholder='Search for your restaurant, eg. Greenland Cafe' />
          </div>
        </div>
      </section>
      <SliderOne />
      <SliderTwo />

      <section className='p-20'>
        <div className='bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8fDA%3D)] rounded-xl max-w-screen-lg mx-auto p-8'>
          <p className='text-4xl mb-6 text-white font-semibold'>Start your journey with Zomato</p>
          <p className='text-white mb-6'>Create your restaurant page and register for online ordering</p>
          <button className='bg-blue-500 mb-6 hover:bg-blue-600 px-8 py-2 text-lg text-white font-normal rounded-md'>Start now</button>
        </div>
      </section>

      <section className='py-10 text-center'>
        <p className='text-4xl text-center'>Frequently asked questions</p>
        <div className='max-w-screen-lg text-center mx-auto my-10'>

          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white text-gray-900"
            data-inactive-classes="text-gray-500"
            className='my-2'
          >
            <h2 id="accordion-flush-heading-1" className='mb-4 shadow-sm'>
              <button
                type="button"
                className="flex px-7 border rounded-lg items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span> What will Zomato charge me for creating a page on its platform? </span>
                <svg
                  data-accordion-icon=""
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className="hidden border rounded-lg -translate-y-4 shadow-sm"
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="p-5 border-gray-200">
                <p className=" text-gray-500 text-left">
                  Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.
                </p>
              </div>
            </div>

            <h2 id="accordion-flush-heading-2" className='mb-4 shadow-sm'>
              <button
                type="button"
                className="flex px-7 border rounded-lg items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="true"
                aria-controls="accordion-flush-body-2"
              >
                <span> What all documents are required for registering on online ordering? </span>
                <svg
                  data-accordion-icon=""
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              className="hidden border rounded-lg -translate-y-4 shadow-sm"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="p-5 border-gray-200">
                <p className=" text-gray-500 text-left">
                  You need to have a valid FSSAI license, GST certificate, and a cancelled cheque to register for online ordering. You can also register with a food delivery partner of your choice.
                </p>
              </div>
            </div>

            <h2 id="accordion-flush-heading-3" className='mb-4 shadow-sm'>
              <button
                type="button"
                className="flex px-7 border rounded-lg items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="true"
                aria-controls="accordion-flush-body-3"
              >
                <span> I have a large fleet of delivery boys, why should I use Zomato’s delivery service? </span>
                <svg
                  data-accordion-icon=""
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-3"
              className="hidden border rounded-lg -translate-y-4 shadow-sm"
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="p-5 border-gray-200">
                <p className=" text-gray-500 text-left">
                  You can use your and Zomato's delivery fleet simultaneously to increase the network of your delivery radius. Also, our delivery fleet delivers orders in minimum possible time, a key factor leading to increased customer satisfaction.
                </p>
              </div>
            </div>

            <h2 id="accordion-flush-heading-4" className='mb-4 shadow-sm'>
              <button
                type="button"
                className="flex px-7 border rounded-lg items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                data-accordion-target="#accordion-flush-body-4"
                aria-expanded="true"
                aria-controls="accordion-flush-body-4"
              >
                <span> What happens if the average order value of Zomato orders is very low? </span>
                <svg
                  data-accordion-icon=""
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-4"
              className="hidden border rounded-lg -translate-y-4 shadow-sm"
              aria-labelledby="accordion-flush-heading-4"
            >
              <div className="p-5 border-gray-200">
                <p className="text-gray-500 text-left">
                  Average order value from our platform is generally more than Rs 250. However, in some cases, users want to try out your place by ordering for lesser amount. But we have observed that they eventually come back with higher value orders if they like your food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default AddRestaurant