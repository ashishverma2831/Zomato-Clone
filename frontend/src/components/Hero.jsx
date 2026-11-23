import { Link } from 'react-router-dom'
import { Button } from './ui/button'

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
      <div className='container mx-auto max-w-6xl px-5 py-14 md:py-20'>
        <div className='mx-auto mb-10 max-w-3xl text-center md:mb-14'>
          <p className="mb-4 flex flex-wrap items-center justify-center gap-2 text-3xl font-normal tracking-tight md:text-4xl">
            Popular locations in
            <span className='inline-flex items-center gap-2 font-semibold uppercase'>
              <img className='h-8 w-8' alt='India flag' src='/india-flag-icon.svg' /> India
            </span>
          </p>
          <p className='mx-auto max-w-3xl text-base leading-7 text-muted-foreground md:text-lg'>
            From swanky restaurants to cosy neighbourhood gems, discover menus, photos, and reviews to find your next great meal.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <a href="#popular-locations">Explore cities <span aria-hidden="true" className="ml-2">↓</span></a>
          </Button>
        </div>
        <div id="popular-locations" className='grid scroll-mt-8 grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3'>
          {
            cities.map((city) => {
              return (
                <div key={city}>
                  <Link to={'/' + city.toLowerCase()} className="group flex min-h-16 items-center justify-between rounded-xl border border-border/80 bg-card px-5 py-4 text-base font-medium text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring">
                    <span className="text-base font-medium">{city} Restaurants</span>
                    <svg
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
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
                  </Link>

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