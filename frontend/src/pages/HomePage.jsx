import React from 'react'
import HomeCard from '../components/HomeCard'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Header from '../components/Header';

const Section = styled.section`
  display:flex;
  justify-content: space-evenly;
  gap:20px;
  flex-wrap: wrap;
  `;


const HomePage = () => {

  const popularCuisines = [
    'Bakery food near me','Beverages food near me','Biryani food near me','Burger food near me','Chinese food near me','Continental food near me','Desserts food near me','Ice Cream food near me','Italian food near me','Mithai food near me','Momos food near me','Mughlai food near me','North Indian food near me','Pizza food near me','Rolls food near me','Sandwich food near me','Shake food near me','South Indian food near me','Street food near me','Tea food near me'
  ]
  const popularRestuarants = [
    'Bakeries near me','Bars near me','Beverage Shops near me','Bhojanalya near me','Cafés near me','Casual Dining near me','Clubs near me','Cocktail Bars near me','Dessert Parlors near me','Dhabas near me','Fine Dining near me','Food Courts near me','Food Trucks near me','Kiosks near me','Lounges near me','Microbreweries near me','Paan Shop near me','Quick Bites near me','Sweet Shops near me'
  ]
  const topRestuarants = [
    'Bikanervala','Biryani Blues','Burger King','Burger Singh','Haldiram','KFC','McDonald','Pizza Hut','Sagar Ratna','WOW! Momo'
  ]
  const cities = [
    'Delhi NCR,','Kolkata','Mumbai','Bengaluru','Pune','Hyderabad','Chennai','Lucknow','Kochi','Jaipur','Ahmedabad','Chandigarh','Goa','Indore','Gangtok,','Nashik','Ooty','Shimla','Ludhiana','Guwahati','Amritsar','Kanpur','Allahabad','Aurangabad','Bhopal','Ranchi','Visakhapatnam','Bhubaneswar','Coimbatore','Mangalore','Vadodara','Nagpur','Agra','Dehradun','Mysore','Puducherry','Surat','Varanasi','Patna','Udaipur','Srinagar','Khajuraho','Neemrana','Cuttack','Trivandrum','Haridwar','Leh','Pushkar','Rajkot','Madurai','Kozhikode','Alappuzha','Thrissur','Manipal','Vijayawada','Jodhpur','Kota','Ajmer','Mussoorie','Rishikesh','Jalandhar','Jammu','Manali'
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

  return (
    <>
        HomePage

        <Header />

        {/* <Section className='max-w-screen-xl mx-auto p-10'>
          <HomeCard cardData={cardData} />
        </Section> */}

<section className='py-10 text-center'>
        <p className='text-4xl text-left px-5'>Explore options near me</p>
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

        {/* <Footer /> */}
    </>
  )
}

export default HomePage