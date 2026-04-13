const badges = [
  { label: 'Flutter', sub: 'Android APK release' },
  { label: 'Firebase', sub: 'Firestore · Auth · FCM' },
  { label: 'X25519 + AES-GCM', sub: '256-bit encryption' },
  { label: 'Signal-style', sub: 'Per-message ephemeral keys' },
]

export default function TechSection() {
  return (
    <section id="tech" className="section-pad bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-200">Under the Hood</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Built on proven technology.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Open architecture. Real cryptography. Android-first delivery.
          </p>

          {/* Badge grid */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-start px-5 py-4 rounded-2xl bg-brand-dark-card border border-white/10 hover:border-brand-blue/40 transition-all duration-200 text-left min-w-40"
              >
                <span className="font-semibold text-white text-sm">{badge.label}</span>
                <span className="text-xs text-gray-300 mt-0.5">{badge.sub}</span>
              </div>
            ))}
          </div>

          {/* Copy */}
          <p className="mt-10 text-base text-gray-300 leading-relaxed">
            The cryptography layer is abstracted behind a clean{' '}
            <code className="text-sm font-mono bg-white/10 px-1.5 py-0.5 rounded text-blue-100">CryptoService</code>{' '}
            interface — making it straightforward to upgrade to a full Double Ratchet protocol in the future without touching message or UI code.
          </p>
        </div>
      </div>
    </section>
  )
}
