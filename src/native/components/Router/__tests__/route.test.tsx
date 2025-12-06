import { render, screen } from '@testing-library/react'
import { describe } from 'vitest'
import { Router } from '../Router'
import { Route } from '../Route'

describe('Route', () => {
  const renderRoute = (pathname: string) => {
    Object.defineProperty(window, 'location', {
      value: {
        pathname,
      },
      configurable: true,
    })

    render(
      <Router>
        <Route path="/about" component={<h1 data-testid="about">About</h1>} />
      </Router>,
    )
  }

  it('renders component when path matches', () => {
    renderRoute('/about')

    expect(screen.getByTestId('about')).toBeInTheDocument()
  })

  it('does NOT render component when path does not match', () => {
    renderRoute('/')

    expect(screen.queryByTestId('about')).toBeNull()
  })
})
