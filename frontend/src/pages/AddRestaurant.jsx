import React, { useEffect, useState } from 'react'
import HeaderSecond from '../components/HeaderSecond'
import HeroSecond from '../components/HeroSecond'
import HeroSecondTwo from '../components/HeroSecondTwo'
import SliderOne from '../components/SliderOne'
import SliderTwo from '../components/SliderTwo'
import '../App.css'

const AddRestaurant = () => {

  const [accordion, setAccordion] = useState({
    key: 0,
    hidden: false
  });

  const data = [
    {
      title: 'Restaurant Partner app',
      description: 'Manage all your orders on your smartphone with our Android app',
      image: 'https://b.zmtcdn.com/merchant-onboarding/2b0ec3e91e16dfcae922f213fdf808f11600934847.png'
    },
    {
      title: 'Restaurant Partner web dashboard',
      description: 'Manage all your orders on your desktop or laptop',
      image: 'https://b.zmtcdn.com/merchant-onboarding/a603975bb4aea5941c7c45bb3480be1c1600934866.png'
    },
    {
      title: 'API integration',
      description: 'Manage all your orders on your existing Point of Sale (POS) or third party software',
      image: 'https://b.zmtcdn.com/merchant-onboarding/e83523818f82dd8cefedf4e069424fae1600934891.png'
    }
  ]

  const [tab, setTab] = useState(1);

  // setInterval(()=>{
  //   if(tab===1){
  //     setTab(2);
  //   }
  //   else if(tab===2){
  //     setTab(3);
  //   }
  //   else if(tab===3){
  //     setTab(1);
  //   }
  // }, 2000)

  useEffect(() => {
    const interval = setInterval(() => {
      if (tab === 1) {
        setTab(2);
      }
      else if (tab === 2) {
        setTab(3);
      }
      else if (tab === 3) {
        setTab(1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [tab]);

  console.log(tab);

  return (
    <>
      <HeaderSecond />
      <HeroSecond />
      <HeroSecondTwo />

      <section className='py-6 sm:py-10'>
        <div className='min-h-[360px] bg-gray-100 bg-no-repeat bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8fDA%3D)]'>
          <div className='mx-auto max-w-screen-lg p-4 text-center sm:p-6 md:p-8'>
            <p className='mb-5 text-2xl sm:text-3xl md:text-4xl'>How it works?</p>
            <div className='grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 sm:gap-5 md:py-10 lg:grid-cols-3'>
              <div className='flex w-full flex-col items-center gap-2 rounded-lg bg-white p-5 text-center shadow-md'>
                <img className='my-2 rounded-full bg-yellow-50 p-7 sm:p-10' src='https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png' />
                <p className='text-xl'>Step 1</p>
                <p className='text-lg text-gray-700'>Create your page on Zomato</p>
                <p className='text-sm text-gray-500 text-center'>Help users discover your place by creating a listing on Zomato</p>
              </div>
              <div className='flex w-full flex-col items-center gap-2 rounded-lg bg-white p-5 text-center shadow-md'>
                <img className='my-2 rounded-full bg-pink-50 p-7 sm:p-10' src='https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png' />
                <p className='text-xl'>Step 2</p>
                <p className='text-lg text-gray-700'>Register for online ordering</p>
                <p className='text-sm text-gray-500 text-center'>And deliver orders to millions of customers with ease</p>
              </div>
              <div className='flex w-full flex-col items-center gap-2 rounded-lg bg-white p-5 text-center shadow-md'>
                <img className='my-2 rounded-full bg-orange-50 p-7 sm:p-10' src='https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png' />
                <p className='text-xl'>Step 3</p>
                <p className='text-lg text-gray-700'>Start receiving orders online</p>
                <p className='text-sm text-gray-500 text-center'>Manage orders on our partner app, web dashboard or API partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='my-8 bg-gray-100 py-6 sm:my-10 sm:py-10'>
        <div className='mx-auto flex max-w-screen-lg flex-col gap-4 px-4 py-6 text-center sm:gap-6 sm:px-8 sm:py-10'>
          <p className='text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl'>Already have your restaurant listed?</p>
          <p className='text-base text-gray-500 sm:text-xl'>Search here and claim the ownership of your restaurant</p>
          <div className='w-full'>
            <input type='text' className='w-full rounded-md border-none py-2.5 outline-none sm:w-10/12' placeholder='Search for your restaurant, eg. Greenland Cafe' />
          </div>
        </div>
      </section>
      <SliderOne />
      <SliderTwo />

      <section className='px-4 py-8 sm:px-6 sm:py-10'>
        <div className='max-w-screen-lg mx-auto'>
          <div className='flex flex-col gap-3 p-3 sm:gap-4 sm:p-5'>
            <p className='text-2xl font-semibold sm:text-3xl md:text-4xl'>What do you get on sign-up</p>
            <p className='text-base font-normal text-gray-500 sm:text-xl'>Zomato Partner Platform helps you take your business to new heights instantly with no hassle and 100% transparency!</p>
          </div>
          <div className='flex flex-col gap-4 md:flex-row'>
            <div className='flex w-full flex-col justify-evenly md:w-1/2'>

              {
                data.map((card,index) => {
                  return (
                    <div className='p-3 sm:p-5' key={index}>
                      <div className={tab-1 === index ? 'flex items-center gap-4 active-tab' : 'flex items-center gap-4'}> <p className={tab-1 === index ? ' w-10 h-10 flex justify-center items-center rounded-full border active-box':' w-10 h-10 flex justify-center items-center rounded-full bg-white border'}> {index+1} </p> <p className='text-2xl font-semibold'> {card.title} </p></div>
                      <p className='ml-10 pl-4 text-lg text-gray-500'> {card.description} </p>
                    </div>
                  );
                })
              }

              {/* <div className='bg-blue-300 p-5'>
                <div className='flex items-center gap-4'> <p className=' w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 border'>1</p> <p className='text-2xl'>kkklllllllllllll</p></div>
                <p className='ml-10 pl-4 text-lg text-gray-500'>Lorem ipsum dolor sit amet, qui officiis omnis voluptate repellendus suscipit eveniet ad fugiat.</p>
              </div> */}
            </div>
            <div className='flex w-full items-center justify-center bg-cover bg-center py-4 md:w-1/2 md:py-0 bg-[url(./public/blob.svg)]'>
              {/* <img className=' w-[200px] mx-auto' src='https://b.zmtcdn.com/merchant-onboarding/2b0ec3e91e16dfcae922f213fdf808f11600934847.png' /> */}
              {
                tab===1 ? <img className='mx-auto w-[150px] max-w-full' src='https://b.zmtcdn.com/merchant-onboarding/2b0ec3e91e16dfcae922f213fdf808f11600934847.png' /> : (tab === 2 ? <img className='mx-auto w-full max-w-[420px]' src='https://b.zmtcdn.com/merchant-onboarding/a603975bb4aea5941c7c45bb3480be1c1600934866.png' /> : <img className='mx-auto w-full max-w-[420px]' src='https://b.zmtcdn.com/merchant-onboarding/e83523818f82dd8cefedf4e069424fae1600934891.png' />)
              }
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16'>
        <div className='mx-auto max-w-screen-lg rounded-xl bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8fDA%3D)] p-5 sm:p-8'>
          <p className='mb-4 text-2xl font-semibold text-white sm:mb-6 sm:text-3xl md:text-4xl'>Start your journey with Zomato</p>
          <p className='text-white mb-6'>Create your restaurant page and register for online ordering</p>
          <button className='bg-blue-500 mb-6 hover:bg-blue-600 px-8 py-2 text-lg text-white font-normal rounded-md'>Start now</button>
        </div>
      </section>

      <section className='px-4 py-8 text-center sm:px-6 sm:py-10'>
        <p className='text-center text-2xl sm:text-3xl md:text-4xl'>Frequently asked questions</p>
        <div className='mx-auto my-6 max-w-screen-lg text-center sm:my-10'>

          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white text-gray-900"
            data-inactive-classes="text-gray-500"
            className='my-2'
          >
            <h2 id="accordion-flush-heading-1" className='mb-4 shadow-sm'>
              <button
                onClick={() => { setAccordion({ key: 1, hidden: !accordion.hidden }) }}
                type="button"
                className="flex w-full items-center justify-between gap-3 rounded-lg border border-b border-gray-200 px-4 py-4 text-left font-medium text-gray-500 rtl:text-right sm:px-7 sm:py-5"
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
            key={1}
              id="accordion-flush-body-1"
              className={`border rounded-lg -translate-y-4 shadow-sm ${accordion.key === 1 && accordion.hidden ? 'block' : 'hidden'}`}
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
              onClick={() => { setAccordion({ key: 2, hidden: !accordion.hidden }) }}
                type="button"
                className="flex w-full items-center justify-between gap-3 rounded-lg border border-b border-gray-200 px-4 py-4 text-left font-medium text-gray-500 rtl:text-right sm:px-7 sm:py-5"
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
            key={2}
              id="accordion-flush-body-2"
              className={`border rounded-lg -translate-y-4 shadow-sm ${accordion.key === 2 && accordion.hidden ? 'block' : 'hidden'}`}
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
                onClick={() => { setAccordion({ key: 3, hidden: !accordion.hidden }) }}
                type="button"
                className="flex w-full items-center justify-between gap-3 rounded-lg border border-b border-gray-200 px-4 py-4 text-left font-medium text-gray-500 rtl:text-right sm:px-7 sm:py-5"
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
            key={3}
              id="accordion-flush-body-3"
              className={`border rounded-lg -translate-y-4 shadow-sm ${accordion.key === 3 && accordion.hidden ? 'block' : 'hidden'}`}
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
                onClick={() => { setAccordion({ key: 4, hidden: !accordion.hidden }) }}
                type="button"
                className="flex w-full items-center justify-between gap-3 rounded-lg border border-b border-gray-200 px-4 py-4 text-left font-medium text-gray-500 rtl:text-right sm:px-7 sm:py-5"
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
              key={4}
              id="accordion-flush-body-4"
              className={`border rounded-lg -translate-y-4 shadow-sm ${accordion.key === 4 && accordion.hidden ? 'block' : 'hidden'}`}
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