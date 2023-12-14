import { useContext } from 'react'
import { AsideContext } from '../context/aside'

export function useAside() {
  const context = useContext(AsideContext)

  return context
}
