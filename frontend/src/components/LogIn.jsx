import React from 'react'
import 'flowbite';

export const LogIn = ({modalId, closeFunc, func}) => {
    return (
        <div
            id={modalId}
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
        >
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                        <h3 className="text-3xl font-normal text-gray-700 dark:text-white">
                            Login
                        </h3>
                        <button
                            type="button"
                            className="end-2.5 text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="authentication-modal"
                            onClick={closeFunc}
                        >
                            <svg
                                className="w-3 h-3"
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
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4 py-2" action="#">
                            <input type='number' placeholder='Phone' className='placeholder:text-xl w-full rounded-md border-gray-500 border py-2.5 focus:outline-none focus:border-0 focus:border-green-500 ' />
                            <button
                                type="submit"
                                className="w-full text-white shadow bg-red-500 hover:bg-red-600 focus:outline-none font-normal rounded-lg text-lg px-5 py-2 text-center "
                            >
                                Send One Time Password
                            </button>
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="w-full h-px my-2 bg-gray-200 border-0" />
                                <span className="absolute px-3 font-normal text-gray-500 -translate-x-1/2 bg-white left-1/2">or</span>
                            </div>
                            <button
                                type="button"
                                className="border shadow w-full focus:outline-none font-normal text-gray-500 rounded-lg px-5 py-2 text-center flex justify-center items-center mb-2"
                            >
                                <img width={30} className='mr-4' src='/4202011_email_gmail_mail_logo_social_icon.svg' />
                                Continue with Email
                            </button>
                            <button
                                type="button"
                                className="border shadow w-full focus:outline-none font-normal text-gray-500 rounded-lg px-5 py-1 text-center flex justify-center items-center mb-2"
                            >
                                <img width={40} className='mx-2' src='/7123025_logo_google_g_icon.svg' />
                                Continue with Google
                            </button>

                            <hr />
                            <div className="text-md font-normal text-black ">
                                New to Zomato?{" "}
                                <a
                                    href="#"
                                    className="text-red-700 hover:underline dark:text-blue-500"
                                    data-modal-hide="authentication-modal"
                                    data-modal-target="authentication-modal-1"
                                    data-modal-toggle="authentication-modal-1"
                                    onClick={func}
                                >
                                    Create account
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}