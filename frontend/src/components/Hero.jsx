import React from 'react'

const Hero = () => {

    const cities = [
        'Agra',
        'Ahmedabad',
        'Ajmer',
        'Alappuzha',
        'Allahabad',
        'Amravati',
        'Amritsar',
        'Aurangabad',
        'Bengaluru',
        'Bhopal',
        'Bhubaneshwar',
        'Chandigarh',
        'Chennai',
        'Coimbatore',
        'Cuttack',
        'Darjeeling',
        'Dehradun',
        'Delhi NCR',
        'Dharamsala',
        'Gangtok',
        'Goa',
        'Gorakhpur',
        'Guntur',
        'Guwahati',
        'Gwalior',
        'Haridwar',
        'Hyderabad',
        'Indore',
        'Jabalpur',
        'Jaipur',
        'Jalandhar',
        'Jammu',
        'Jamnagar',
        'Jamshedpur',
        'Jhansi',
        'Jodhpur',
        'Junagadh',
        'Kanpur',
        'Khajuraho',
        'Khamgaon',
        'Kharagpur',
        'Kochi',
        'Kolhapur',
        'Kolkata',
        'Kota',
        'Lucknow',
        'Ludiana',
        'Madurai',
        'Manali',
        'Mangalore',
        'Manipal',
        'Meerut',
        'Mumbai',
        'Mussoorie',
        'Mysore',
        'Nagpur',
        'Nanital',
        'Nashik',
        'Neemrana',
        'Ooty',
        'Palakkad',
        'Patiala',
        'Patna',
        'Puducherry',
        'Pune',
        'Pushkar',
        'Raipur',
        'Rajkot',
        'Ranchi',
        'Rishikesh',
        'Salem',
        'Shimla',
        'Siliguri',
        'Srinagar',
        'Surat',
        'Thrissur',
        'Tirupati',
        'Trichy',
        'Trivandrum',
        'Udaipur',
        'Vadodara',
        'Varanasi',
        'Vellore',
        'Vijayawada',
        'Visakhapatnam'
    ]

  return (
    <>
        <div className=' container max-w-6xl mx-auto p-5'>
            <p className="justify-center text-4xl font-normal tracking-wide my-5 flex">Popular locations in <span className='flex uppercase font-semibold'><img className='mx-4' width={50} src='/india-flag-icon.svg'/> India</span> </p>
            <p className='text-2xl max-w-4xl mx-auto text-center text-gray-500 font-light py-5 '>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
            <div className=' grid grid-cols-3 gap-6 gap-y-8'>

                {
                    cities.map((city)=>{
                        return (
                            <div>
                <a href="#" className="flex items-center justify-between p-5 text-base font-medium text-black rounded-lg bg-gray-50 shadow-md hover:shadow-xl">
  <span className="w-full text-xl font-normal text-black">{city} Restaurants</span>
  <svg
    className="w-4 h-4 ms-2 rtl:rotate-180"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
</a>

                </div>
                        )
                    })
                }


                {/* <div>
                <a href="#" className="flex items-center justify-between p-5 text-base font-medium text-black rounded-lg bg-gray-50 shadow hover:shadow-xl">
  <span className="w-full text-xl font-normal text-black">Agragggggggkkkk Restaurants</span>
  <svg
    className="w-4 h-4 ms-2 rtl:rotate-180"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
</a>

                </div> */}

            </div>
        </div>
    </>
  )
}

export default Hero