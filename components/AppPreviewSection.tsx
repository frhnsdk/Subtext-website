'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const previews = [
  { id: 1, src: '/App Screenshot/Screenshot 2026-05-04 182056.png', alt: 'App preview 1' },
  { id: 2, src: '/App Screenshot/Screenshot 2026-05-04 182151.png', alt: 'App preview 2' },
  { id: 3, src: '/App Screenshot/Screenshot 2026-05-04 182248.png', alt: 'App preview 3' },
  { id: 4, src: '/App Screenshot/Screenshot 2026-05-04 182325.png', alt: 'App preview 4' },
  { id: 5, src: '/App Screenshot/Screenshot 2026-05-04 182437.png', alt: 'App preview 5' },
  { id: 6, src: '/App Screenshot/Screenshot 2026-05-04 185615.png', alt: 'App preview 6' },
]

export default function AppPreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrevious = () =>
    setActiveIndex((prev) => (prev === 0 ? previews.length - 1 : prev - 1))
  const goToNext = () =>
    setActiveIndex((prev) => (prev === previews.length - 1 ? 0 : prev + 1))

  const prevIndex = activeIndex === 0 ? previews.length - 1 : activeIndex - 1
  const nextIndex = activeIndex === previews.length - 1 ? 0 : activeIndex + 1

  return (
    <section id="app-preview" className="section-pad bg-brand-dark relative overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 100%, rgba(16,185,129,0.14) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 70%)',
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-green">
            App Preview
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            See Subtext in <span className="gradient-text">action</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the clean, intuitive interface designed for secure and private messaging.
          </p>
        </div>

        {/* Carousel stage */}
        <div className="relative">
          <div className="relative flex justify-center items-center gap-6 md:gap-10 lg:gap-14">
            {/* Side peek - previous (hidden on small) */}
            <button
              onClick={goToPrevious}
              aria-label="Previous preview"
              className="hidden lg:block relative shrink-0 group"
            >
              <PhoneFrame
                src={previews[prevIndex].src}
                alt={previews[prevIndex].alt}
                size="sm"
                dim
              />
            </button>

            {/* Main phone */}
            <div className="relative shrink-0">
              {/* Outer glow */}
              <div
                className="absolute -inset-8 rounded-[3rem] pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.35) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />
              <PhoneFrame
                key={previews[activeIndex].id}
                src={previews[activeIndex].src}
                alt={previews[activeIndex].alt}
                size="lg"
              />
            </div>

            {/* Side peek - next */}
            <button
              onClick={goToNext}
              aria-label="Next preview"
              className="hidden lg:block relative shrink-0 group"
            >
              <PhoneFrame
                src={previews[nextIndex].src}
                alt={previews[nextIndex].alt}
                size="sm"
                dim
              />
            </button>
          </div>

          {/* Nav buttons (mobile/tablet) */}
          <button
            onClick={goToPrevious}
            aria-label="Previous preview"
            className="lg:hidden absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 backdrop-blur-md text-white/80 hover:text-white hover:bg-white/10 transition border border-white/10"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next preview"
            className="lg:hidden absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 backdrop-blur-md text-white/80 hover:text-white hover:bg-white/10 transition border border-white/10"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-3 p-2 rounded-2xl bg-white/3 border border-white/10 backdrop-blur-sm overflow-x-auto max-w-full">
            {previews.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to preview ${i + 1}`}
                className={`relative shrink-0 w-14 h-24 sm:w-16 sm:h-28 rounded-xl overflow-hidden border transition-all ${
                  i === activeIndex
                    ? 'border-brand-blue ring-2 ring-brand-blue/40 scale-105'
                    : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="mt-6 text-center text-sm text-gray-400 tabular-nums">
          <span className="text-white font-semibold">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="mx-1.5 text-gray-600">/</span>
          <span>{String(previews.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}

function PhoneFrame({
  src,
  alt,
  size,
  dim = false,
}: {
  src: string
  alt: string
  size: 'sm' | 'lg'
  dim?: boolean
}) {
  const dims =
    size === 'lg'
      ? 'w-[260px] sm:w-[280px] md:w-[300px]'
      : 'w-[180px] xl:w-[200px]'

  return (
    <div
      className={`relative ${dims} aspect-9/19.5 rounded-[2.5rem] p-1.5 bg-linear-to-b from-white/15 via-white/5 to-white/10 transition-transform duration-500 ${
        dim ? 'opacity-50 scale-95 hover:opacity-80 hover:scale-100' : ''
      }`}
      style={{
        boxShadow:
          size === 'lg'
            ? '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.15)'
            : '0 15px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
      }}
    >
      <div className="relative w-full h-full rounded-[2.1rem] overflow-hidden bg-black">
        {/* Screenshot */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover animate-fade-in"
        />
        {/* Top notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[38%] h-5.5 bg-black rounded-full z-10" />
        {/* Subtle inner highlight */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[2.1rem]"
          style={{
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.12), inset 0 -20px 60px rgba(0,0,0,0.3)',
          }}
        />
      </div>
    </div>
  )
}
