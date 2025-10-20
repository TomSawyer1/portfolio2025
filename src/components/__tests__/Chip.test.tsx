import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Chip } from '../Chip'

describe('Chip', () => {
  it('affiche le contenu correctement', () => {
    render(<Chip>Test Chip</Chip>)
    expect(screen.getByText('Test Chip')).toBeInTheDocument()
  })

  it('applique la classe active quand le prop active est true', () => {
    render(<Chip active={true}>Active Chip</Chip>)
    const chip = screen.getByText('Active Chip')
    expect(chip.className).toContain('bg-primary/20')
  })

  it('appelle onClick quand on clique', () => {
    const handleClick = vi.fn()
    render(<Chip onClick={handleClick}>Clickable Chip</Chip>)
    
    const chip = screen.getByText('Clickable Chip')
    fireEvent.click(chip)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applique la classe cursor-pointer quand onClick est fourni', () => {
    const handleClick = vi.fn()
    render(<Chip onClick={handleClick}>Clickable</Chip>)
    
    const chip = screen.getByText('Clickable')
    expect(chip.className).toContain('cursor-pointer')
  })

  it('n\'applique pas cursor-pointer quand onClick n\'est pas fourni', () => {
    render(<Chip>Non clickable</Chip>)
    
    const chip = screen.getByText('Non clickable')
    expect(chip.className).not.toContain('cursor-pointer')
  })
})

