import { useEffect } from 'react'
import { type ReactNode } from 'react'
import styles from './Modal.module.css'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEsc)

    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  if (!isOpen) return null

  return (
    <div onClick={onClose} className={styles.overlay}>
      <div onClick={(event) => event.stopPropagation()} className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}
