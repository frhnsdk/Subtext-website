import { Download, Globe } from 'lucide-react'

export default function CTABanner() {
  return (
    <section id="cta" className="py-20 bg-brand-blue relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to message privately?
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
          Join the people who believe their conversations are their own business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[100px] bg-white text-brand-blue font-semibold hover:bg-blue-50 active:scale-95 transition-all duration-200 text-base"
          >
            <Download size={18} />
            Get Subtext for Android
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[100px] border-2 border-white text-white font-semibold hover:bg-white/10 active:scale-95 transition-all duration-200 text-base"
          >
            <Globe size={18} />
            Open Web App
          </a>
        </div>
      </div>
    </section>
  )
}
