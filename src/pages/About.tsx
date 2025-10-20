import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { motion } from 'framer-motion'
import siteData from '@/data/site.json'

// Tech logos/icons mapping
const techLogos: Record<string, string> = {
  React: '⚛️',
  'React Native': '📱',
  TailwindCSS: '🎨',
  Java: '☕',
  Android: '🤖',
  'Vue.js': '💚',
  'Next.js': '▲',
  SQL: '🗄️',
  NoSQL: '🍃',
  Git: '🔀',
  Figma: '🎭',
  TypeScript: '📘',
  'Node.js': '🟢',
  REST: '🌐',
  JWT: '🔐',
  Prisma: '⚡',
  Stripe: '💳',
  Docker: '🐋',
}

export function About() {
  const { t } = useTranslation()

  const skillCategories = [
    {
      title: t('about.skills.frontend'),
      skills: ['React', 'React Native', 'Next.js', 'Vue.js', 'TypeScript', 'TailwindCSS'],
    },
    {
      title: t('about.skills.backend'),
      skills: ['Node.js', 'Java', 'REST', 'SQL', 'NoSQL', 'Prisma', 'JWT'],
    },
    {
      title: t('about.skills.tools'),
      skills: ['Git', 'Docker', 'Figma', 'Android', 'Stripe'],
    },
  ]

  return (
    <div className="min-h-screen">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="heading-lg mb-4">{t('about.title')}</h1>
          <p className="text-lg text-neutral-400">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Profile info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <div className="mb-6">
                <img
                  src={siteData.profileImage}
                  alt={siteData.name}
                  className="mx-auto h-48 w-48 rounded-full border-4 border-primary/30 object-cover"
                />
              </div>

              <h2 className="mb-2 text-center text-2xl font-bold">{siteData.name}</h2>
              <p className="mb-4 text-center text-lg text-primary">{siteData.role}</p>
              <p className="mb-6 text-center text-sm text-neutral-400">{siteData.location}</p>

              <div className="space-y-4 text-neutral-300">
                <p>{t('about.description')}</p>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">Compétences clés :</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>Développement full-stack (React, Node.js, Java)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>Applications mobiles (React Native, Android)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>Architecture scalable et bonnes pratiques</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>UI/UX design avec Figma et TailwindCSS</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>Intégrations API et paiements (Stripe)</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">Soft skills :</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>Communication et travail d'équipe</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>Résolution de problèmes créative</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>Apprentissage continu et curiosité</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>Méthodologie Agile</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="mb-6 text-2xl font-bold">{t('about.stackTitle')}</h2>
            
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card>
                    <h3 className="mb-4 text-xl font-bold text-primary">{category.title}</h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="group flex flex-col items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 transition-all hover:border-primary/50 hover:bg-neutral-900"
                        >
                          <span className="text-3xl transition-transform group-hover:scale-110">
                            {techLogos[skill] || '⚙️'}
                          </span>
                          <span className="text-center text-xs font-medium text-neutral-300 group-hover:text-primary">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* All skills badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8"
            >
              <Card>
                <h3 className="mb-4 text-lg font-bold">Toutes les technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {[...siteData.skillsPrimary, ...siteData.skillsSecondary].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

