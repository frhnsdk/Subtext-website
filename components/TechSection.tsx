const badges = [
  { label: 'Flutter', sub: 'Android · iOS · Web' },
  { label: 'Firebase', sub: 'Firestore · Auth · FCM' },
  { label: 'X25519 + AES-GCM', sub: '256-bit encryption' },
  { label: 'Signal-style', sub: 'Per-message ephemeral keys' },
]

export default function TechSection() {
  return (
    <section id="tech" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Under the Hood</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Built on proven technology.
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Open architecture. Real cryptography. Cross-platform from day one.
          </p>

          {/* Badge grid */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-start px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue/30 hover:bg-blue-50/40 transition-all duration-200 text-left min-w-[160px]"
              >
                <span className="font-semibold text-gray-900 text-sm">{badge.label}</span>
                <span className="text-xs text-gray-400 mt-0.5">{badge.sub}</span>
              </div>
            ))}
          </div>

          {/* Copy */}
          <p className="mt-10 text-base text-gray-500 leading-relaxed">
            The cryptography layer is abstracted behind a clean{' '}
            <code className="text-sm font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">CryptoService</code>{' '}
            interface — making it straightforward to upgrade to a full Double Ratchet protocol in the future without touching message or UI code.
          </p>
        </div>
      </div>
    </section>
  )
}
