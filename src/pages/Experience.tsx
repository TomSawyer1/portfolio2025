import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'
import { Timeline } from '@/components/Timeline'
import { motion } from 'framer-motion'
import experienceData from '@/data/experience.json'

export function Experience() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="heading-lg mb-4 dark:text-neutral-100 light:text-neutral-900">{t('experience.title')}</h1>
          <p className="text-lg text-neutral-400 dark:text-neutral-400 light:text-neutral-700">{t('experience.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Timeline items={experienceData} />
        </motion.div>
      </Section>
    </div>
  )
}

