import { Card } from './Card'
import { useTranslation } from 'react-i18next'
import { MapPin, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

interface TimelineItem {
  id: string
  title: string
  company: string
  location: string
  from: string
  to: string
  highlights: string[]
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  const { t } = useTranslation()

  const formatDate = (date: string) => {
    if (date === 'present') return t('experience.present')
    const [year, month] = date.split('-')
    return `${month}/${year}`
  }

  return (
    <div className="relative space-y-8">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-600 to-transparent md:left-1/2" />

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative flex flex-col gap-4 md:flex-row md:gap-8"
        >
          {/* Dot */}
          <div className="absolute left-0 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-bg-dark md:left-1/2" />

          {/* Content */}
          <div className={cn('w-full md:w-1/2', index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto')}>
            <Card>
              <div className="mb-4">
                <h3 className="mb-1 text-xl font-bold text-neutral-100">{item.title}</h3>
                <p className="text-lg font-semibold text-primary">{item.company}</p>
              </div>

              <div className="mb-4 flex flex-wrap gap-4 text-sm text-neutral-400">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(item.from)} — {formatDate(item.to)}
                </span>
              </div>

              <ul className="space-y-2">
                {item.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2 text-sm text-neutral-300">
                    <span className="text-primary">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

