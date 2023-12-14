import { createContext, useState } from 'react'

export const AsideContext = createContext()

export function AsideProvider({ children }) {
  const [selectedGroupId, setSelectedGroupId] = useState(null)
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [chevronsForTasks, setChevronsForTasks] = useState(false)

  const openGroupAside = (groupId) => {
    setSelectedGroupId(groupId)
    setSelectedTaskId(null)
    setChevronsForTasks(false)
  }

  const openTaskAside = (taskId) => {
    setSelectedGroupId(null)
    setSelectedTaskId(taskId)
    setChevronsForTasks(true)
  }

  const closeAsides = () => {
    setSelectedGroupId(null)
    setSelectedTaskId(null)
  }

  return (
    <AsideContext.Provider value={
      {
        chevronsForTasks,
        openGroupAside,
        openTaskAside,
        closeAsides,
        selectedTaskId,
        selectedGroupId
      }}>

      {children}
    </AsideContext.Provider>
  )
}
