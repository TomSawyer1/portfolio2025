import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { Chip } from '@/components/Chip'
import { Search, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import projectsData from '@/data/projects.json'

export function Projects() {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  
  const selectedTag = searchParams.get('tag') || 'all'

  // Récupérer tous les tags uniques
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projectsData.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filtrer les projets
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesTag = selectedTag === 'all' || project.tags.includes(selectedTag)
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.stack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      
      return matchesTag && matchesSearch
    })
  }, [selectedTag, searchQuery])

  const handleTagClick = (tag: string) => {
    if (tag === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ tag })
    }
  }

  return (
    <div className="min-h-screen">
      <Section>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="heading-lg mb-4">{t('projects.title')}</h1>
          <p className="text-lg text-neutral-400">{t('projects.subtitle')}</p>
        </motion.div>

        {/* Barre de recherche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative mx-auto max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder={t('projects.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-12"
              aria-label={t('projects.search')}
            />
          </div>
        </motion.div>

        {/* Filtres par tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-neutral-400">
            <Filter className="h-4 w-4" />
            <p>{t('projects.filter')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Chip
              active={selectedTag === 'all'}
              onClick={() => handleTagClick('all')}
            >
              {t('projects.allProjects')}
            </Chip>
            {allTags.map((tag) => (
              <Chip
                key={tag}
                active={selectedTag === tag}
                onClick={() => handleTagClick(tag)}
              >
                #{tag}
              </Chip>
            ))}
          </div>
        </motion.div>

        {/* Grille de projets */}
        {filteredProjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <div className="mx-auto max-w-md">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="mb-2 text-xl font-bold text-neutral-100">
                {t('projects.noResults')}
              </h3>
              <p className="text-neutral-400">
                Essayez de modifier votre recherche ou vos filtres
              </p>
            </div>
          </motion.div>
        )}

        {/* Compteur de résultats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-neutral-500"
        >
          {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} affiché
          {filteredProjects.length > 1 ? 's' : ''}
        </motion.div>
      </Section>
    </div>
  )
}

