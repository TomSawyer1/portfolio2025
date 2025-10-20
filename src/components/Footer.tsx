import { useTranslation } from 'react-i18next'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import siteData from '@/data/site.json'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: Github, href: siteData.github, label: 'GitHub' },
    { icon: Linkedin, href: siteData.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${siteData.email}`, label: 'Email' },
  ]

  return (
    <footer className="border-t border-neutral-800/50 bg-card-dark dark:border-neutral-800/50 dark:bg-card-dark light:border-neutral-300 light:bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
            © {currentYear} {siteData.name}. {t('footer.rights')}.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-primary dark:text-neutral-400 dark:hover:text-primary-dark light:text-neutral-600 light:hover:text-primary-light"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Made with love */}
          <p className="flex items-center gap-1 text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
            {t('footer.madeWith')}{' '}
            <Heart className="h-4 w-4 fill-primary text-primary dark:fill-primary-dark dark:text-primary-dark light:fill-primary-light light:text-primary-light" /> {t('footer.by')}{' '}
            <span className="font-semibold text-primary dark:text-primary-dark light:text-primary-light">{siteData.name}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

