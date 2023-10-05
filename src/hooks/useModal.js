import { useContext } from 'react'
import { ModalContext } from '../context/modal'

export function useModal() {
  const context = useContext(ModalContext)

  return context
}
