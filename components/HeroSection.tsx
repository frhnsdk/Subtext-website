'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Download, Globe } from 'lucide-react'

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => null,
})

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(37,99,235,0.18) 0%, transparent 70%)',
        }}
      />

      {/* 3D Scene — hidden on very small screens for perf */}
      <div className="absolute inset-0 hidden sm:block">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-row lg:gap-16">
        <div className="flex-1 max-w-2xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/20 text-blue-300 border border-blue-500/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            End-to-End Encrypted
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Say it privately.{' '}
            <span className="gradient-text">Say it clearly.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
            End-to-end encrypted chats, password-protected Spaces, and real-time messaging — all in one app. Your conversations, your rules.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#" className="btn-primary gap-2 text-base">
              <Download size={18} />
              Download for Android
            </a>
            <a href="#" className="btn-outline-white gap-2 text-base">
              <Globe size={18} />
              Try on Web
            </a>
          </div>

          {/* Social proof row */}
          <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              Real-time messaging
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              X25519 + AES-GCM
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Android · iOS · Web
            </span>
          </div>
        </div>

        {/* Right side spacer so text sits left on desktop */}
        <div className="flex-1 hidden lg:block" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  )
}
