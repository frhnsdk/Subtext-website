import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: string
}

export default function FeatureCard({ icon: Icon, title, description, iconColor = 'text-brand-blue' }: FeatureCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(0,0,0,0.08),0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors mb-4 ${iconColor}`}>
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}
