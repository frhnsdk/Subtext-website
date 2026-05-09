import { Download, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const apkDownloadHref = 'https://github.com/frhnsdk/Subtext-website/releases/download/tag-1/app-release.apk'

export default function CTABanner() {
  return (
    <section id="cta" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="relative rounded-[2.5rem] overflow-hidden p-10 sm:p-14 lg:p-20 text-center"
            style={{
              background:
                'linear-gradient(135deg, #1D4ED8 0%, #2563EB 40%, #3B82F6 100%)',
              boxShadow: '0 40px 80px -20px rgba(37,99,235,0.5)',
            }}
          >
            {/* Pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-15"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '36px 36px',
              }}
            />
            {/* Glow corners */}
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 60%)',
                transform: 'translate(30%, -40%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(96,165,250,0.25) 0%, transparent 60%)',
                transform: 'translate(-30%, 40%)',
              }}
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-sm text-white border border-white/25 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available now · Free for everyone
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                Ready for messaging
                <br />
                that's actually private?
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed">
                Join thousands taking their conversations back. Download Subtext and start chatting on your terms.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <a
                  href={apkDownloadHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-blue font-semibold text-base hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-[0_12px_28px_-8px_rgba(0,0,0,0.25)]"
                >
                  <Download size={18} />
                  Download for Android
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-1.5 text-white/90 font-semibold text-base hover:text-white hover:gap-3 transition-all px-2"
                >
                  Learn more
                  <ArrowRight size={16} />
                </a>
              </div>

              <p className="mt-6 text-xs text-blue-200">
                No account needed to try · Free forever · No tracking
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
