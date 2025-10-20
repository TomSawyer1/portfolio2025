import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Code2, Rocket, Zap } from 'lucide-react'
import siteData from '@/data/site.json'
import { Link } from 'react-router-dom'
import { useTheme } from '@/lib/useTheme'

export function Home() {
  const { t } = useTranslation()
  const theme = useTheme()

  const stats = [
    { label: t('home.statsYears'), value: siteData.stats.yearsExperience, icon: Zap },
    { label: t('home.statsProjects'), value: siteData.stats.projectsCompleted, icon: Rocket },
    { label: t('home.statsTech'), value: siteData.stats.technologies, icon: Code2 },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-background opacity-30" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/50 to-bg-dark" />

        <div className="section relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary dark:border-primary-dark/30 dark:bg-primary-dark/5 dark:text-primary-dark light:border-primary-light/30 light:bg-primary-light/5 light:text-primary-light">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-primary-dark light:bg-primary-light"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary dark:bg-primary-dark light:bg-primary-light"></span>
                  </span>
                  {t('nav.home')} — {siteData.location}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="heading-xl mb-6"
              >
                {t('home.title', { name: siteData.name })}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-4 text-2xl font-semibold gradient-text"
              >
                {siteData.role}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8 text-lg text-neutral-400 max-w-xl dark:text-neutral-400 light:text-neutral-700"
              >
                {t('home.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-primary">
                  {t('home.ctaPrimary')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a href={siteData.resumeUrl} download className="btn-secondary">
                  <Download className="h-5 w-5" />
                  {t('home.ctaSecondary')}
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="relative mx-auto aspect-square w-full max-w-md">
                {/* Glow effect - BVB yellow in dark, Arsenal red in light */}
                <div className={`absolute inset-0 rounded-full blur-3xl opacity-20 animate-pulse ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-primary-dark via-primary-dark-600 to-primary-dark' 
                    : 'bg-gradient-to-r from-primary-light via-primary-light-600 to-primary-light'
                }`} />
                
                {/* Ring - BVB yellow in dark, Arsenal red in light */}
                <div className={`absolute inset-0 rounded-full border-4 animate-pulse ${
                  theme === 'dark' ? 'border-primary-dark/30' : 'border-primary-light/30'
                }`} />
                <div className={`absolute inset-4 rounded-full border-2 ${
                  theme === 'dark' ? 'border-primary-dark/20' : 'border-primary-light/20'
                }`} />
                
                {/* Image - Change based on theme */}
                <img
                  src={theme === 'dark' ? '/images/thomasbvb.jpg' : '/images/thomasarsenal.jpg'}
                  alt={siteData.name}
                  className="relative z-10 h-full w-full rounded-full object-cover p-2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="bg-card-dark/50 dark:bg-card-dark/50 light:bg-neutral-50">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-card-dark p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 dark:border-neutral-800 dark:bg-card-dark light:border-neutral-300 light:bg-white light:shadow-md light:hover:border-primary-light/60 light:hover:shadow-primary-light/20"
            >
              <stat.icon className="mx-auto mb-4 h-10 w-10 text-primary transition-transform group-hover:scale-110 dark:text-primary-dark light:text-primary-light" />
              <p className="mb-2 text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Quick Links */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="heading-md mb-6">
            {t('home.discoverJourney').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{t('home.discoverJourney').split(' ').pop()}</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="btn-primary">
              {t('home.viewProjects')}
            </Link>
            <Link to="/about" className="btn-secondary">
              {t('home.learnMore')}
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

