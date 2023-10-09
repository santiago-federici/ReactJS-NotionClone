import { createContext, useState } from 'react'

export const AsideContext = createContext()

export function AsideProvider({ children }) {
  const [groupAside, setGroupAside] = useState(false)
  const [taskAside, setTaskAside] = useState(false)
  const [chevronsForTasks, setChevronsForTasks] = useState(false)

  return (
    <AsideContext.Provider value={{ groupAside, setGroupAside, chevronsForTasks, setChevronsForTasks, taskAside, setTaskAside }}>
      {children}
    </AsideContext.Provider>
  )
}
