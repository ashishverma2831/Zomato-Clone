import React from 'react'
import RestaurantCard from './RestaurantCard'
import FilterButton from './FilterButton'
import Carousel from 'react-multi-carousel'

const Delivery = ({city,town}) => {

  const filters = [
    'Filters', 'Offers', 'Serves Alcohol', 'Open now'
  ]

  const topFoods = [
    {
      image:'https://b.zmtcdn.com/data/o2_assets/37df381734b24f138af4a84fd7e4d4ec1716558578.jpeg',
      name: 'Biryani'
    },
    {
      image:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
      name:'Pizza'
    },
    {
      image:'https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png',
      name:'Fried Rice'
    },
    {
      image:'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
      name:'Chicken'
    },
    {
      image:'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
      name:'Burger'
    },
    {
      image:'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
      name:'Rolls'
    },
    {
      image:'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png',
      name:'Noodles'
    },
    {
      image:'https://b.zmtcdn.com/data/o2_assets/e1b5ebed94e25d832f8dea96824537521678798686.png',
      name:'South Indian'
    },
    {
      image:'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png',
      name:'Sandwich'
    },
    {
      image:'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',
      name:'Thali'
    },
    {
      image:'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png',
      name:'Cake'
    },
    {
      image:'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png',
      name:'Dosa'
    }
  ]

  const topBrands = [
    {
      image:'https://b.zmtcdn.com/data/brand_creatives/logos/0956194de2534812e820317cd4b0ccd3_1630505693.png',
      title:'Dindigul Thalappakatti'
    },
    {
      image:'https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643984189.png',
      title:"McDonald's"
    },
    {
      image:'https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520744.png',
      title:'Subway'
    },
    {
      image:'https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389397.png',
      title:'WOW! Momo'
    },
    {
      image:'https://b.zmtcdn.com/data/brand_creatives/logos/2bfed94497ccfa09dc906b27dee6ab0a_1615965815.png',
      title:'Chai Waale'
    },
    {
      image:'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187803.png',
      title:'Burger King'
    },
    {
      image:'https://b.zmtcdn.com/data/brand_creatives/logos/2ae23d0091dd3302dc0f812529d2551f_1667625990.png',
      title:'Chai Kings'
    },
    {
      image:'https://b.zmtcdn.com/data/brand_creatives/logos/ef78cabd2e390624c06e4433f85469e0_1629443482.png',
      title:'The Red Box'
    }
  ]

  return (
    <>

      <section className='border-t'>
        <div className='bg-white max-w-screen-xl flex flex-wrap gap-4 px-10 mx-auto p-6'>
          {
            filters.map((filter, index) => (
              <FilterButton key={index} text={filter} />
            ))
          }
        </div>
      </section>

      <section className='bg-gray-100 py-6 px-8'>
        <div className='max-w-screen-xl bg-blue px-10 mx-auto '>
          <p className='text-4xl mb-4 font-normal'>Inspiration for your first order</p>
          <Carousel
            className=' bg-gray-100'
            autoPlay={false}
            autoPlaySpeed={4000}
            containerClass="container-with-dots"
            dotListClass="react-multi-carousel-dot-list"
            draggable={true}
            infinite={false}
            renderButtonGroupOutside={true}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 6,
                partialVisibilityGutter: 40
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 512
                },
                items: 4,
                partialVisibilityGutter: 30
              },
              mobile: {
                breakpoint: {
                  max: 512,
                  min: 0
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            customLeftArrow={<button className='hover:bg-gray-100 border border-gray-400 shadow-2xl text-gray-900 font-bold text-xl flex justify-center absolute w-8 left-0 -translate-x-1 bg-white h-8 mx-1 rounded-full'>{'<'}</button>}
            customRightArrow={<button className='hover:bg-gray-100  border border-gray-400 shadow-2xl text-gray-900 font-bold text-xl flex justify-center absolute right-0 translate-x-1 bg-white w-8 h-8 mx-1 rounded-full'>{'>'}</button>}
            customDot={<button className='bg-gray-400/50 w-2 h-2 mx-1 my-5 rounded-full'></button>}
            rewind={false}
            rewindWithAnimation={false}
            shouldResetAutoplay={true}
            showDots={false}
            slidesToSlide={1}
            swipeable={true}
          >

            {
             topFoods.map((card,index)=>{
              return(
                <div key={index} className=' flex bg-gray-100 p-5 flex-col gap-2'>
                  <img className='rounded-full  w-[150px] h-[150px] cursor-pointer' src={card.image} alt='food' />
                  <p className='text-xl text-center font-normal'>{card.name}</p>
                </div>
              )
             }) 
            }
          </Carousel>
        </div>
      </section>

      <section className='bg-white py-6 px-8'>
        <div className='max-w-screen-xl bg-blue px-10 mx-auto '>
          <p className='text-4xl mb-4 font-normal'>Top brands for you</p>
          <Carousel
            className=''
            autoPlay={false}
            autoPlaySpeed={4000}
            containerClass="container-with-dots"
            dotListClass="react-multi-carousel-dot-list"
            draggable={true}
            infinite={false}
            renderButtonGroupOutside={true}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 6,
                partialVisibilityGutter: 40
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 512
                },
                items: 4,
                partialVisibilityGutter: 30
              },
              mobile: {
                breakpoint: {
                  max: 512,
                  min: 0
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            customLeftArrow={<button className='hover:bg-gray-100 border border-gray-400 shadow-2xl text-gray-900 font-bold text-xl flex justify-center absolute w-8 left-0 -translate-x-1 bg-white h-8 mx-1 rounded-full'>{'<'}</button>}
            customRightArrow={<button className='hover:bg-gray-100  border border-gray-400 shadow-2xl text-gray-900 font-bold text-xl flex justify-center absolute right-0 translate-x-1 bg-white w-8 h-8 mx-1 rounded-full'>{'>'}</button>}
            customDot={<button className='bg-gray-400/50 w-2 h-2 mx-1 my-5 rounded-full'></button>}
            rewind={false}
            rewindWithAnimation={false}
            shouldResetAutoplay={true}
            showDots={false}
            slidesToSlide={1}
            swipeable={true}
          >

            {
             topBrands.map((card,index)=>{
              return(
                <div key={index} className='flex p-5 flex-col items-center gap-1'>
                  <img className='rounded-full w-[150px] h-[150px] cursor-pointer shadow-xl' src={card.image} alt='food' />
                  <p className='text-lg text-center font-normal mt-1'>{card.title}</p>
                  <p className='text-md text-center text-gray-500 font-normal'>26 min</p>
                </div>
              )
             }) 
            }
          </Carousel>
        </div>
      </section>

      <section>
        <div className='py-5 px-10 max-w-screen-xl mx-auto '>
          <p className='px-2 text-4xl font-normal'>Food Delivery Restaurants in T. Nagar</p>
          <div className='flex flex-wrap py-5 gap-2 md:gap-6'>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Delivery