import React, { useEffect, useState } from 'react'
import HomeCard from '../components/HomeCard'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link, useParams } from 'react-router-dom';
import HeaderThird from '../components/HeaderThird';

const Section = styled.section`
  display:flex;
  justify-content: space-evenly;
  gap:20px;
  flex-wrap: wrap;
  `;


const HomePage = () => {

  const popularCuisines = [
    'Bakery food near me', 'Beverages food near me', 'Biryani food near me', 'Burger food near me', 'Chinese food near me', 'Continental food near me', 'Desserts food near me', 'Ice Cream food near me', 'Italian food near me', 'Mithai food near me', 'Momos food near me', 'Mughlai food near me', 'North Indian food near me', 'Pizza food near me', 'Rolls food near me', 'Sandwich food near me', 'Shake food near me', 'South Indian food near me', 'Street food near me', 'Tea food near me'
  ]
  const popularRestuarants = [
    'Bakeries near me', 'Bars near me', 'Beverage Shops near me', 'Bhojanalya near me', 'Cafés near me', 'Casual Dining near me', 'Clubs near me', 'Cocktail Bars near me', 'Dessert Parlors near me', 'Dhabas near me', 'Fine Dining near me', 'Food Courts near me', 'Food Trucks near me', 'Kiosks near me', 'Lounges near me', 'Microbreweries near me', 'Paan Shop near me', 'Quick Bites near me', 'Sweet Shops near me'
  ]
  const topRestuarants = [
    'Bikanervala', 'Biryani Blues', 'Burger King', 'Burger Singh', 'Haldiram', 'KFC', 'McDonald', 'Pizza Hut', 'Sagar Ratna', 'WOW! Momo'
  ]
  const cities = [
    'Delhi NCR,', 'Kolkata', 'Mumbai', 'Bengaluru', 'Pune', 'Hyderabad', 'Chennai', 'Lucknow', 'Kochi', 'Jaipur', 'Ahmedabad', 'Chandigarh', 'Goa', 'Indore', 'Gangtok,', 'Nashik', 'Ooty', 'Shimla', 'Ludhiana', 'Guwahati', 'Amritsar', 'Kanpur', 'Allahabad', 'Aurangabad', 'Bhopal', 'Ranchi', 'Visakhapatnam', 'Bhubaneswar', 'Coimbatore', 'Mangalore', 'Vadodara', 'Nagpur', 'Agra', 'Dehradun', 'Mysore', 'Puducherry', 'Surat', 'Varanasi', 'Patna', 'Udaipur', 'Srinagar', 'Khajuraho', 'Neemrana', 'Cuttack', 'Trivandrum', 'Haridwar', 'Leh', 'Pushkar', 'Rajkot', 'Madurai', 'Kozhikode', 'Alappuzha', 'Thrissur', 'Manipal', 'Vijayawada', 'Jodhpur', 'Kota', 'Ajmer', 'Mussoorie', 'Rishikesh', 'Jalandhar', 'Jammu', 'Manali'
  ]
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

  const LucknowCities = [
    {
      city: 'Gomti Nagar',
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
      city: 'Indira Nagar',
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
      city: 'Gomti Nagar',
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
      city: 'Indira Nagar',
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

  const selectedCity = useParams().city;
  console.log(selectedCity);
  const [activeRadio, setActiveRadio] = useState('email');
  const [hiddenList, setHiddenList] = useState('hidden');

  const handleList = ()=>{
    if(hiddenList === 'hidden'){
      setHiddenList('block');
    }
    else{
      setHiddenList('hidden');
    }
  }

  // useEffect(() => {
  //   window.location.reload();
  // }, [setTimeout(1000)])

  // setTimeout(() => {
  //   window.location.reload();
  // }, 1000)
  

  return (
    <>
      <HeaderThird />

      <Section className='max-w-screen-xl mx-auto p-10'>
        <HomeCard cardData={cardData} />
      </Section>

      <Section className='max-w-screen-xl mx-auto p-10'>
        <div className='w-full'>
          <p className='text-4xl text-left px-3'>Collections</p>
          <div className='flex justify-between p-3'>
            <p className='text-xl text-gray-500'>Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends</p>
            <p className='flex justify-between'><button className='text-red-500 text-xl'>All collections in Lucknow <i className="text-sm mx-2 fa-solid fa-play"></i></button></p>
          </div>
          <div className='p-3 flex gap-4 justify-evenly flex-wrap'>
            <div className='flex-1 h-[360px] min-w-[240px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
              <p>Best insta-worthy places</p>
              <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
            </div>
            <div className='flex-1 h-[360px] min-w-[240px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
              <p>Best insta-worthy places</p>
              <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
            </div>
            <div className='flex-1 h-[360px] min-w-[240px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
              <p>Best insta-worthy places</p>
              <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
            </div>
            <div className='flex-1 h-[360px] min-w-[240px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
              <p>Best insta-worthy places</p>
              <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
            </div>
          </div>
        </div>
      </Section>

      <section className='py-10'>
        <div className='max-w-screen-xl mx-auto p-10'>
          <p className='text-4xl mb-10'>Popular localites in and around <span className='font-semibold capitalize'>{selectedCity}</span>  </p>
          <div>
            <div className=' grid grid-cols-3 gap-6 gap-y-8'>
              {
                LucknowCities.map((city,index) => {
                  if(index!==LucknowCities.length-1 && index<8){
                    return (
                      <div key={index}>
                      <Link to={'/' + city} className="flex border items-center justify-between p-3 text-base font-medium text-black rounded-lg bg-gray-50 shadow-md hover:shadow-xl">
                        {/* <span className="w-full text-xl font-normal text-black">{city} Restaurants</span> */}
                        <div>
                          <p className='text-xl font-normal'>{city.city} </p>
                          <p className='font-light'>{city.place} </p>
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
                  else if(index===LucknowCities.length-1){
                    return (
                      <div onClick={handleList} className={ hiddenList === 'hidden'? `flex border justify-center items-center p-3 text-base font-medium text-black rounded-lg bg-gray-50 shadow-md hover:shadow-xl` :` border justify-center items-center p-3 text-base font-medium text-black rounded-lg bg-gray-50 shadow-md hover:shadow-xl hidden`} >
                        <p className='text-xl font-medium'> {hiddenList==='hidden'?'see more':'see less'} </p>
                      </div>
                    )
                  }
                  else{
                    return (
                      <div key={index} className={hiddenList}>
                      <Link to={'/' + city} className="flex border items-center justify-between p-3 text-base font-medium text-black rounded-lg bg-gray-50 shadow-md hover:shadow-xl">
                        {/* <span className="w-full text-xl font-normal text-black">{city} Restaurants</span> */}
                        <div>
                          <p className='text-xl font-normal'>{city.city} </p>
                          <p className='font-light'>{city.place} </p>
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
        <div className='py-10 max-w-screen-md w-30 mx-auto flex sm:flex-row flex-col items-center px-5 gap-4 sm:items-end '>
          <img alt='image' className=' w-[250px] h-[250px]' src='https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png' />
          <div className='flex px-5 flex-col gap-4 min-w-[400px]'>
            <p className='text-5xl '>Get the Zomato app</p>
            <p className='text-lg font-light'>We will send you a link, open it on your phone to download the app</p>
            <div className=' flex items-center justify-start gap-12'>
              <div className='flex items-center gap-2'>
                <input type='radio' value='email' onChange={() => setActiveRadio('email')} id='Email' className='text-red-500' name='radio-input' />
                <label>Email</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type='radio' value='phone' onChange={() => setActiveRadio('phone')} id='phone' className='text-red-500' name='radio-input' />
                <label>Phone</label>
              </div>
            </div>
            <div className='flex gap-2 justify-evenly'>
              {/* <input type='email' className='flex-1 rounded outline-none border border-gray-300 p-2.5 placeholder:text-gray-400'  placeholder='Email' /> */}
              {/* <input type='email' className='flex-1 rounded outline-none border border-gray-300 p-2.5 placeholder:text-gray-400'  placeholder='Phone' /> */}

              {
                activeRadio === 'email' ? <input type='email' className='flex-1 rounded outline-none border border-gray-300 p-2.5 placeholder:text-gray-400' placeholder='Email' /> : <input type='number' className='flex-1 rounded outline-none border border-gray-300 p-2.5 placeholder:text-gray-400' placeholder='Phone' />
              }
              <button className='bg-[#EF4F5F] rounded-md hover:bg-red-700 text-white px-6'>Share App Link</button>
            </div>
            <p className='text-[#9C9C9C]'>Download app from</p>
            <div className='flex gap-4'>
              <img alt='image' className='w-[120px] h-[40px]' src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png' />
              <img alt='image' className='w-[120px] h-[40px]' src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png' />
            </div>
          </div>
        </div>
      </section>

      <section className='py-10 text-center'>
        <p className='text-4xl mx-auto max-w-screen-xl px-12 text-left '>Explore options near me</p>
        <div className='max-w-screen-xl px-10 text-center mx-auto my-10'>

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
                <span> Popular cuisines near me</span>
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
                  {
                    popularCuisines.map((cuisine, index) => {
                      if (index !== popularCuisines.length - 1) {
                        return (<span key={index}>
                          <span className='text-gray-500 hover:text-gray-700 cursor-pointer'> {cuisine} </span>
                          <span className='text-gray-500 mx-1 text-xl'> . </span>
                        </span>
                        )
                      } else {
                        return (<span key={index}>
                          <span className='text-gray-500 hover:text-gray-700 cursor-pointer'> {cuisine} </span>
                        </span>
                        )
                      }
                    })
                  }
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
                <span> Popular restaurant types near me </span>
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
                  {
                    popularRestuarants.map((restaurant, index) => {
                      if (index !== popularRestuarants.length - 1) {
                        return (<span key={index}>
                          <span className='text-gray-500 hover:text-gray-700 cursor-pointer'> {restaurant} </span>
                          <span className='text-gray-500 mx-1 text-xl'> . </span>
                        </span>
                        )
                      } else {
                        return (<span key={index}>
                          <span className='text-gray-500 hover:text-gray-700 cursor-pointer'> {restaurant} </span>
                        </span>
                        )
                      }
                    })
                  }
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
                <span> Top Restaurant Chains</span>
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
                <p className=" text-gray-500 text-left flex justify-evenly gap-4 flex-wrap">
                  {
                    topRestuarants.map((restaurant, index) => {
                      return (
                        <span key={index} className='min-w-[100px] md:min-w-[200px] text-gray-500 hover:text-gray-700 cursor-pointer'> {restaurant} </span>
                      )
                    })
                  }
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
                <span> Cities We Deliver To </span>
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
              <div className="p-5 border-gray-200 ">
                <p className=" text-gray-500 text-left flex justify-center gap-4 flex-wrap">
                  {
                    cities.map((city, index) => {
                      return (
                        <span key={index} className='min-w-[100px] md:min-w-[200px] text-gray-500 hover:text-gray-700 cursor-pointer'> {city} </span>
                      )
                    })
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default HomePage