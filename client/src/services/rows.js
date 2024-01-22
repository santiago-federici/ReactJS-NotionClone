const ENDPOINT = 'http://localhost:3000/tables/rows/'

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
