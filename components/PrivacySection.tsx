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
  },
  {
    icon: HardDrive,
    title: 'Spaces Stay Local',
    description: "Space passwords are hashed and compared on-device only. Your hidden conversations never touch our servers.",
  },
  {
    icon: EyeOff,
    title: 'Go Invisible',
    description: "Hide your online status anytime with a single toggle. No one knows when you're around unless you choose to share.",
  },
  {
    icon: Ban,
    title: 'Block & Mute',
    description: "Silence anyone, anytime. Your block list and mute settings are fully in your hands — no questions asked.",
  },
]

export default function PrivacySection() {
  return (
    <section id="privacy" className="section-pad bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-green">Privacy</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Your conversations{' '}
            <span className="gradient-text">stay yours.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            Privacy isn&apos;t a feature. It&apos;s the foundation. Here&apos;s exactly how we protect you.
          </p>
        </div>

        {/* Two-col layout: 3D left, trust points right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* 3D canvas — hidden on mobile for perf */}
          <div className="w-full lg:w-1/2 h-72 sm:h-96 lg:h-[500px] hidden sm:block">
            <PrivacyScene />
          </div>

          {/* Trust points */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <point.icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{point.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
