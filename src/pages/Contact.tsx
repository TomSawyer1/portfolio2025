import { useTranslation } from 'react-i18next'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Copy, Check } from 'lucide-react'
import siteData from '@/data/site.json'
import { useState } from 'react'

export function Contact() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteData.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: siteData.email,
      href: `mailto:${siteData.email}`,
      action: copyEmail,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@spencerthomas',
      href: siteData.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Spencer Thomas',
      href: siteData.linkedin,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: siteData.location,
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
          <h1 className="heading-lg mb-4">{t('contact.title')}</h1>
          <p className="text-lg text-neutral-400">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <h2 className="mb-6 text-xl font-bold">Coordonnées</h2>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <div
                    key={method.label}
                    className="group flex items-start gap-4 rounded-lg border border-neutral-800 p-4 transition-all hover:border-primary/50 hover:bg-neutral-900/50"
                  >
                    <div className="rounded-lg bg-primary/10 p-3">
                      <method.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm font-medium text-neutral-400">{method.label}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-medium text-neutral-100 hover:text-primary transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="font-medium text-neutral-100">{method.value}</p>
                      )}
                    </div>
                    {method.action && (
                      <button
                        onClick={method.action}
                        className="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-primary/10 hover:text-primary"
                        title={t('contact.copyEmail')}
                      >
                        {copied ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="mb-4 text-xl font-bold">Disponibilité</h2>
              <p className="mb-4 text-neutral-300">
                Je suis actuellement <span className="font-semibold text-primary">disponible</span>{' '}
                pour de nouvelles opportunités et collaborations.
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                <span className="text-sm text-neutral-400">
                  Répond généralement en moins de 24h
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <h2 className="mb-6 text-xl font-bold">Envoyez-moi un message</h2>
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

