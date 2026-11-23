import { useMemo } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

const testimonials = [
  {
    image: 'https://www.zomato.com/partner-with-us/static/media/PawanKumar.fb110f23.png',
    description:
      'We are immensely satisfied with the marketing push Zomato has provided us. We are now exclusive with Zomato and look forward to more growth in our delivery business through online orders.',
    name: 'Pawan Kumar',
    owner: 'Chicago BR, Dehradun',
  },
  {
    image: 'https://www.zomato.com/partner-with-us/static/media/Tushar.6bc47b8a.png',
    description:
      'Zomato delivery fleet saves considerable effort on our part resulting in more fulfilled orders for us. Also, it has now become much easier for customers to discover our brand on Zomato.',
    name: 'Tushar',
    owner: 'Concept Shawarma , Delhi NCR',
  },
  {
    image: 'https://www.zomato.com/partner-with-us/static/media/Jasmeet.7da6a5e1.png',
    description:
      'Earlier, we delivered food orders to our known and repeat customers but now we have been able to create a completely new segment of repeat users - all because of the Zomato app.',
    name: 'Jasmeet Singh',
    owner: 'Pick and Move, Udaipur',
  },
]

const SliderTwo = () => {
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
    <section className="bg-gray-100 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-screen-md px-1 py-4 sm:px-5">
        <p className="text-center text-3xl sm:text-4xl">Our happy partners</p>
        <Carousel opts={{ align: 'start', loop: true }} plugins={autoplayPlugins} className="mt-4">
          <CarouselContent>
            {testimonials.map((card) => (
              <CarouselItem key={card.name}>
                <article className="mx-auto flex h-full w-full min-w-0 flex-col gap-3 rounded-lg py-4 sm:flex-row sm:gap-2">
                  <div className="img-quotation relative flex w-full flex-none justify-center sm:w-40 sm:justify-end sm:place-items-end">
                    <img className="h-24 w-24 rounded-lg object-cover sm:h-32 sm:w-32" src={card.image} alt={card.name} />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-2 sm:p-4">
                    <p className="text-base font-normal text-gray-500 sm:text-lg">{card.description}</p>
                    <div>
                      <p className="text-lg font-normal text-blue-500 sm:text-xl">{card.name}</p>
                      <p className="text-base font-normal text-gray-900 sm:text-xl">Owner - {card.owner}</p>
                    </div>
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

export default SliderTwo
