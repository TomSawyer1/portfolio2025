import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { motion } from 'framer-motion'
import siteData from '@/data/site.json'
import { useTheme } from '@/lib/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faReact, 
  faNode, 
  faVuejs, 
  faJava, 
  faAndroid, 
  faDocker, 
  faGitAlt, 
  faFigma,
  faStripe
} from '@fortawesome/free-brands-svg-icons'
import { 
  faMobileAlt, 
  faPalette, 
  faDatabase, 
  faLeaf, 
  faTriangleExclamation, 
  faBook, 
  faGlobe, 
  faLock, 
  faBolt, 
  faCode,
  faLaptopCode,
  faMobile,
  faUsers,
  faLightbulb,
  faGraduationCap,
  faListCheck
} from '@fortawesome/free-solid-svg-icons'

// Tech logos/icons mapping
const techLogos: Record<string, any> = {
  React: faReact,
  'React Native': faMobileAlt,
  TailwindCSS: faPalette,
  Java: faJava,
  Android: faAndroid,
  'Vue.js': faVuejs,
  'Next.js': faTriangleExclamation, // Next.js n'a pas d'icône officielle FA
  SQL: faDatabase,
  NoSQL: faLeaf,
  Git: faGitAlt,
  Figma: faFigma,
  TypeScript: faBook,
  'Node.js': faNode,
  REST: faGlobe,
  JWT: faLock,
  Prisma: faBolt,
  Stripe: faStripe,
  Docker: faDocker,
}

export function About() {
  const { t } = useTranslation()
  const theme = useTheme()

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
                  src={theme === 'dark' ? '/images/thomasbvb.jpg' : '/images/thomasarsenal.jpg'}
                  alt={siteData.name}
                  className={`mx-auto h-48 w-48 rounded-full border-4 object-cover ${
                    theme === 'dark' ? 'border-primary-dark/30' : 'border-primary-light/30'
                  }`}
                />
              </div>

              <h2 className="mb-2 text-center text-2xl font-bold dark:text-neutral-100 light:text-neutral-900">{siteData.name}</h2>
              <p className={`mb-4 text-center text-lg ${
                theme === 'dark' ? 'text-primary-dark' : 'text-primary-light'
              }`}>{siteData.role}</p>
              <p className="mb-6 text-center text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600">{siteData.location}</p>

              <div className="space-y-4 text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
                <p>{t('about.description')}</p>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary dark:text-primary-dark light:text-primary-light">Compétences clés :</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2 items-start">
                      <FontAwesomeIcon icon={faLaptopCode} className="text-primary dark:text-primary-dark light:text-primary-light mt-1 flex-shrink-0" />
                      <span>Développement full-stack (React, Node.js, Java)</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <FontAwesomeIcon icon={faMobile} className="text-primary dark:text-primary-dark light:text-primary-light mt-1 flex-shrink-0" />
                      <span>Applications mobiles (React Native, Android)</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <FontAwesomeIcon icon={faCode} className="text-primary dark:text-primary-dark light:text-primary-light mt-1 flex-shrink-0" />
                      <span>Architecture scalable et bonnes pratiques</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <FontAwesomeIcon icon={faPalette} className="text-primary dark:text-primary-dark light:text-primary-light mt-1 flex-shrink-0" />
                      <span>UI/UX design avec Figma et TailwindCSS</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <FontAwesomeIcon icon={faGlobe} className="text-primary dark:text-primary-dark light:text-primary-light mt-1 flex-shrink-0" />
                      <span>Intégrations API et paiements (Stripe)</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-primary dark:text-primary-dark light:text-primary-light">Soft skills :</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2 items-start">
                      <FontAwesomeIcon icon={faUsers} className="text-primary dark:text-primary-dark light:text-primary-light mt-1 flex-shrink-0" />
                      <span>Communication et travail d'équipe</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <FontAwesomeIcon icon={faLightbulb} className="text-primary dark:text-primary-dark light:text-primary-light mt-1 flex-shrink-0" />
                      <span>Résolution de problèmes créative</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-primary dark:text-primary-dark light:text-primary-light mt-1 flex-shrink-0" />
                      <span>Apprentissage continu et curiosité</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <FontAwesomeIcon icon={faListCheck} className="text-primary dark:text-primary-dark light:text-primary-light mt-1 flex-shrink-0" />
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
            <h2 className="mb-6 text-2xl font-bold dark:text-neutral-100 light:text-neutral-900">{t('about.stackTitle')}</h2>
            
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card>
                    <h3 className="mb-4 text-xl font-bold text-primary dark:text-primary-dark light:text-primary-light">{category.title}</h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="group flex flex-col items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 transition-all hover:border-primary/50 hover:bg-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-primary-dark/50 light:border-neutral-300 light:bg-neutral-50 light:hover:border-primary-light/50 light:hover:bg-neutral-100"
                        >
                          <FontAwesomeIcon 
                            icon={techLogos[skill] || faCode} 
                            className="text-3xl transition-transform group-hover:scale-110 text-primary dark:text-primary-dark light:text-primary-light"
                          />
                          <span className="text-center text-xs font-medium text-neutral-300 group-hover:text-primary dark:text-neutral-300 dark:group-hover:text-primary-dark light:text-neutral-700 light:group-hover:text-primary-light">
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
                <h3 className="mb-4 text-lg font-bold dark:text-neutral-100 light:text-neutral-900">Toutes les technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {[...siteData.skillsPrimary, ...siteData.skillsSecondary].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm font-medium text-primary dark:border-primary-dark/30 dark:bg-primary-dark/5 dark:text-primary-dark light:border-primary-light/40 light:bg-primary-light/10 light:text-primary-light"
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

