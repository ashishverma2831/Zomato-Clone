import React from 'react'
import { popularCuisines, popularRestuarants, topRestuarants,cities } from '../data/data';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ExploreAccordion = () => {

    const [accordion, setAccordion] = useState({
        key: 0,
        hidden: false
      });

    return (
        <>
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
                                onClick={() => { setAccordion({ key: 1, hidden: !accordion.hidden }) }}
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
                            key={1}
                            className={`border rounded-lg -translate-y-4 shadow-sm ${accordion.key === 1 && accordion.hidden ? 'block' : 'hidden'}`}
                            id="accordion-flush-body-1"
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
                                onClick={() => { setAccordion({ key: 2, hidden: !accordion.hidden }) }}
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
                            key={2}
                            id="accordion-flush-body-2"
                            className={`border rounded-lg -translate-y-4 shadow-sm ${accordion.key === 2 && accordion.hidden ? 'block' : 'hidden'}`}
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
                                onClick={() => { setAccordion({ key: 3, hidden: !accordion.hidden }) }}
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
                            key={3}
                            id="accordion-flush-body-3"
                            className={`border rounded-lg -translate-y-4 shadow-sm ${accordion.key === 3 && accordion.hidden ? 'block' : 'hidden'}`}
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
                                onClick={() => { setAccordion({ key: 4, hidden: !accordion.hidden }) }}
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
                            key={4}
                            id="accordion-flush-body-4"
                            className={`border rounded-lg -translate-y-4 shadow-sm ${accordion.key === 4 && accordion.hidden ? 'block' : 'hidden'}`}
                            aria-labelledby="accordion-flush-heading-4"
                        >
                            <div className={`p-5 border-gray-200 rounded-lg`}>
                                <p className=" text-gray-500 text-left flex justify-center gap-4 flex-wrap">
                                    {
                                        cities.map((city, index) => {
                                            if(index!==cities.length-1){
                                                return (
                                                    <span key={index} className='min-w-[100px] md:min-w-[200px] text-gray-500 hover:text-gray-700 cursor-pointer'> {city} </span>
                                                )
                                            }
                                            else{
                                                return (
                                                    <Link to={'/delivery-cities'} key={index} className='min-w-[100px] md:min-w-[200px] text-black font-semibold cursor-pointer underline underline-offset-8 '> {city} </Link>
                                                )
                                            }
                                        })
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreAccordion