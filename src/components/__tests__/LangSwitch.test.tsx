import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LangSwitch } from '../LangSwitch'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'

describe('LangSwitch', () => {
  beforeEach(() => {
    localStorage.clear()
    i18n.changeLanguage('fr')
  })

  it('renders language switch button', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LangSwitch />
      </I18nextProvider>
    )
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('displays current language', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LangSwitch />
      </I18nextProvider>
    )
    
    expect(screen.getByText('FR')).toBeInTheDocument()
  })
})

