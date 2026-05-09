import { ShieldCheck, HardDrive, EyeOff, Ban } from 'lucide-react'
import Reveal from './Reveal'

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Encrypted on your device',
    description:
      'Your messages are scrambled before they ever leave your phone. Nobody, anywhere, can read them — except the person you sent them to.',
    color: '#2563EB',
  },
  {
    icon: HardDrive,
    title: 'Your data stays yours',
    description:
      'Infinity Space passwords never leave your device. Your hidden conversations are locked locally — outside our reach, always.',
    color: '#10B981',
  },
  {
    icon: EyeOff,
    title: 'Be invisible when you want',
    description:
      'Hide your online status with a single tap. No one knows when you\'re around unless you choose to let them.',
    color: '#9333EA',
  },
  {
    icon: Ban,
    title: 'Block anyone, instantly',
    description:
      'Mute, block, remove. Your social space is yours to control — no questions asked, no explanations needed.',
    color: '#DB2777',
  },
]

export default function PrivacySection() {
  return (
    <section
      id="privacy"
      className="section-pad relative bg-brand-gray-1 overflow-hidden"
    >
      {/* Soft accent blobs */}
      <div
        className="blob"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
          top: '10%',
          left: '-150px',
          animation: 'blob 24s ease-in-out infinite',
        }}
      />
      <div
        className="blob"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)',
          bottom: '5%',
          right: '-100px',
          animation: 'blob 28s ease-in-out infinite reverse',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-blue">
              Privacy
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink tracking-tight leading-[1.1]">
              Your conversations{' '}
              <span className="gradient-text">stay yours.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We built Subtext on a single rule: your private life is not anyone else's business. Here's how we keep that promise.
            </p>
          </div>
        </Reveal>

        {/* Trust points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {trustPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 80}>
              <div
                className="group card-lift bg-white rounded-3xl p-7 border border-slate-200 hover:border-brand-blue/40 hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.15)] h-full"
                style={{ boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}
              >
                <div className="flex gap-4">
                  <div
                    className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `${point.color}15`, color: point.color }}
                  >
                    <point.icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-ink mb-1.5 tracking-tight">
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Promise card */}
        <Reveal delay={400}>
          <div className="mt-16 max-w-3xl mx-auto text-center rounded-3xl p-8 sm:p-10 border border-slate-200 bg-white">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
              style={{ background: '#EFF6FF', color: '#2563EB' }}
            >
              <ShieldCheck size={26} strokeWidth={2} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-ink tracking-tight mb-3">
              Privacy isn't a feature. It's the whole point.
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We don't sell your data. We don't read your messages. We don't have ads. Subtext is built for the people who use it — that's the only metric that matters to us.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
