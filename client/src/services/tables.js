const ENDPOINT = 'https://notion-clone-server-nine.vercel.app/tables/'

export const findAllTables = async (userId) => {
  const res = await fetch(`${ENDPOINT}${userId}`)
  const data = await res.json()
  return data
}

export const findTable = async (tableId) => {
  const res = await fetch(`${ENDPOINT}findTable/${tableId}`)
  const data = await res.json()
  return data
}

export const createTable = async (userId) => {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId })
  })
  const data = await res.json()
  if (data.id) return true
  return false
}

export const deleteTable = async (tableId) => {
  const res = await fetch(`${ENDPOINT}${tableId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  if (data) return true
  return false
}

export const updateTitle = async (newTitle, tableId) => {
  const res = await fetch(`${ENDPOINT}title/${tableId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: newTitle })
  })
  const data = await res.json()
  if (data) return true
  return false
}
