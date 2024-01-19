const ENDPOINT = 'http://localhost:3000/tables/rows/'

export const findRows = async (tableId) => {
  const res = await fetch(`${ENDPOINT}${tableId}`)
  const data = await res.json()
  return data
}

export const changeRowMainContent = async ({ rowId, newMainContent }) => {
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
