import React from 'react'
import HeaderFourth from '../components/HeaderFourth'
import ExploreAccordion from '../components/ExploreAccordion'
import Footer from '../components/Footer'
import { Link, useParams} from 'react-router-dom'
import { useState } from 'react'

const Collections = () => {

    const { city } = useParams();
    const [activeTab, setActiveTab] = useState("handpicked-collections");
  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

    return (
        <>
            <HeaderFourth />
            <section className='border-t'>
                <div className='mx-auto max-w-screen-lg px-4 py-4 sm:px-5'>
                    <p className='text-gray-500 text-sm'>
                        <Link to={'/' + city} className='capitalize hover:text-red-600'> Home / </Link>
                        <Link to={'/' + city} className='capitalize hover:text-red-600'>{city} / </Link>
                        <span className='capitalize text-gray-400'>Collections</span>
                    </p>
                </div>
            </section>

            <section>
                <div className='mx-auto max-w-screen-xl px-4 py-5 sm:px-6'>
                    <p className='text-2xl sm:text-3xl'>Collections - <span className='capitalize'>{city}</span></p>
                    <p className='text-base font-normal text-gray-500 sm:text-lg'>Create and browse lists of the finest restaurants</p>
                </div>
                <main className='mx-auto max-w-screen-xl bg-white px-4 sm:px-6'>
                    <div className='flex max-w-screen-xl flex-nowrap overflow-x-auto border-b-2'>
                        <div onClick={() => { handleTabs("handpicked-collections") }} className={activeTab === "handpicked-collections" ? 'flex shrink-0 items-center gap-2 border-b-2 border-b-red-500 px-3 py-3 text-base font-normal text-red-500 sm:p-4 sm:text-xl' : 'flex shrink-0 cursor-pointer items-center gap-2 px-3 py-3 text-base font-normal text-gray-500 sm:p-4 sm:text-xl'}>  Handpicked </div>
                        <div onClick={() => { handleTabs("saved-collections") }} className={activeTab === "saved-collections" ? 'flex shrink-0 items-center gap-2 border-b-2 border-b-red-500 px-3 py-3 text-base font-normal text-red-500 sm:p-4 sm:text-xl' : 'flex shrink-0 cursor-pointer items-center gap-2 px-3 py-3 text-base font-normal text-gray-500 sm:p-4 sm:text-xl'}> Saved Collections </div>
                    </div>
                    {
                        activeTab === "handpicked-collections" ? 
                        <div className='grid grid-cols-1 gap-x-3 gap-y-4 py-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4'>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                            <div className=' mx-2 cursor-pointer h-[300px] flex flex-col text-xl rounded-lg items-start text-white p-5 justify-end bg-center bg-cover bg-[url(https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*)]'>
                                <p>Best insta-worthy places</p>
                                <p>9 places <i className="text-sm mx-2 fa-solid fa-play"></i></p>
                            </div>
                        </div>  : 
                        <div className='p-5'>
                            <div className='flex flex-col items-center justify-center gap-6 py-8 sm:gap-8 sm:py-10'>
                                <img className='w-full max-w-[360px]' src='https://b.zmtcdn.com/webFrontend/3f23e42e880731a30472723e77825f431575972761.png' alt='photo' />
                                <p className='text-center text-2xl font-normal sm:text-3xl'>Save collections you love!
                                    <br />
                                They'll appear here.</p>
                            </div>
                        </div>
                    }
                </main>
            </section>

            <ExploreAccordion />
            <Footer />
        </>
    )
}

export default Collections