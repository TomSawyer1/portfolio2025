import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import frCommon from '@/i18n/fr/common.json'
import enCommon from '@/i18n/en/common.json'

const resources = {
  fr: {
    common: frCommon,
  },
  en: {
    common: enCommon,
  },
}

const savedLanguage = localStorage.getItem('language') || 'fr'

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: 'fr',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

