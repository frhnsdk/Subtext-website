'use client'

import dynamic from 'next/dynamic'
import { ShieldCheck, HardDrive, EyeOff, Ban } from 'lucide-react'

const PrivacyScene = dynamic(() => import('./PrivacyScene'), {
  ssr: false,
  loading: () => null,
})

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'On-Device Encryption',
    description: 'Messages are encrypted before they leave your device using X25519 + AES-GCM 256-bit. The server only ever sees ciphertext.',
    color: '#3B82F6',
  },
  {
    icon: HardDrive,
    title: 'Infinity Space Stays Local',
    description: 'Infinity Space passwords are hashed and verified on-device only. Your hidden conversations never touch our servers.',
    color: '#10B981',
  },
  {
    icon: EyeOff,
    title: 'Go Invisible',
    description: 'Hide your online status anytime. No one knows when you\'re around unless you choose to share.',
    color: '#A78BFA',
  },
  {
    icon: Ban,
    title: 'Block & Mute',
    description: 'Silence anyone, anytime. Your block list and mute settings are fully in your hands — no questions asked.',
    color: '#F472B6',
  },
]

export default function PrivacySection() {
  return (
    <section id="privacy" className="relative bg-brand-dark overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* ── Full-bleed 3D background ── */}
      <div className="absolute inset-0">
        <PrivacyScene />
      </div>

      {/* ── Gradient vignette so edges fade into dark ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, #0F172A 100%),
            linear-gradient(to bottom, #0F172A 0%, transparent 15%, transparent 85%, #0F172A 100%)
          `,
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-green">Privacy</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Your conversations{' '}
            <span className="gradient-text">stay yours.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-lg mx-auto">
            Infinity Space keeps your most sensitive chats locked behind local passwords and fully under your control.
          </p>
        </div>

        {/* Trust point cards — glass, 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-3xl">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="group flex gap-4 rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:border-white/25 hover:-translate-y-0.5"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              {/* Icon */}
              <div
                className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${point.color}22`, color: point.color }}
              >
                <point.icon size={22} strokeWidth={1.8} />
              </div>
              {/* Text */}
              <div>
                <h3 className="font-semibold text-white mb-1 text-sm">{point.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
