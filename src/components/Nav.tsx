import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from './ThemeToggle'
import { LangSwitch } from './LangSwitch'
import { cn } from '@/lib/cn'
import { Menu } from '@headlessui/react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { motion } from 'framer-motion'

export function Nav() {
  const { t } = useTranslation()
  const location = useLocation()

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/about', label: t('nav.about') },
    { to: '/experience', label: t('nav.experience') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 border-b border-neutral-800/50 bg-bg-dark/80 backdrop-blur-lg"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="gradient-text">ST</span>
            <span className="text-neutral-100 group-hover:text-primary transition-colors">.</span>
          </span>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                isActive(link.to)
                  ? 'bg-primary/10 text-primary'
                  : 'text-neutral-400 hover:bg-neutral-800/50 hover:text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions à droite */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangSwitch />

          {/* Menu mobile */}
          <Menu as="div" className="relative md:hidden">
            {({ open }) => (
              <>
                <Menu.Button className="btn-ghost h-10 w-10 p-0">
                  {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                </Menu.Button>

                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg border border-neutral-800 bg-card-dark p-2 shadow-xl">
                  {links.map((link) => (
                    <Menu.Item key={link.to}>
                      {({ active }) => (
                        <Link
                          to={link.to}
                          className={cn(
                            'block rounded-md px-4 py-2 text-sm transition-colors',
                            active && 'bg-primary/10 text-primary',
                            isActive(link.to) && 'font-semibold text-primary'
                          )}
                        >
                          {link.label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </>
            )}
          </Menu>
        </div>
      </nav>
    </motion.header>
  )
}

