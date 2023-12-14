import { useContext } from 'react'
import { GroupsContext } from '../context/groups'

export function useGroups() {
  const context = useContext(GroupsContext)

  return context
}
