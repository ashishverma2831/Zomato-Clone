import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import '../App.css'

const SliderOne = () => {

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };

  const data = [
    {
      title: 'Listings',
      description: 'A free app that allows you to manage your Zomato listing directly from your smartphone',
      image: 'https://b.zmtcdn.com/merchant-onboarding/be4f70ca22a3b31a84b3cf8ed811f0281600769259.png'
    },
    {
      title: 'Online Ordering',
      description: 'Start taking orders online from millions of users near you and deliver with Zomato...',
      image: 'https://b.zmtcdn.com/merchant-onboarding/2c7dd621a502cde6f5051fc6d411b8881600769171.png'
    },
    {
      title: 'Advertise',
      description: 'For every marketing dollar spent, Zomato returns over 8x the investment...',
      image: 'https://www.zomato.com/partner-with-us/static/media/ZomatoAdvertise.31195a83.svg'
    },
    {
      title: 'Events',
      description: 'Partner with us for India’s grandest food & entertainment carnival - “Zomaland”...',
      image: 'https://www.zomato.com/partner-with-us/static/media/ZomatoEvent.c3e1f3a8.svg'
    },
    {
      title: 'Hyperpure',
      description: 'Supplies fresh and high quality ingredients to restaurant for serving delicious meals...',
      image: 'https://www.zomato.com/partner-with-us/static/media/Hyperpure.25f37214.svg'
    }
  ]

  return (
    <>
      <div className=' my-5'>
        <div className='max-w-screen-lg mx-auto flex flex-col '>
          <p className='text-4xl text-center mt-5 font-normal'>Our Products</p>
          <Carousel
            className='h-[500px] '
            // additionalTransfrom={0}
            // arrows={false}
            autoPlay={true}
            autoPlaySpeed={2000}
            // centerMode={false}
            containerClass="container-with-dots"
            dotListClass="react-multi-carousel-dot-list"
            draggable={true}
            // focusOnSelect={false}
            infinite={true}
            // itemClass=""
            // keyBoardControl
            // minimumTouchDrag={80}
            // pauseOnHover
            // renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={true}
            // renderDotsOutside={true}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 512
                },
                items: 2,
                partialVisibilityGutter: 30
              },
              mobile: {
                breakpoint: {
                  max: 512,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              }
            }}
            customLeftArrow={<button className='hover:bg-gray-100 text-gray-900 font-bold text-2xl flex justify-center shadow-xl absolute w-10 left-0 -translate-x-1 bg-white h-10 mx-1 rounded-full'>{'<'}</button>}
            customRightArrow={<button className='hover:bg-gray-100 text-gray-900 font-bold text-2xl flex justify-center shadow-xl absolute right-0 translate-x-1 bg-white w-10 h-10 mx-1 rounded-full'>{'>'}</button>}
            customDot={<button className='bg-gray-400/50 w-3 h-3 mx-1 my-5 rounded-full'></button>}
            rewind={true}
            rewindWithAnimation={true}
            rtl={false}
            shouldResetAutoplay={true}
            showDots={true}
            // renderDotsOutside={true}
            // sliderClass=""
            slidesToSlide={1}
            swipeable={true}
          >

            {/* <div className='w-[300px] bg-gray-50 my-5 shadow-lg rounded-lg'>
              <img className='bg-contain w-full' src={'https://www.zomato.com/partner-with-us/static/media/ZomatoEvent.c3e1f3a8.svg'} />
              <div className=' flex flex-col gap-2 p-4'>
                <p className='text-2xl font-semibold'>Events</p>
                <p className='text-lg font-normal text-gray-700'>Partner with us for India’s grandest food & entertainment carnival - “Zomaland”...</p>
                <Link className='text-xl text-blue-500 font-normal'>Learn More </Link>
              </div>
            </div> */}

            {
              data.map((card) => {
                return (
                  <div className='w-[300px] bg-gray-50 my-5 shadow-lg rounded-lg mx-auto'>
                    <img className='bg-contain w-full' src={card.image} />
                    <div className=' flex flex-col gap-2 p-4'>
                      <p className='text-2xl font-semibold'>{card.title}</p>
                      <p className='text-lg font-normal text-gray-700'> {card.description} </p>
                      <Link title='learn more' className='text-xl text-blue-500 font-normal'>Learn More </Link>
                    </div>
                  </div>
                );
              })
            }
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default SliderOne