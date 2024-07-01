import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import RestaurantCard from '../components/RestaurantCard';
import FilterButton from '../components/FilterButton';
import AdvertisementCard from '../components/AdvertisementCard';
import DiningOut from '../components/DiningOut';
import Delivery from '../components/Delivery';
import Nightlife from '../components/Nightlife';
import HeaderFourth from '../components/HeaderFourth';
import { Link, useParams } from 'react-router-dom';
import ExploreAccordion from '../components/ExploreAccordion';

const HomeRestaurants = () => {

  const [activeTab, setActiveTab] = useState("dining");
  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  const { city, town } = useParams();
  
  // useEffect(()=>{
  //   if(activeTab === "dining"){
  //     window.location=`/${city}/dine-out-in-${town}`
  //   }
  //   else if(activeTab === "delivery"){
  //     window.location=`/${city}/delivery-in-${town}`
  //   }
  //   else if(activeTab === "nightlife"){
  //     window.location=`/${city}/nightlife-in-${town}`
  //   }
  // },[activeTab])

  return (
    <>
      <HeaderFourth city={city} town={town} />

      <section>
        <div className='max-w-screen-lg mx-auto px-5 py-4 '>
          <p className='text-gray-500 text-sm'>
            <Link to={'/' + city + '/' + town} className='capitalize hover:text-red-600'> Home / </Link>
            <Link to={'/'} className='capitalize hover:text-red-600'> India /  </Link>
            <Link to={'/' + city} className='capitalize hover:text-red-600'>{city} / </Link>
            <span className='capitalize text-gray-400'>{town}</span>
          </p>
        </div>
      </section>

      <main className='bg-white'>
        <div className='max-w-screen-lg flex flex-wrap mx-auto px-5 '>
          <div onClick={() => { handleTabs("dining") }} className={activeTab === "dining" ? 'p-4 text-xl text-red-500 font-semibold flex items-center gap-2 border-b-red-500 border-b-4' : 'p-4 text-xl cursor-pointer text-red-500 font-semibold flex items-center gap-2'}> <div className='p-4 rounded-full bg-[#E5F3F3]'><img className='h-8 w-8' src={activeTab === "dining" ? 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png' : 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png'} /></div>  Dining Out</div>
          <div onClick={() => { handleTabs("delivery") }} className={activeTab === "delivery" ? 'p-4 text-xl text-red-500 font-semibold flex items-center gap-2 border-b-red-500 border-b-4' : 'p-4 text-xl cursor-pointer text-red-500 font-semibold flex items-center gap-2'}> <div className='p-4 rounded-full bg-[#E5F3F3]'><img className='h-8 w-8' src={activeTab === "delivery" ? 'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png' : 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png'} /></div>  Delivery</div>
          <div onClick={() => { handleTabs("nightlife") }} className={activeTab === "nightlife" ? 'p-4 text-xl text-red-500 font-semibold flex items-center gap-2 border-b-red-500 border-b-4' : 'p-4 text-xl cursor-pointer text-red-500 font-semibold flex items-center gap-2'}> <div className='p-4 rounded-full bg-[#E5F3F3]'><img className='h-8 w-8' src={activeTab === "nightlife" ? 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png' : 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png'} /></div>  Nightlife</div>
        </div>
        {
          activeTab === "dining" ? <DiningOut city={city} town={town} /> : activeTab === "delivery" ? <Delivery city={city} town={town} /> : <Nightlife city={city} town={town}/>
        }
      </main>

      <ExploreAccordion />

      <Footer />
    </>
  )
}

export default HomeRestaurants