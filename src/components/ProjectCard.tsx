import { Card } from './Card'
import { Chip } from './Chip'
import { Github, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface ProjectCardProps {
  title: string
  summary: string
  stack: string[]
  tags: string[]
  github?: string
  demo?: string
}

export function ProjectCard({ title, summary, stack, tags, github, demo }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <Card className="group flex h-full flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-bold text-neutral-100 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-neutral-400">{summary}</p>
      </div>

      {/* Stack */}
      <div className="mb-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-neutral-800/50 px-2 py-1 text-xs font-medium text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Chip key={tag}>#{tag}</Chip>
        ))}
      </div>

      {/* Links */}
      <div className="mt-auto flex gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-neutral-400 transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" />
            {t('projects.viewGithub')}
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-neutral-400 transition-colors hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
            {t('projects.viewDemo')}
          </a>
        )}
      </div>
    </Card>
  )
}

