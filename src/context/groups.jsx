import { createContext, useState } from 'react'
import { nanoid } from 'nanoid'

export const GroupsContext = createContext()

export function GroupsProvider({ children }) {
  const [groups, setGroups] = useState([])

  const handleNewGroup = () => {
    const newGroup = {
      id: nanoid(),
      groupName: 'New Group',
      tasks: []
    }

    setGroups([...groups, newGroup])
  }

  const handleNewTask = (e, id) => {
    const newTask = {
      id: nanoid(),
      taskName: 'Task',
      taskStatus: 'To Do',
      taskDue: '',
      taskPriority: ''
    }

    // Checks which of the "add task" button is, and specifies the position where the task has to be added at
    if (e.target.innerHTML.includes('New')) {
      setGroups(groups.map(group => {
        if (group.id === id) {
          return {
            ...group,
            tasks: [...group.tasks, newTask]
          }
        } else {
          return group
        }
      }))
    } else {
      setGroups(groups.map(group => {
        if (group.id === id) {
          return {
            ...group,
            tasks: [newTask, ...group.tasks]
          }
        } else {
          return group
        }
      }))
    }
  }

  const updateGroupName = (id, newGroupName) => {
    setGroups(groups.map(group => {
      if (group.id === id) {
        return {
          ...group,
          groupName: newGroupName
        }
      } else {
        return group
      }
    }))
  }

  const updateTaskName = (groupId, taskId, newTaskName) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          tasks: group.tasks.map(task => {
            if (task.id === taskId) {
              return {
                ...task,
                taskName: newTaskName
              }
            } else {
              return task
            }
          })
        }
      } else {
        return group
      }
    }))
  }

  const updateTaskStatus = (groupId, taskId, newTaskStatus) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          tasks: group.tasks.map(task => {
            if (task.id === taskId) {
              return {
                ...task,
                taskStatus: newTaskStatus
              }
            } else {
              return task
            }
          })
        }
      } else {
        return group
      }
    }))
  }

  const updateTaskPriority = (groupId, taskId, newTaskPriority) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          tasks: group.tasks.map(task => {
            if (task.id === taskId) {
              return {
                ...task,
                taskPriority: newTaskPriority
              }
            } else {
              return task
            }
          })
        }
      } else {
        return group
      }
    }))
  }

  return (
    <GroupsContext.Provider value={{
      groups,
      setGroups,
      handleNewGroup,
      handleNewTask,
      updateGroupName,
      updateTaskName,
      updateTaskStatus,
      updateTaskPriority
    }}>
      {children}
    </GroupsContext.Provider>
  )
}
