import React, { useState } from 'react'
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';
import { Link } from 'react-router-dom';

const HeaderFourth = ({city,town}) => {

    const [sidebar, setSidebar] = useState(false);
    const [SignUpModal, setSignUpModal] = useState(false)
    const [LogInModal, setLogInModal] = useState(false)

    return (
        <>
            <header>
                {
                    sidebar ? (<div className='fixed top-0 left-0 z-40 h-screen p-5 md:z-[-1] block md:hidden w-full bg-white'>
                        <div className='flex justify-between items-center mb-10'>
                            <p className='text-4xl font-normal cursor-pointer' onClick={() => { setSidebar(!sidebar) }}>
                                <span className=''>
                                    <p className='w-6 h-[3px] translate-y-1/2 rotate-45 rounded bg-slate-800'>  </p>
                                    <p className='w-6 h-[3px] -translate-y-1/2 rounded -rotate-45 bg-slate-800'>  </p>
                                </span>
                            </p>
                            <p className='text-4xl bold italic font-extrabold'>Zomato</p>
                        </div>
                        <div className='flex flex-col w-[200px] gap-4'>
                            <button
                                className="w-full text-left p-2 text-gray-500 hover:text-gray-800 text-lg"
                                type="button"
                                onClick={() => {
                                    setLogInModal(true)
                                }}
                            >
                                Log in
                            </button>
                            {LogInModal ? <LogIn closeFunc={() => { setLogInModal(false) }} func={() => {
                                setLogInModal(false)
                                setSignUpModal(true)
                            }} /> : <></>}
                            <button
                                className="w-full text-left p-2 text-gray-500 hover:text-gray-800 text-lg"
                                type="button"
                                onClick={() => {
                                    setSignUpModal(true)
                                }}
                            >
                                Sign up
                            </button>
                            {SignUpModal ? <SignUp closeFunc={() => { setSignUpModal(false) }} func={() => {
                                setSignUpModal(false)
                                setLogInModal(true)
                            }} /> : <></>}
                        </div>
                    </div>) : (null)
                }
                <div className='max-w-screen-lg gap-4 mx-auto justify-between items-center flex '>
                    <div className='flex flex-1 gap-4 justify-between items-center p-5 md:py-0'>
                        <div className='block md:hidden cursor-pointer' onClick={() => { setSidebar(!sidebar) }}>
                            <div className='flex flex-col gap-1'>
                                <p className='w-6 h-[3px] rounded bg-slate-800'>  </p>
                                <p className='w-6 h-[3px] rounded bg-slate-800'>  </p>
                                <p className='w-6 h-[3px] rounded bg-slate-800'>  </p>
                            </div>
                        </div>
                        <Link to={'/'+city+'/'+town} className='text-4xl bold italic font-extrabold'>Zomato</Link>
                        <input type='text' autoFocus={true} placeholder='Search for restaurant, cuisine or a dish' className='w-full hidden md:block shadow-lg py-3 px-4 text-xl my-4 font-normal placeholder-gray-500 border border-gray-200 focus:outline-none outline-none rounded-lg' />
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex w-[200px] justify-between items-center px-5 gap-4'>
                            {/* <p className='text-lg text-gray-500 hover:text-gray-700'>Log in</p>
                            <p className='text-lg text-gray-500 hover:text-gray-700'>Sign up</p> */}
                            <button
                                className="hover:text-gray-800 p-2 text-lg text-gray-500"
                                type="button"
                                onClick={() => {
                                    setLogInModal(true)
                                }}
                            >
                                Log in
                            </button>
                            {LogInModal ? <LogIn closeFunc={() => { setLogInModal(false) }} func={() => {
                                setLogInModal(false)
                                setSignUpModal(true)
                            }} /> : <></>}
                            <button
                                className="hover:text-gray-800 p-2 text-lg text-gray-500"
                                type="button"
                                onClick={() => {
                                    setSignUpModal(true)
                                }}
                            >
                                Sign up
                            </button>
                            {SignUpModal ? <SignUp closeFunc={() => { setSignUpModal(false) }} func={() => {
                                setSignUpModal(false)
                                setLogInModal(true)
                            }} /> : <></>}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderFourth