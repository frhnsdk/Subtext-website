import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconBg?: string
  iconColor?: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBg = 'rgba(37,99,235,0.1)',
  iconColor = '#2563EB',
}: FeatureCardProps) {
  return (
    <div
      className="group bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-200"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.06)' }}
    >
      {/* Icon container */}
      <div
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: iconBg, color: iconColor }}
      >
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}
