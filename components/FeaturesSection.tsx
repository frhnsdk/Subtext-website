import { Lock, FolderLock, Zap, Users, MessageCircle, Moon } from 'lucide-react'
import FeatureCard from './FeatureCard'

const features = [
  {
    icon: Lock,
    title: 'End-to-End Encrypted',
    description: 'Only you and your recipient can read it. Not even our servers. X25519 + AES-GCM 256-bit, Signal-style per-message keys.',
    iconBg: 'rgba(37,99,235,0.1)',
    iconColor: '#2563EB',
  },
  {
    icon: FolderLock,
    title: 'Spaces',
    description: 'Password-protected containers for your most private conversations. Stored locally — never on our servers.',
    iconBg: 'rgba(139,92,246,0.1)',
    iconColor: '#8B5CF6',
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
    <section id="features" className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-blue">Features</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Everything you need.{' '}
            <span className="gradient-text">Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Built around privacy and speed, Subtext gives you the tools to message on your terms.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
