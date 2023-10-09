import { createContext, useState } from 'react'

export const AsideContext = createContext()

export function AsideProvider({ children }) {
  const [aside, setAside] = useState(false)
  const [chevronsForTasks, setChevronsForTasks] = useState(false)

  return (
    <AsideContext.Provider value={{ aside, setAside, chevronsForTasks, setChevronsForTasks }}>
      {children}
    </AsideContext.Provider>
  )
}
