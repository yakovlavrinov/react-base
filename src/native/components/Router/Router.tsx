import { createContext, useContext, useEffect, useState } from 'react'
import { type ReactNode } from 'react'

interface RouterContextType {
  path: string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterContextType>({ path: '/', navigate: () => {} })

interface Props {
  children: ReactNode
}
export const Router = ({ children }: Props) => {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname)
    }
    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  const navigate = (to: string) => {
    window.history.pushState({}, '', to)

    setPath(to)
  }

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>
}

export function useRouter() {
  return useContext(RouterContext)
}
