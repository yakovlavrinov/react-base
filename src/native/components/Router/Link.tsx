import type { ReactNode, MouseEvent } from 'react'
import { useRouter } from './Router'

interface Props {
  to: string
  children: ReactNode
}
export const Link = ({ to, children }: Props) => {
  const { navigate } = useRouter()

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()

    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  )
}
