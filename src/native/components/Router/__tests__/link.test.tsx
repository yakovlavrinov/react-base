import { describe } from 'vitest'
import { Link } from '../Link'
import { Router, useRouter } from '../Router'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

function TestPage() {
  const { path } = useRouter()

  return (
    <>
      <Link to="/test">Go</Link>
      <span data-testid='path'>{path}</span>
    </>
  )
}

describe('Link', () => {
  it('navigates without reload', async () => {
    const user = userEvent.setup()

    render(
      <Router>
        <TestPage />
      </Router>,
    )

    expect(screen.getByTestId('path')).toHaveTextContent('/')

    await user.click(screen.getByText('Go'))

    expect(screen.getByTestId('path')).toHaveTextContent('/test')
  })
})
