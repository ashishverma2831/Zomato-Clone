import React, { useEffect, useState } from 'react'
import HomeCard from '../components/HomeCard'
import styled from 'styled-components'
import Footer from '../components/Footer';
// import Header from '../components/Header';
import { Link, useParams } from 'react-router-dom';
import HeaderThird from '../components/HeaderThird';
import ExploreAccordion from '../components/ExploreAccordion';
import CollectionComponent from '../components/CollectionComponent';

const Section = styled.section`
  display:flex;
  justify-content: space-evenly;
  gap:20px;
  flex-wrap: wrap;
  `;


const HomePage = () => {

  const cardData = [
    {
      title: 'Order Online',
      description: 'Stay Home and order to your doorstep',
      imageUrl: 'https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
    },
    {
      title: 'Dining',
      description: "View the city's favourite dining venues",
      imageUrl: 'https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
    },
    {
      title: 'Nightlife and Clubs',
      description: "Explore the city's top nightlife outlets",
      imageUrl: 'https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
    }
  ]

  const cityTowns = [
    {
      city: 'GomtiNagar',
      place: '1689 places'
    },
    {
      city: 'Hazratganj',
      place: '1689 places'
    },
    {
      city: 'Aliganj',
      place: '1689 places'
    },
    {
      city: 'IndiraNagar',
      place: '1689 places'
    },
    {
      city: 'Alambagh',
      place: '1689 places'
    },
    {
      city: 'Charbagh',
      place: '1689 places'
    },
    {
      city: 'Aminabad',
      place: '1689 places'
    },
    {
      city: 'Jankipuram',
      place: '1689 places'
    },
    {
      city: 'GomtiNagar',
      place: '1689 places'
    },
    {
      city: 'Hazratganj',
      place: '1689 places'
    },
    {
      city: 'Aliganj',
      place: '1689 places'
    },
    {
      city: 'IndiraNagar',
      place: '1689 places'
    },
    {
      city: 'Alambagh',
      place: '1689 places'
    },
    {
      city: 'Charbagh',
      place: '1689 places'
    },
    {
      city: 'Alambagh',
      place: '1689 places'
    },
    {
      city: 'Charbagh',
      place: '1689 places'
    },
    {
      city: 'Jankipuram',
      place: '1689 places'
    }
  ]

  const { city } = useParams();
  console.log(city);
  const [activeRadio, setActiveRadio] = useState('email');
  const [hiddenList, setHiddenList] = useState('hidden');

  const handleList = () => {
    if (hiddenList === 'hidden') {
      setHiddenList('block');
    }
    else {
      setHiddenList('hidden');
    }
  }


  return (
    <>
      <HeaderThird city={city} />

      <Section className='max-w-screen-xl mx-auto flex p-4 sm:p-6 md:p-10'>
        <HomeCard cardData={cardData} city={city} />
      </Section>

      <CollectionComponent city={city} />

      <section className='py-10'>
        <div className='max-w-screen-xl mx-auto px-4 py-8 sm:px-6 md:p-10'>
          <p className='text-2xl mb-6 md:text-4xl md:mb-10'>Popular localites in and around <span className='font-semibold capitalize'>{city}</span>  </p>
          <div>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6 lg:gap-y-8'>
              {
                cityTowns.map((cityTown, index) => {
                  if (index !== cityTowns.length - 1 && index < 8) {
                    return (
                      <div key={index}>
                        <Link to={'/' + city + '/' + cityTown.city.toLowerCase()} className="flex border items-center justify-between p-3 text-base font-medium text-black rounded-lg bg-gray-50 shadow-md hover:shadow-xl">
                          {/* <span className="w-full text-xl font-normal text-black">{city} Restaurants</span> */}
                          <div>
                            <p className='text-xl font-normal'>{cityTown.city} </p>
                            <p className='font-light'>{cityTown.place} </p>
                          </div>
                          <svg
                            className="text-gray-500 w-4 h-4 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                      </div>
                    )
                  }
                  else if (index === cityTowns.length - 1) {
                    return (
                      <div key={index} onClick={handleList} className={hiddenList === 'hidden' ? `flex border justify-center items-center p-3 text-base font-medium text-black rounded-lg bg-gray-50 shadow-md hover:shadow-xl` : ` border justify-center items-center p-3 text-base font-medium text-black rounded-lg bg-gray-50 shadow-md hover:shadow-xl hidden`} >
                        <p className='text-xl font-medium'> {hiddenList === 'hidden' ? 'see more' : 'see less'} </p>
                      </div>
                    )
                  }
                  else {
                    return (
                      <div key={index} className={hiddenList}>
                        <Link to={'/' + city + '/' + cityTown.city.toLowerCase()} className="flex border items-center justify-between p-3 text-base font-medium text-black rounded-lg bg-gray-50 shadow-md hover:shadow-xl">
                          {/* <span className="w-full text-xl font-normal text-black">{city} Restaurants</span> */}
                          <div>
                            <p className='text-xl font-normal'>{cityTown.city} </p>
                            <p className='font-light'>{cityTown.place} </p>
                          </div>
                          <svg
                            className="text-gray-500 w-4 h-4 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </section>

      <section className='my-10 bg-[#FFFBF7] '>
        <div className='mx-auto flex max-w-screen-md flex-col items-center gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-end md:py-10'>
          <img alt='image' className='h-40 w-40 shrink-0 object-contain sm:h-52 sm:w-52 md:h-[250px] md:w-[250px]' src='https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png' />
          <div className='flex w-full min-w-0 flex-col gap-4 px-1 sm:px-5'>
            <p className='text-3xl sm:text-4xl md:text-5xl'>Get the Zomato app</p>
            <p className='text-lg font-light'>We will send you a link, open it on your phone to download the app</p>
            <div className='flex items-center justify-start gap-8 sm:gap-12'>
              <div className='flex items-center gap-2'>
                <input type='radio' value='email' onChange={() => setActiveRadio('email')} id='Email' className='text-red-500' name='radio-input' />
                <label>Email</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type='radio' value='phone' onChange={() => setActiveRadio('phone')} id='phone' className='text-red-500' name='radio-input' />
                <label>Phone</label>
              </div>
            </div>
            <div className='flex flex-col gap-2 sm:flex-row sm:justify-evenly'>
              {/* <input type='email' className='flex-1 rounded outline-none border border-gray-300 p-2.5 placeholder:text-gray-400'  placeholder='Email' /> */}
              {/* <input type='email' className='flex-1 rounded outline-none border border-gray-300 p-2.5 placeholder:text-gray-400'  placeholder='Phone' /> */}

              {
                activeRadio === 'email' ? <input type='email' className='min-w-0 flex-1 rounded border border-gray-300 p-2.5 outline-none placeholder:text-gray-400' placeholder='Email' /> : <input type='number' className='min-w-0 flex-1 rounded border border-gray-300 p-2.5 outline-none placeholder:text-gray-400' placeholder='Phone' />
              }
              <button className='rounded-md bg-[#EF4F5F] px-4 py-2 text-white hover:bg-red-700 sm:px-6'>Share App Link</button>
            </div>
            <p className='text-[#9C9C9C]'>Download app from</p>
            <div className='flex flex-wrap gap-3'>
              <img alt='image' className='w-[120px] h-[40px]' src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png' />
              <img alt='image' className='w-[120px] h-[40px]' src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png' />
            </div>
          </div>
        </div>
      </section>

      <ExploreAccordion />

      <Footer />
    </>
  )
}

export default HomePage