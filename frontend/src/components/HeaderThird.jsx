import { React, useState } from 'react';
import 'flowbite';
import { NavLink } from 'react-router-dom';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';
import LocationSearchInput from './LocationSearchInput';



const HeaderThird = ({city}) => {

    const [SignUpModal, setSignUpModal] = useState(false)
    const [LogInModal, setLogInModal] = useState(false)

    return (
        <>
            <header className='bg-[url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")] h-[420px] bg-no-repeat bg-center bg-cover'>
                <nav className=" border-gray-200 ">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-xl font-normal">
                                <li>
                                    <NavLink
                                        to="/partner-with-us"
                                        className="block py-2 px-3 rounded md:bg-transparent  md:p-0 text-white"
                                        aria-current="page"
                                    >
                                        Add restaurant
                                    </NavLink>
                                </li>
                                <li>
                                    <div>
                                        <button
                                            className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-white"
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
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <button
                                            className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-white"
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
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-end md:hidden">
                            <button
                                className="font-medium rounded-lg text-sm px-5 py-2 mb-4  focus:outline-none text-white"
                                type="button"
                                data-drawer-target="drawer-navigation"
                                data-drawer-show="drawer-navigation"
                                aria-controls="drawer-navigation"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            id="drawer-navigation"
                            className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 "
                            tabIndex={-1}
                            aria-labelledby="drawer-navigation-label"
                        >
                            <h5
                                id="drawer-navigation-label"
                                className="font-bold  uppercase text-4xl italic"
                            >
                                Zomato
                            </h5>
                            <button
                                type="button"
                                data-drawer-hide="drawer-navigation"
                                aria-controls="drawer-navigation"
                                className=" bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
                            >
                                <svg
                                    className="w-3 h-3 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only ">Close menu</span>
                            </button>
                            <div className="py-4 overflow-y-auto">
                                <ul className="space-y-2 font-medium">
                                    <li>
                                        <NavLink
                                            to={"partner-with-us"}
                                            className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group mt-4"
                                        >
                                            <span className=" text-gray-500 font-normal ">Add restaurant</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <button
                                            className="block p-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 font-normal  md:p-0 w-full text-left text-gray-500"
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
                                    </li>
                                    <li>
                                        <button
                                            className="block p-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 font-normal md:p-0 w-full text-left text-gray-500"
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
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className=' flex justify-center items-center '>
                    <div className=' w-full  md:max-w-screen-md mx-auto p-5 my-10 '>
                        <h1 className='text-white text-7xl italic font-bold text-center sm:my-4'>Zomato</h1>
                        <p className='text-white text-4xl font-normal text-center my-4'>Discover the best food & drinks in <span className='capitalize'>{city}</span> </p>
                        <input type='text' autoFocus={true} placeholder='Search for restaurant, cuisine or a dish' className=' w-full py-3 px-4 text-xl my-4 font-normal placeholder-gray-500 border-0 focus:outline-none focus:border-0  rounded-lg' />
                        {/* <LocationSearchInput /> */}
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderThird