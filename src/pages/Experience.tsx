import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'
import { Timeline } from '@/components/Timeline'
import { motion } from 'framer-motion'
import experienceData from '@/data/experience.json'
import formationData from '@/data/formation.json'

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 dark:text-neutral-100 light:text-neutral-900">{t('formation.title')}</h2>
          <Timeline items={formationData} dataKey="formationData" />
        </motion.div>
      </Section>
    </div>
  )
}

