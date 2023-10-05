import { createContext, useState } from 'react'

export const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(false)
  const [chevronsForTasks, setChevronsForTasks] = useState(false)

  return (
    <ModalContext.Provider value={{ modal, setModal, chevronsForTasks, setChevronsForTasks }}>
      {children}
    </ModalContext.Provider>
  )
}
