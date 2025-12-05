import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router, useRouter } from '../Router'

const TestComponent = () => {
  const { path, navigate } = useRouter()

  return (
    <div>
      <span data-testid="path">{path}</span>
      <button onClick={() => navigate('/new')}>Go</button>
    </div>
  )
}

describe('Router', () => {
  it('update path after navigate()', async () => {
    const user = userEvent.setup()

    render(
      <Router>
        <TestComponent />
      </Router>,
    )

    expect(screen.getByTestId('path')).toHaveTextContent('/')

    await user.click(screen.getByText('Go'))

    expect(screen.getByTestId('path')).toHaveTextContent('/new')
  })
})
