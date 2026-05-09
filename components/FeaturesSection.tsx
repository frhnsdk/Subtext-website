import { Lock, FolderLock, Zap, Users, MessageCircle, Moon, ArrowRight } from 'lucide-react'
import FeatureCard from './FeatureCard'
import Reveal from './Reveal'

const features = [
  {
    icon: Lock,
    title: 'End-to-end encrypted',
    description:
      'Only you and the people you trust can read your messages. Nobody in between — not even us.',
    iconBg: '#EFF6FF',
    iconColor: '#2563EB',
  },
  {
    icon: Zap,
    title: 'Lightning fast',
    description:
      'Messages, reactions, and read receipts deliver instantly. No lag, no waiting around.',
    iconBg: '#FEF3C7',
    iconColor: '#D97706',
  },
  {
    icon: Users,
    title: 'Private group chats',
    description:
      'Create groups for your closest people. Same encryption. Same privacy. Just more friends.',
    iconBg: '#ECFDF5',
    iconColor: '#10B981',
  },
  {
    icon: MessageCircle,
    title: 'Rich conversations',
    description:
      'React with emojis, reply to anything, forward with a tap. Conversations that feel alive.',
    iconBg: '#FCE7F3',
    iconColor: '#DB2777',
  },
  {
    icon: Moon,
    title: 'Dark & light modes',
    description:
      'Switch between themes with one tap. Looks great whether you chat in the morning or at night.',
    iconBg: '#EEF2FF',
    iconColor: '#6366F1',
  },
  {
    icon: FolderLock,
    title: 'Request before chat',
    description:
      "Nobody can message you without permission first. No spam, no strangers, no surprises.",
    iconBg: '#F3E8FF',
    iconColor: '#9333EA',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-pad bg-brand-gray-1 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-blue">
              Spaces
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink tracking-tight leading-[1.1]">
              Built to keep you{' '}
              <span className="gradient-text">safe in real life.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Subtext was built for people in danger. Multiple spaces hide your chats — so even if someone takes your phone, they find nothing.
            </p>
          </div>
        </Reveal>

        {/* Hero feature: Infinity Space */}
        <Reveal delay={100}>
          <div
            id="infinity-space"
            className="relative mb-8 rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-14"
            style={{
              background:
                'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)',
              boxShadow: '0 30px 60px -20px rgba(37,99,235,0.4)',
            }}
          >
            {/* Pattern overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-15"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />
            {/* Glow */}
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)' }}
            />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-white/30">
                  <Lock size={12} />
                  Headline feature
                </span>
                <h3 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                  Infinity Space
                </h3>
                <p className="mt-5 text-base sm:text-lg text-blue-50 max-w-xl leading-relaxed">
                  A hidden, password-locked space inside the app. Switch identities with one tap. Invisible to anyone who picks up your phone.
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {['Unlimited spaces', 'Password locked', 'Instant switching'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-sm font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#app-preview"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:gap-3 transition-all"
                >
                  See it in action
                  <ArrowRight size={15} />
                </a>
              </div>

              <div className="hidden lg:flex justify-center">
                <img
                  src="/App Screenshot/Screenshot 2026-05-04 182151.png"
                  alt="Infinity Space"
                  className="w-[240px] rounded-3xl border-2 border-white/40"
                  style={{
                    boxShadow: '0 30px 60px -10px rgba(0,0,0,0.4)',
                    transform: 'rotate(-2deg)',
                    animation: 'float 7s ease-in-out infinite',
                  }}
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 60}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
