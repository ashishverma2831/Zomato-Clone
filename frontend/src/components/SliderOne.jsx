import { useMemo } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

const products = [
  {
    title: 'Listings',
    description: 'A free app that allows you to manage your Zomato listing directly from your smartphone',
    image: 'https://b.zmtcdn.com/merchant-onboarding/be4f70ca22a3b31a84b3cf8ed811f0281600769259.png',
  },
  {
    title: 'Online Ordering',
    description: 'Start taking orders online from millions of users near you and deliver with Zomato...',
    image: 'https://b.zmtcdn.com/merchant-onboarding/2c7dd621a502cde6f5051fc6d411b8881600769171.png',
  },
  {
    title: 'Advertise',
    description: 'For every marketing dollar spent, Zomato returns over 8x the investment...',
    image: 'https://www.zomato.com/partner-with-us/static/media/ZomatoAdvertise.31195a83.svg',
  },
  {
    title: 'Events',
    description: 'Partner with us for India’s grandest food & entertainment carnival - “Zomaland”...',
    image: 'https://www.zomato.com/partner-with-us/static/media/ZomatoEvent.c3e1f3a8.svg',
  },
  {
    title: 'Hyperpure',
    description: 'Supplies fresh and high quality ingredients to restaurant for serving delicious meals...',
    image: 'https://www.zomato.com/partner-with-us/static/media/Hyperpure.25f37214.svg',
  },
]

const SliderOne = () => {
  const autoplayPlugins = useMemo(
    () => [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    ],
    [],
  )

  return (
    <section className="my-5 px-4 pb-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-screen-lg">
        <p className="mt-5 text-center text-3xl font-normal sm:text-4xl">Our Products</p>
        <Carousel opts={{ align: 'start', loop: true }} plugins={autoplayPlugins} className="mt-4">
          <CarouselContent>
            {products.map((card) => (
              <CarouselItem key={card.title} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <article className="mx-auto my-5 flex h-full w-full max-w-[300px] flex-col overflow-hidden rounded-lg bg-gray-50 shadow-lg">
                  <img className="h-48 w-full object-contain p-4" src={card.image} alt={card.title} />
                  <div className="flex flex-1 flex-col items-start gap-2 p-4">
                    <p className="text-2xl font-semibold">{card.title}</p>
                    <p className="text-base font-normal text-gray-700">{card.description}</p>
                    <Link title="Learn more" className="mt-auto text-lg font-normal text-blue-500">
                      Learn More
                    </Link>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  )
}

export default SliderOne
