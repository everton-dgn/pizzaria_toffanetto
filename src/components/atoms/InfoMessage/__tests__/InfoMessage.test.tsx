import { screen } from '@testing-library/react'
import { renderWithProviders } from 'tests/providers'

import { InfoMessage } from '..'

describe('[Component] InfoMessage', () => {
  it('Should render error state', () => {
    renderWithProviders(<InfoMessage type="error" message="Error" />)

    const icon = screen.getByRole('img')
    const errorMessage = screen.getByText(/error/i)
    expect(errorMessage).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('Should render info state', () => {
    renderWithProviders(<InfoMessage type="info" message="info" />)

    const icon = screen.getByRole('img')
    const errorMessage = screen.getByText(/info/i)
    expect(errorMessage).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('Should render success state', () => {
    renderWithProviders(<InfoMessage type="success" message="success" />)

    const icon = screen.getByRole('img')
    const errorMessage = screen.getByText(/success/i)
    expect(errorMessage).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('Should render warning state', () => {
    renderWithProviders(<InfoMessage type="warning" message="warning" />)

    const icon = screen.getByRole('img')
    const errorMessage = screen.getByText(/warning/i)
    expect(errorMessage).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
