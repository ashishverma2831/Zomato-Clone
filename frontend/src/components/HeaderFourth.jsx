import React, { useState } from 'react'
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';

const HeaderFourth = () => {

    const [sidebar, setSidebar] = useState(false);
    const [SignUpModal, setSignUpModal] = useState(false)
    const [LogInModal, setLogInModal] = useState(false)

    return (
        <>
            <header>
                {
                    sidebar ? (<div className='h-[100vh] p-5 absolute md:z-[-1] w-64 bg-gray-300'>
                        <p className='text-2xl font-semibold mb-10 cursor-pointer' onClick={() => { setSidebar(!sidebar) }}>X</p>
                        <div className='flex flex-col w-[200px] gap-4'>
                            <button
                                data-modal-target="authentication-modal"
                                data-modal-toggle="authentication-modal"
                                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white"
                                type="button"
                                onClick={() => {
                                    setLogInModal(true)
                                }}
                            >
                                Log in
                            </button>
                            {LogInModal ? <LogIn modalId="authentication-modal" closeFunc={() => { setLogInModal(false) }} func={() => {
                                setLogInModal(false)
                                setSignUpModal(true)
                            }} /> : <></>}
                            <button
                                data-modal-target="authentication-modal-4"
                                data-modal-toggle="authentication-modal-4"
                                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-white"
                                type="button"
                                onClick={() => {
                                    setSignUpModal(true)
                                }}
                            >
                                Sign up
                            </button>
                            {SignUpModal ? <SignUp modalId="authentication-modal-4" closeFunc={() => { setSignUpModal(false) }} func={() => {
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
                                <p className='w-7 h-1 rounded bg-slate-800'>  </p>
                                <p className='w-7 h-1 rounded bg-slate-800'>  </p>
                                <p className='w-7 h-1 rounded bg-slate-800'>  </p>
                            </div>
                        </div>
                        <p className='text-4xl bold italic font-extrabold'>Zomato</p>
                        <input type='text' autoFocus={true} placeholder='Search for restaurant, cuisine or a dish' className='w-full hidden md:block shadow-lg py-3 px-4 text-xl my-4 font-normal placeholder-gray-500 border border-gray-200 focus:outline-none outline-none rounded-lg' />
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex w-[200px] justify-between items-center px-5 gap-2'>
                            {/* <p className='text-lg text-gray-500 hover:text-gray-700'>Log in</p>
                            <p className='text-lg text-gray-500 hover:text-gray-700'>Sign up</p> */}
                            <button
                                data-modal-target="authentication-modal"
                                data-modal-toggle="authentication-modal"
                                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white"
                                type="button"
                                onClick={() => {
                                    setLogInModal(true)
                                }}
                            >
                                Log in
                            </button>
                            {LogInModal ? <LogIn modalId="authentication-modal" closeFunc={() => { setLogInModal(false) }} func={() => {
                                setLogInModal(false)
                                setSignUpModal(true)
                            }} /> : <></>}
                            <button
                                data-modal-target="authentication-modal-4"
                                data-modal-toggle="authentication-modal-4"
                                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-white"
                                type="button"
                                onClick={() => {
                                    setSignUpModal(true)
                                }}
                            >
                                Sign up
                            </button>
                            {SignUpModal ? <SignUp modalId="authentication-modal-4" closeFunc={() => { setSignUpModal(false) }} func={() => {
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