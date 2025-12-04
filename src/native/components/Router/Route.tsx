import type { JSX } from 'react'
import { useRouter } from './Router'

interface Props {
  path: string
  component: JSX.Element
}

export const Route = ({ path, component }: Props) => {
  const { path: currentPath } = useRouter()

  return currentPath === path ? component : null
}
