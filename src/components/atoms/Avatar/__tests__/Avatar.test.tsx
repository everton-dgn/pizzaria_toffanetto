import { screen } from '@testing-library/react'
import { renderWithProviders } from 'tests/providerComponent'

import { Avatar } from '..'

describe('[Component] Avatar', () => {
  it('Should show a placeholder text if image profile is not passed', () => {
    renderWithProviders(<Avatar name="Linus Torvalds" />)

    const textElement = screen.getByText('LT')
    const imageElement = screen.queryByRole('img')

    expect(textElement).toBeInTheDocument()
    expect(imageElement).not.toBeInTheDocument()
  })

  it('Should show the first letter of the first and last name without accent', () => {
    renderWithProviders(<Avatar name="Érmer Írvick" />)

    const textElement = screen.getByText('EI')
    const imageElement = screen.queryByRole('img')

    expect(textElement).toBeInTheDocument()
    expect(imageElement).not.toBeInTheDocument()
  })
})
