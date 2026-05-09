'use client'

import { Shield, Lock, UserCheck, MessageCircle, Users, UserCircle } from 'lucide-react'
import Reveal from './Reveal'

const features = [
  {
    icon: MessageCircle,
    label: 'Messaging',
    title: 'Conversations that feel effortless',
    description:
      'A clean, fast chat experience designed to get out of your way. Send messages, react with emojis, reply with quoted bubbles — everything just works.',
    src: '/App Screenshot/Screenshot 2026-05-04 182437.png',
    alt: 'Chat screen',
    accent: '#2563EB',
  },
  {
    icon: Lock,
    label: 'Infinity Space',
    title: 'A private space hidden in plain sight',
    description:
      'One password flip and you\'re in a completely separate world. Your real chats vanish — replaced by a decoy space that looks normal. If someone forces you to unlock your phone, they see nothing that can hurt you.',
    src: '/App Screenshot/Screenshot 2026-05-04 182151.png',
    alt: 'Flip Space screen',
    accent: '#9333EA',
  },
  {
    icon: UserCheck,
    label: 'Permissions',
    title: 'You decide who reaches you',
    description:
      'Nobody can message you without sending a request first. Approve who gets through. No spam, no strangers, no surprises.',
    src: '/App Screenshot/Screenshot 2026-05-04 182248.png',
    alt: 'Send chat request screen',
    accent: '#10B981',
  },
  {
    icon: Shield,
    label: 'Trust & Safety',
    title: 'Every chat, fully encrypted',
    description:
      'See exactly who you\'re talking to. End-to-end encryption status visible at a glance. Block any contact in a single tap.',
    src: '/App Screenshot/Screenshot 2026-05-04 182325.png',
    alt: 'User info screen',
    accent: '#F59E0B',
  },
  {
    icon: Users,
    label: 'Groups',
    title: 'Private groups, your way',
    description:
      'Create a group with the people you trust. Same encryption, same privacy — now with everyone you love in one place.',
    src: '/App Screenshot/Screenshot 2026-05-04 185615.png',
    alt: 'Create group screen',
    accent: '#DB2777',
  },
  {
    icon: UserCircle,
    label: 'Your profile',
    title: 'Full control, always at hand',
    description:
      'Manage your identity, switch between dark and light, toggle visibility, and review blocked contacts — all in one place.',
    src: '/App Screenshot/Screenshot 2026-05-04 182056.png',
    alt: 'Profile screen',
    accent: '#6366F1',
  },
]

export default function AppPreviewSection() {
  return (
    <section
      id="app-preview"
      className="bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center pt-24 md:pt-32 pb-16 md:pb-24 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-blue">
              How it works
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink tracking-tight leading-[1.1]">
              One tap to{' '}
              <span className="gradient-text">disappear.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Subtext lets you flip between spaces instantly. If someone grabs your phone, they see a completely different app — your real chats stay hidden, locked, and safe.
            </p>
          </div>
        </Reveal>

        {/* Feature rows */}
        <div className="flex flex-col">
          {features.map((feature, i) => {
            const isEven = i % 2 === 0
            const Icon = feature.icon
            return (
              <Reveal key={feature.label}>
                <div
                  className={`flex flex-col items-center gap-12 lg:gap-20 py-14 md:py-20 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Text side */}
                  <div className="flex-1 flex flex-col gap-5 text-center md:text-left max-w-lg">
                    <div className="flex items-center gap-2.5 justify-center md:justify-start">
                      <div
                        className="p-2.5 rounded-xl"
                        style={{
                          background: `${feature.accent}15`,
                          color: feature.accent,
                        }}
                      >
                        <Icon size={20} strokeWidth={2.2} />
                      </div>
                      <span
                        className="text-xs font-bold tracking-[0.18em] uppercase"
                        style={{ color: feature.accent }}
                      >
                        {feature.label}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-brand-ink leading-tight tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Screenshot side */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative">
                      {/* Soft accent glow */}
                      <div
                        className="absolute -inset-12 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${feature.accent}25 0%, transparent 70%)`,
                          filter: 'blur(40px)',
                        }}
                      />
                      {/* Subtle dotted accent */}
                      <div
                        className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20 hidden md:block"
                        style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, ${feature.accent} 1px, transparent 0)`,
                          backgroundSize: '12px 12px',
                        }}
                      />
                      <img
                        src={feature.src}
                        alt={feature.alt}
                        className="relative w-[230px] sm:w-[260px] rounded-3xl border border-slate-200"
                        style={{
                          boxShadow: '0 30px 60px -20px rgba(15,23,42,0.25)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="pb-20" />
      </div>
    </section>
  )
}
