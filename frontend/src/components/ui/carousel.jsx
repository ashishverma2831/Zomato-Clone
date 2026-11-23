import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from './button'
import { cn } from '@/lib/utils'

const CarouselContext = createContext(null)

function useCarousel() {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error('Carousel components must be used inside a Carousel.')
  }

  return context
}

function Carousel({
  opts,
  plugins,
  orientation = 'horizontal',
  setApi,
  'aria-label': ariaLabel = 'Carousel',
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((emblaApi) => {
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [])

  const scrollPrev = useCallback(() => api && api.scrollPrev(), [api])
  const scrollNext = useCallback(() => api && api.scrollNext(), [api])

  useEffect(() => {
    if (!api) return

    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api, onSelect])

  useEffect(() => {
    if (api && setApi) setApi(api)
  }, [api, setApi])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        orientation,
        canScrollPrev,
        canScrollNext,
        scrollPrev,
        scrollNext,
        api,
      }}
    >
      <div
        role="region"
        aria-label={ariaLabel}
        aria-roledescription="carousel"
        data-orientation={orientation}
        className={cn('relative', className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, children, ...props }) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
}

function CarouselPrevious({ className, variant = 'outline', size = 'icon', ...props }) {
  const { orientation, canScrollPrev, scrollPrev } = useCarousel()

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'absolute z-10 rounded-full bg-white shadow-md',
        orientation === 'horizontal'
          ? 'left-2 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous slide"
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({ className, variant = 'outline', size = 'icon', ...props }) {
  const { orientation, canScrollNext, scrollNext } = useCarousel()

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'absolute z-10 rounded-full bg-white shadow-md',
        orientation === 'horizontal'
          ? 'right-2 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next slide"
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

function CarouselDots({ className, ...props }) {
  const { api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [snapCount, setSnapCount] = useState(0)

  useEffect(() => {
    if (!api) return

    const updateDots = () => {
      setSelectedIndex(api.selectedScrollSnap())
      setSnapCount(api.scrollSnapList().length)
    }

    updateDots()
    api.on('reInit', updateDots)
    api.on('select', updateDots)

    return () => {
      api.off('select', updateDots)
      api.off('reInit', updateDots)
    }
  }, [api])

  if (snapCount < 2) return null

  return (
    <div className={cn('mt-4 flex justify-center gap-2', className)} {...props}>
      {Array.from({ length: snapCount }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={selectedIndex === index}
          onClick={() => api.scrollTo(index)}
          className={cn(
            'h-2 w-2 rounded-full transition-colors',
            selectedIndex === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400',
          )}
        />
      ))}
    </div>
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
}
