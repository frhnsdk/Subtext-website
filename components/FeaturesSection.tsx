import { Lock, FolderLock, Zap, Users, MessageCircle, Moon } from 'lucide-react'
import FeatureCard from './FeatureCard'

const features = [
  {
    icon: FolderLock,
    title: 'Infinity Space',
    description: 'Create unlimited password-protected Spaces for different parts of your life. Each one unlocks locally and stays private to you.',
    iconBg: 'rgba(139,92,246,0.1)',
    iconColor: '#8B5CF6',
  },
  {
    icon: Lock,
    title: 'End-to-End Encrypted',
    description: 'Only you and your recipient can read it. Not even our servers. X25519 + AES-GCM 256-bit, Signal-style per-message keys.',
    iconBg: 'rgba(37,99,235,0.1)',
    iconColor: '#2563EB',
  },
  {
    icon: Zap,
    title: 'Real-Time Messaging',
    description: 'Instant delivery powered by Firebase Firestore. Typing indicators, read receipts, and unread badges — all live.',
    iconBg: 'rgba(234,179,8,0.1)',
    iconColor: '#CA8A04',
  },
  {
    icon: Users,
    title: 'Group Chats',
    description: "Create groups, track unread counts per member, see who's active. Groups appear in a story-style rail on home.",
    iconBg: 'rgba(16,185,129,0.1)',
    iconColor: '#10B981',
  },
  {
    icon: MessageCircle,
    title: 'Rich Messages',
    description: "React with any emoji, reply with quoted bubbles, forward messages with a label. Long-press to access all actions.",
    iconBg: 'rgba(236,72,153,0.1)',
    iconColor: '#EC4899',
  },
  {
    icon: Moon,
    title: 'Dark Mode',
    description: 'Full dark and light mode support with a single toggle in Profile. Looks great day or night, persisted across sessions.',
    iconBg: 'rgba(99,102,241,0.1)',
    iconColor: '#6366F1',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="section-pad bg-brand-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.16) 0%, transparent 65%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative text-center mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-green">Features</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Infinity Space first.{' '}
            <span className="gradient-text">Everything else built around it.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Infinity Space is the core of Subtext: private, password-locked conversation zones that keep your most sensitive chats separated and secure.
          </p>
        </div>

        <div
          id="infinity-space"
          className="relative mb-10 rounded-3xl border border-brand-blue/40 bg-linear-to-br from-brand-dark-card via-[#1B2A47] to-brand-dark-card p-6 sm:p-8"
          style={{ boxShadow: '0 14px 34px rgba(0, 0, 0, 0.35)' }}
        >
          <span className="inline-flex items-center rounded-full bg-brand-blue/20 text-blue-200 px-3 py-1 text-xs font-semibold tracking-wide uppercase border border-blue-300/30">
            Main Feature
          </span>
          <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white">Infinity Space</h3>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-3xl">
            Build separate, password-protected Spaces for work, family, and highly sensitive discussions. Each Space stays locally controlled on your device and unlocks only when you say so.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <span className="px-3 py-1.5 rounded-full bg-brand-dark border border-white/15 text-sm font-medium text-blue-100">Unlimited Spaces</span>
            <span className="px-3 py-1.5 rounded-full bg-brand-dark border border-white/15 text-sm font-medium text-blue-100">Local Password Check</span>
            <span className="px-3 py-1.5 rounded-full bg-brand-dark border border-white/15 text-sm font-medium text-blue-100">Instant Space Switching</span>
          </div>
        </div>

        {/* Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
