'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const previews = [
  {
    id: 1,
    src: '/App Screenshot/6298335807923753193.jpg',
    alt: 'App preview 1',
  },
  {
    id: 2,
    src: '/App Screenshot/6298335807923753196.jpg',
    alt: 'App preview 2',
  },
  {
    id: 3,
    src: '/App Screenshot/6298335807923753197.jpg',
    alt: 'App preview 3',
  },
  {
    id: 4,
    src: '/App Screenshot/6298335807923753199.jpg',
    alt: 'App preview 4',
  },
  {
    id: 5,
    src: '/App Screenshot/6298335807923753265.jpg',
    alt: 'App preview 5',
  },
  {
    id: 6,
    src: '/App Screenshot/Screenshot_20260118-221825.png',
    alt: 'App preview - Chat interface',
  },
  {
    id: 7,
    src: '/App Screenshot/Screenshot_20260118-221830.png',
    alt: 'App preview - Messages view',
  },
  {
    id: 8,
    src: '/App Screenshot/Screenshot_20260118-221934.png',
    alt: 'App preview - Full app showcase',
  },
  {
    id: 9,
    src: '/App Screenshot/Screenshot_20260118-223451.png',
    alt: 'App preview 9',
  },
]

export default function AppPreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? previews.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === previews.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="app-preview" className="section-pad bg-brand-dark relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(16,185,129,0.12) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-green">App Preview</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            See Subtext in <span className="gradient-text">action</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the clean, intuitive interface designed for secure and private messaging.
          </p>
        </div>

        {/* Preview carousel */}
        <div className="relative flex justify-center items-center">
          {/* Main preview */}
          <div className="w-full max-w-md relative">
            <div
              className="rounded-3xl overflow-hidden border border-brand-blue/40 bg-black/40 backdrop-blur-md"
              style={{
                boxShadow: '0 20px 60px rgba(37, 99, 235, 0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              {/* Phone frame */}
              <div className="relative aspect-[9/16] overflow-hidden bg-brand-dark">
                <img
                  src={previews[activeIndex].src}
                  alt={previews[activeIndex].alt}
                  className="w-full h-full object-cover"
                  style={{
                    opacity: 0.95,
                  }}
                />
              </div>
            </div>

            {/* Notch effect overlay */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-brand-dark rounded-b-2xl border border-brand-blue/30 z-10" />
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 -translate-x-16 md:-translate-x-20 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-brand-dark/80 text-white/70 hover:text-white hover:bg-brand-dark transition-all border border-white/10"
            aria-label="Previous preview"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 translate-x-16 md:translate-x-20 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-brand-dark/80 text-white/70 hover:text-white hover:bg-brand-dark transition-all border border-white/10"
            aria-label="Next preview"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {previews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? 'w-8 bg-brand-blue'
                  : 'w-2 bg-white/25 hover:bg-white/40'
              }`}
              aria-label={`Go to preview ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
