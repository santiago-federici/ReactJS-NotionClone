const ENDPOINT = 'http://localhost:3000/rows/'

export const findRows = async (tableId) => {
  const res = await fetch(`${ENDPOINT}${tableId}`)
  const data = await res.json()
  return data
}

export const createRow = async (tableId) => {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ tableId })
  })
  const data = await res.json()
  if (data) return true
  return false
}

export const updateMainContent = async ({ rowId, newMainContent }) => {
  const res = await fetch(`${ENDPOINT}mainContent/${rowId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ mainContent: newMainContent })
  })
  const data = await res.json()
  return data
}

export const updateDescription = async ({ rowId, newDescription }) => {
  const res = await fetch(`${ENDPOINT}description/${rowId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ description: newDescription })
  })
  const data = await res.json()
  return data
}

export const updateStatus = async (rowId, newStatus) => {
  const res = await fetch(`${ENDPOINT}status/${rowId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status: newStatus })
  })
  const data = await res.json()
  return data
}

export const updatePriority = async (rowId, newPriority) => {
  const res = await fetch(`${ENDPOINT}priority/${rowId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ priority: newPriority })
  })
  const data = await res.json()
  return data
}

export const updateDue = async (rowId, newDue) => {
  const res = await fetch(`${ENDPOINT}due/${rowId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ due: newDue })
  })
  const data = await res.json()
  if (data) return true
  return false
}

export const deleteRow = async (rowId) => {
  const res = await fetch(`${ENDPOINT}${rowId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  if (data) return true
  return false
}
