import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

const collectionCards = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  title: 'Best insta-worthy places',
  count: '9 places',
  image:
    'https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*',
}))

const CollectionComponent = ({ city }) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 md:p-8">
        <div className="w-full">
          <p className="px-2 pt-2 text-left text-3xl sm:text-4xl">Collections</p>
          <div className="flex flex-col gap-2 p-2 sm:flex-row sm:justify-between">
            <p className="text-base text-gray-500 sm:text-lg md:text-xl">
              Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends
            </p>
            <p className="flex shrink-0">
              <Link to={`/${city}/collections`} className="text-base text-red-500 md:text-xl">
                All collections in Lucknow <i className="mx-2 text-sm fa-solid fa-play" />
              </Link>
            </p>
          </div>
          <Carousel opts={{ align: 'start', containScroll: 'trimSnaps' }} className="py-5">
            <CarouselContent>
              {collectionCards.map((card) => (
                <CarouselItem key={card.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div
                    className="flex h-[260px] cursor-pointer flex-col items-start justify-end rounded-lg bg-cover bg-center p-3 text-base text-white sm:h-[320px] sm:p-5 sm:text-lg md:h-[360px] md:text-xl"
                    style={{ backgroundImage: `url("${card.image}")` }}
                  >
                    <p>{card.title}</p>
                    <p>{card.count} <i className="mx-2 text-sm fa-solid fa-play" /></p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
            <CarouselDots />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default CollectionComponent
