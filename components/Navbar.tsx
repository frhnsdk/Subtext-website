'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Tech', href: '#tech' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm border-b border-white/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-semibold text-brand-blue tracking-tight select-none">
          subtext
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#cta"
          className="hidden md:inline-flex btn-gradient"
          style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
        >
          Get the App
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{ minWidth: 44, minHeight: 44 }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-gray-800 py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="btn-primary text-sm self-start"
            onClick={() => setOpen(false)}
          >
            Get the App
          </a>
        </div>
      )}
    </header>
  )
}
