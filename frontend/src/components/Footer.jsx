import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
            <div className='max-w-6xl mx-auto px-5'>
                <div className='py-10 flex justify-between'>
                    <div><p className='font-bold  uppercase text-4xl italic'>Zomato</p></div>
                    <div className='flex gap-4'>
                        {/* buttons */}
                        <div>
  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    className=" focus:outline-none font-normal my-auto rounded-lg border border-gray-700 text-md px-2 py-2.5 text-center inline-flex items-center "
    type="button"
  >
    <i className="fa-solid fa-globe mr-2"></i> English{" "}
    <svg
      className="w-2.5 h-2.5 ms-3"
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
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
  {/* Dropdown menu */}
  <div
    id="dropdown"
    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700"
  >
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Vietnamese
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Polish
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Italian
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Indonesian
        </a>
      </li>
    </ul>
  </div>
                        </div>
                    </div>
                </div>
                <div className='border-b'>
                    <div className='flex flex-wrap justify-between mb-10 md:flex-row'>
                        <div >
                            <h3 className='uppercase tracking-widest my-2 font-semibold'>About zomato</h3>
                            <ul className='text-gray-500 text-normal'>
                                <li className='hover:text-black'>Who We Are</li>
                                <li className='hover:text-black'>Blog</li>
                                <li className='hover:text-black'>Work With Us</li>
                                <li className='hover:text-black'>Investor Relations</li>
                                <li className='hover:text-black'>Report Fraud</li>
                                <li className='hover:text-black'>Press Kit</li>
                                <li className='hover:text-black'>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='uppercase tracking-widest my-2 font-semibold'>Zomaverse</h3>
                            <ul className='text-gray-500 text-normal'>
                                <li className='hover:text-black'>Zomato</li>
                                <li className='hover:text-black'>Blinkit</li>
                                <li className='hover:text-black'>Feeding India</li>
                                <li className='hover:text-black'>Hyperpure</li>
                                <li className='hover:text-black'>Zomaland</li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h3 className='uppercase tracking-widest my-2 font-semibold'>for restaurants</h3>
                                <ul className='text-gray-500 text-normal'>
                                    <li className='hover:text-black'>Partner With Us</li>
                                    <li className='hover:text-black'>Apps For You</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='uppercase tracking-widest my-2 font-semibold mt-5'>for enterprises</h3>
                                <ul className='text-gray-500 text-normal'>
                                    <li className='hover:text-black'>Zomato For Enterprises</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className='uppercase tracking-widest my-2 font-semibold'>learn more</h3>
                            <ul className='text-gray-500 text-normal'>
                                <li className='hover:text-black'>Privacy</li>
                                <li className='hover:text-black'>Security</li>
                                <li className='hover:text-black'>Terms</li>
                                <li className='hover:text-black'>Sitemap</li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='uppercase tracking-widest my-2 font-semibold'>social links</h3>
                            <ul className='flex gap-2'>
                                <li className=' flex justify-center items-center bg-black rounded-full w-8 h-8'><i className="text-white fa-brands fa-linkedin"></i></li>
                                <li className=' flex justify-center items-center bg-black rounded-full w-8 h-8'><i className="text-white fa-brands fa-instagram"></i></li>
                                <li className=' flex justify-center items-center bg-black rounded-full w-8 h-8'><i className="text-white fa-brands fa-x-twitter"></i></li>
                                <li className=' flex justify-center items-center bg-black rounded-full w-8 h-8'><i className="text-white fa-brands fa-youtube"></i></li>
                                <li className=' flex justify-center items-center bg-black rounded-full w-8 h-8'><i className="text-white fa-brands fa-facebook"></i></li>
                            </ul>
                            <div className='flex flex-col'>
                                {/* buttons */}
                                <button className='mb-4 mt-[-30px] h-10'><img width={150} src="/public/download-on-the-app-store-apple-logo-svgrepo-com.svg" /></button>
                                <button className='h-10'><img width={150} src="/public/google-play-badge-logo-svgrepo-com.svg" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                    <p className='text-gray-500'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer> 
    </>
  )
}

export default Footer