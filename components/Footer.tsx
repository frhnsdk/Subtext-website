const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Tech', href: '#tech' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-lg font-semibold text-brand-blue">subtext</span>
            <span className="text-xs text-gray-500">Private by design.</span>
          </div>

          {/* Nav links */}
          <nav className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} subtext. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
