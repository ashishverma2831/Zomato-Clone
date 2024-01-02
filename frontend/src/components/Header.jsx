import React from 'react'
import 'flowbite';

const Header = () => {
  return (
    <>
        <header className='bg-[url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")] h-[572px] bg-no-repeat bg-center bg-cover'>
            <nav className=" border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-xl font-normal">
        <li>
          <a
            href="#"
            className="block py-2 px-3 rounded md:bg-transparent  md:p-0 text-white"
            aria-current="page"
          >
            Add restaurant 
          </a>
        </li>
        <li>
          <div>
  <button
    data-modal-target="authentication-modal"
    data-modal-toggle="authentication-modal"
    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-white"
    type="button"
  >
    Log in
  </button>
  <div
    id="authentication-modal"
    tabIndex={-1}
    aria-hidden="true"
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
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
            <input type='number' placeholder='Phone' className='placeholder:text-xl w-full rounded-md border-gray-500 border py-2.5 focus:outline-none focus:border-0 focus:border-green-500 '/>
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
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
          </div>
        </li>
        <li>
          <div>
  <button
    data-modal-target="authentication-modal-1"
    data-modal-toggle="authentication-modal-1"
    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-white"
    type="button"
  >
    Sign up
  </button>
  <div
    id="authentication-modal-1"
    tabIndex={-1}
    aria-hidden="true"
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div className="relative p-4 w-full max-w-md max-h-full">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
          <h3 className="text-3xl font-normal text-gray-700 dark:text-white">
            Sign up
          </h3>
          <button
            type="button"
            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal-1"
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
          <form className="space-y-4" action="#">
            <div>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="placeholder:text-xl w-full rounded-md mb-2 border-gray-500 border py-2.5 focus:outline-none focus:border-0 focus:border-green-500 "
                placeholder="Full name"
                required
              />
            </div>
            <div>
              
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="placeholder:text-xl w-full rounded-md mb-2 border-gray-500 border py-2.5 focus:outline-none focus:border-0 focus:border-green-500 "
                required=""
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-normal text-gray-600 dark:text-gray-300"
                >
                  I agree to Zomato's <span><a href="#" className='text-red-500 font-medium'>Terms of Service</a></span>,<span><a href="#" className='text-red-500 font-medium'> Privacy Policy</a></span> and <span><a href="#" className='text-red-500 font-medium'>Content Policies</a></span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white shadow bg-red-500 hover:bg-red-600 focus:outline-none font-normal rounded-lg text-lg px-5 py-2 text-center "
            >
              Create Account
            </button>
            <div className="inline-flex items-center justify-center w-full">
    <hr className="w-full h-px my-2 bg-gray-200 border-0" />
    <span className="absolute px-3 font-normal text-gray-500 -translate-x-1/2 bg-white left-1/2">or</span>
</div>
<button
  type="button"
  className="border shadow w-full focus:outline-none font-normal text-gray-500 rounded-lg px-5 py-1 text-center flex justify-center items-center mb-2"
>
  <img width={40} className='mx-2' src='/7123025_logo_google_g_icon.svg' />
  Continue with Google
</button>
            <div className="text-xl font-normal text-gray-500 dark:text-gray-300">
              Already have an account?{" "}
              <a
                href="#"
                className="text-red-500 hover:underline dark:text-blue-500"
              >
                Log in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
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
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group mt-4"
          >
            <span className="ms-3 text-gray-500 font-normal ">Add restaurant</span>
          </a>
        </li>
        <li>
          <div>
  <button
    data-modal-target="authentication-modal"
    data-modal-toggle="authentication-modal"
    className="block py-2 px-5 w-full text-left rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 font-normal text-gray-500"
    type="button"
  >
    Log in
  </button>
  <div
    id="authentication-modal"
    tabIndex={-1}
    aria-hidden="true"
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
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
            <input type='number' placeholder='Phone' className='placeholder:text-xl w-full rounded-md border-gray-500 border py-2.5 focus:outline-none focus:border-0 focus:border-green-500 '/>
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
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
          </div>
        </li>
        <li>
          <div>
  <button
    data-modal-target="authentication-modal-1"
    data-modal-toggle="authentication-modal-1"
    className="block py-2 px-5 w-full text-left rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 font-normal text-gray-500"
    type="button"
  >
    Sign up
  </button>
  <div
    id="authentication-modal-1"
    tabIndex={-1}
    aria-hidden="true"
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div className="relative p-4 w-full max-w-md max-h-full">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
          <h3 className="text-3xl font-normal text-gray-700 dark:text-white">
            Sign up
          </h3>
          <button
            type="button"
            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal-1"
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
          <form className="space-y-4" action="#">
            <div>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="placeholder:text-xl w-full rounded-md mb-2 border-gray-500 border py-2.5 focus:outline-none focus:border-0 focus:border-green-500 "
                placeholder="Full name"
                required
              />
            </div>
            <div>
              
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="placeholder:text-xl w-full rounded-md mb-2 border-gray-500 border py-2.5 focus:outline-none focus:border-0 focus:border-green-500 "
                required=""
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-normal text-gray-600 dark:text-gray-300"
                >
                  I agree to Zomato's <span><a href="#" className='text-red-500 font-medium'>Terms of Service</a></span>,<span><a href="#" className='text-red-500 font-medium'> Privacy Policy</a></span> and <span><a href="#" className='text-red-500 font-medium'>Content Policies</a></span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white shadow bg-red-500 hover:bg-red-600 focus:outline-none font-normal rounded-lg text-lg px-5 py-2 text-center "
            >
              Create Account
            </button>
            <div className="inline-flex items-center justify-center w-full">
    <hr className="w-full h-px my-2 bg-gray-200 border-0" />
    <span className="absolute px-3 font-normal text-gray-500 -translate-x-1/2 bg-white left-1/2">or</span>
</div>
<button
  type="button"
  className="border shadow w-full focus:outline-none font-normal text-gray-500 rounded-lg px-5 py-1 text-center flex justify-center items-center mb-2"
>
  <img width={40} className='mx-2' src='/7123025_logo_google_g_icon.svg' />
  Continue with Google
</button>
            <div className="text-xl font-normal text-gray-500 dark:text-gray-300">
              Already have an account?{" "}
              <a
                href="#"
                className="text-red-500 hover:underline dark:text-blue-500"
              >
                Log in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
                </div>
            </nav>

            <div className='h-full flex justify-center items-center'>
                <div className=' w-full  md:max-w-xl mx-auto p-5 mb-10'>
                    <h1 className='text-white text-7xl italic font-bold text-center my-4'>Zomato</h1>
                    <p className='text-white text-4xl font-normal text-center my-4'>Find the best restaurants, cafés and bars in India</p>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header