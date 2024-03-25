const ENDPOINT = 'https://notion-clone-server-nine.vercel.app/auth/'

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
