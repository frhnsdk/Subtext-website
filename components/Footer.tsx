import { Download } from 'lucide-react'

const apkDownloadHref = 'https://github.com/frhnsdk/Subtext-website/releases/download/tag-1/app-release.apk'

const links = {
  Product: [
    { label: 'Spaces', href: '#features' },
    { label: 'How it works', href: '#app-preview' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Download', href: apkDownloadHref },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Support', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <img src="/logo.png" alt="Subtext" className="h-10 w-auto mb-4" />
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs mb-6">
              Private messaging built on a single rule: your conversations belong to you. Nobody else.
            </p>
            <a
              href={apkDownloadHref}
              className="btn-primary text-sm"
              style={{ padding: '0.6rem 1.25rem' }}
            >
              <Download size={15} />
              Download
            </a>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-slate-400 mb-5">
                {group}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-600 hover:text-brand-blue transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Subtext. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">Private by design.</p>
        </div>
      </div>
    </footer>
  )
}
