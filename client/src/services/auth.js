const ENDPOINT = 'reactjs-notionclone.railway.internal/auth/'

export const resgiter = async () => {

}

export const login = async () => {

}

export const logout = async () => {
  const res = await fetch(`${ENDPOINT}logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  const data = await res.json()
  return data
}
