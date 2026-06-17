'use client'

import PhoneFrame from './PhoneFrame'
import PhoneSwipeShowcase from './PhoneSwipeShowcase'

interface PhoneFanProps {
  images: [string, string, string]
  alt: string
}

export default function PhoneFan({ images, alt }: PhoneFanProps) {
  return (
    <>
      <div className="sm:hidden">
        <PhoneSwipeShowcase images={images} alt={alt} />
      </div>

      <div className="hidden w-full sm:block sm:overflow-visible">
        <div
          className="relative mx-auto w-full min-w-[340px] max-w-5xl"
          style={{ height: 'clamp(300px, 64vw, 480px)' }}
        >
          <div
            className="pointer-events-none absolute inset-x-[5%] bottom-2 top-4 rounded-full bg-brand-accent/10 blur-3xl"
            aria-hidden
          />

          {/* Left */}
          <div className="absolute bottom-0 left-0 z-10 sm:left-[3%] md:left-[6%]">
            <PhoneFrame
              src={images[0]}
              alt={`${alt} screen 1`}
              heightStyle="clamp(250px, 56vw, 380px)"
              premium
            />
          </div>

          {/* Center */}
          <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 sm:bottom-3">
            <PhoneFrame
              src={images[1]}
              alt={`${alt} screen 2`}
              heightStyle="clamp(250px, 56vw, 375px)"
              premium
            />
          </div>

          {/* Right */}
          <div className="absolute bottom-4 right-0 z-30 sm:bottom-5 sm:right-[3%] md:right-[6%]">
            <PhoneFrame
              src={images[2]}
              alt={`${alt} screen 3`}
              heightStyle="clamp(250px, 56vw, 370px)"
              premium
            />
          </div>
        </div>
      </div>
    </>
  )
}
