'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { label: 'Spaces', href: '#features' },
  { label: 'How it works', href: '#app-preview' },
  { label: 'Privacy', href: '#privacy' },
]

const apkDownloadHref = 'https://github.com/frhnsdk/Subtext-website/releases/download/tag-1/app-release.apk'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="Subtext" className="h-10 md:h-11 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={apkDownloadHref}
            className="btn-primary text-sm"
            style={{ padding: '0.6rem 1.2rem' }}
          >
            <Download size={15} />
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-5 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-700 hover:text-brand-blue py-3 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={apkDownloadHref}
            className="btn-primary text-sm mt-3 self-start"
            style={{ padding: '0.6rem 1.2rem' }}
            onClick={() => setOpen(false)}
          >
            <Download size={15} />
            Download
          </a>
        </div>
      )}
    </header>
  )
}
