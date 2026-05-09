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
  iconBg = '#EFF6FF',
  iconColor = '#2563EB',
}: FeatureCardProps) {
  return (
    <div
      className="group card-lift bg-white rounded-3xl p-7 border border-slate-200 hover:border-brand-blue/40 hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.15)]"
      style={{ boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}
    >
      <div
        className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{ background: iconBg, color: iconColor }}
      >
        <Icon size={22} strokeWidth={2} />
      </div>

      <h3 className="text-lg font-bold text-brand-ink mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}
