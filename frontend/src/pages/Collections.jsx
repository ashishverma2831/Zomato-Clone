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
                <div className='max-w-screen-lg mx-auto px-5 py-4 '>
                    <p className='text-gray-500 text-sm'>
                        <Link to={'/' + city} className='capitalize hover:text-red-600'> Home / </Link>
                        <Link to={'/' + city} className='capitalize hover:text-red-600'>{city} / </Link>
                        <span className='capitalize text-gray-400'>Collections</span>
                    </p>
                </div>
            </section>

            <section>
                <div className='max-w-screen-xl mx-auto p-5'>
                    <p className='text-3xl px-8'>Collections - <span className='capitalize'>{city}</span></p>
                    <p className='px-8 text-gray-500 text-lg font-normal'>Create and browse lists of the finest restaurants</p>
                </div>
                <main className='bg-white max-w-screen-xl mx-auto'>
                    <div className='max-w-screen-xl flex flex-wrap mx-auto border-b-2 '>
                        <div onClick={() => { handleTabs("handpicked-collections") }} className={activeTab === "handpicked-collections" ? 'p-4 text-xl text-red-500 font-normal flex items-center gap-2 border-b-red-500 border-b-2' : 'p-4 text-xl cursor-pointer text-gray-500 font-normal flex items-center gap-2'}>  Handpicked </div>
                        <div onClick={() => { handleTabs("saved-collections") }} className={activeTab === "saved-collections" ? 'p-4 text-xl text-red-500 font-normal flex items-center gap-2 border-b-red-500 border-b-2' : 'p-4 text-xl cursor-pointer text-gray-500 font-normal flex items-center gap-2'}> Saved Collections </div>
                    </div>
                    {
                        activeTab === "handpicked-collections" ? 
                        <div className='py-5 gap-y-6 gap-x-2 grid grid-cols-2 md:grid-cols-4'>
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
                            <div className='flex py-10 gap-8 flex-col justify-center items-center'>
                                <img className='w-[360px]' src='https://b.zmtcdn.com/webFrontend/3f23e42e880731a30472723e77825f431575972761.png' alt='photo' />
                                <p className='text-3xl font-normal text-center'>Save collections you love!
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