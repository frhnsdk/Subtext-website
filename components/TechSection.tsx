const stack = [
  {
    name: 'Flutter',
    desc: 'Android APK · cross-platform ready',
    icon: '⚡',
    color: '#54C5F8',
  },
  {
    name: 'Firebase',
    desc: 'Firestore · Auth · Cloud Messaging',
    icon: '🔥',
    color: '#FFCA28',
  },
  {
    name: 'X25519 + AES-GCM',
    desc: '256-bit end-to-end encryption',
    icon: '🔐',
    color: '#10B981',
  },
  {
    name: 'Signal-style Keys',
    desc: 'Per-message ephemeral key pairs',
    icon: '🗝️',
    color: '#A78BFA',
  },
]

export default function TechSection() {
  return (
    <section id="tech" className="section-pad bg-brand-dark relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(37,99,235,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-green">
            Under the Hood
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Built on proven,{' '}
            <span className="gradient-text">battle-tested tech.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Real cryptography. Open architecture. Android-first delivery.
          </p>
        </div>

        {/* Stack cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stack.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-2xl p-6 border border-white/8 bg-brand-dark-card hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
            >
              {/* Colored top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: item.color }}
              />
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-white text-sm mb-1">{item.name}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Architecture note */}
        <div
          className="rounded-2xl border border-white/8 bg-brand-dark-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
        >
          <div
            className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
            style={{ background: 'rgba(37,99,235,0.15)' }}
          >
            🏗️
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Clean crypto abstraction</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              The cryptography layer sits behind a clean{' '}
              <code className="text-xs font-mono bg-white/10 px-1.5 py-0.5 rounded text-blue-200">
                CryptoService
              </code>{' '}
              interface — making it straightforward to upgrade to a full Double Ratchet protocol
              without touching message or UI code.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
