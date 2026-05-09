'use client'

import dynamic from 'next/dynamic'
import { Download, ShieldCheck, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const PhoneConnection = dynamic(() => import('./PhoneConnection'), {
  ssr: false,
  loading: () => null,
})

const apkDownloadHref = process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL || '#'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white pt-28 pb-20"
    >
      {/* Animated gradient blobs */}
      <div
        className="blob"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
          top: '-100px',
          left: '-100px',
          animation: 'blob 22s ease-in-out infinite',
          zIndex: 1,
        }}
      />
      <div
        className="blob"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(96,165,250,0.16) 0%, transparent 70%)',
          bottom: '-150px',
          right: '-100px',
          animation: 'blob 26s ease-in-out infinite reverse',
          zIndex: 1,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#0B1220 1px, transparent 1px), linear-gradient(90deg, #0B1220 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)',
          zIndex: 2,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-blue-50 text-brand-blue border border-brand-blue-100 mb-7">
              <Sparkles size={13} className="text-brand-blue" />
              Private messaging, reimagined
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold text-brand-ink leading-[1.05] tracking-tight mb-6">
              Your private life,
              <br />
              <span className="gradient-text">finally private.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Hidden, password-locked spaces for the conversations that matter most. Encrypted by default. Yours, completely.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <a href={apkDownloadHref} className="btn-primary">
                <Download size={18} />
                Download for Android
              </a>
              <a href="#features" className="btn-secondary">
                See how it works
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-brand-blue" />
                End-to-end encrypted
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Free to use
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                No tracking
              </span>
            </div>
          </Reveal>
        </div>

        {/* Phone Connection scene */}
        <Reveal delay={200} className="relative">
          <div className="relative w-full aspect-square max-w-[560px] mx-auto">
            <PhoneConnection />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
