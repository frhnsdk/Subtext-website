import { Download } from 'lucide-react'

const apkDownloadHref = process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL || '#'

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
          Ready to unlock Infinity Space?
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
          Download the latest Android APK and start organizing your private chats with Infinity Space.
        </p>
        <div className="flex justify-center">
          <a href={apkDownloadHref} className="btn-white-cta">
            <Download size={18} />
            Download APK
          </a>
        </div>
      </div>
    </section>
  )
}
