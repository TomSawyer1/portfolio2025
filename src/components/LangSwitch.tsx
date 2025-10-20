import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'
import { Menu } from '@headlessui/react'
import { cn } from '@/lib/cn'

export function LangSwitch() {
  const { i18n, t } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="btn-ghost relative h-10 gap-1 px-3">
        <Languages className="h-4 w-4" />
        <span className="text-sm font-semibold uppercase">{i18n.language}</span>
      </Menu.Button>

      <Menu.Items className="absolute right-0 z-50 mt-2 w-32 origin-top-right rounded-lg border border-neutral-800 bg-card-dark p-1 shadow-xl focus:outline-none dark:border-neutral-800 dark:bg-card-dark light:border-neutral-300 light:bg-white light:shadow-lg">
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={() => changeLanguage('fr')}
              className={cn(
                'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                active && 'bg-primary/10 text-primary dark:bg-primary-dark/10 dark:text-primary-dark light:bg-primary-light/10 light:text-primary-light',
                i18n.language === 'fr' && 'font-semibold text-primary dark:text-primary-dark light:text-primary-light',
                !active && i18n.language !== 'fr' && 'text-neutral-300 dark:text-neutral-300 light:text-neutral-700'
              )}
            >
              🇫🇷 {t('language.fr')}
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={() => changeLanguage('en')}
              className={cn(
                'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                active && 'bg-primary/10 text-primary dark:bg-primary-dark/10 dark:text-primary-dark light:bg-primary-light/10 light:text-primary-light',
                i18n.language === 'en' && 'font-semibold text-primary dark:text-primary-dark light:text-primary-light',
                !active && i18n.language !== 'en' && 'text-neutral-300 dark:text-neutral-300 light:text-neutral-700'
              )}
            >
              🇬🇧 {t('language.en')}
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

