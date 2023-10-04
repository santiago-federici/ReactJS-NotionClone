import { useState } from 'react'

export function useTaskModal() {
  const [taskModal, setTaskModal] = useState(false)

  return { taskModal, setTaskModal }
}
