import { useState,useEffect } from 'react'


function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers()
      
  }, [])
async function getUsers() {
  const response=await fetch('https://jsonplaceholder.typicode.com/users')
  const data=await response.json()
  setUsers(data)
  setLoading(false)

  users.map((user) => {
    console.log(user.name)
  })
}
  return (
    <div className="App">
      <h1>Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}


export default App
