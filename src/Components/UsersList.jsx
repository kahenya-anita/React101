import {useState, useEffect} from 'react'
// ADD COUNTER AS A NESTED ROUTE HERE

function UsersList() {
    const [users, setUsers] = useState([])
    const [error, setError]  = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then((response) => {
            if(!response.ok) {
                throw new Error('Failed to fetch user details')
        }
        return response.json()
        })

        .then((data) => {
            setUsers(data)
        })

        .catch((err) => {
            if(err.name !=='AbortError') {
                setError(err.message)
                setLoading(false)
            }
        })
 }, [])
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error}</p>

  return (
    <>
        <h1>This is a list of Achievers in Tech</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name }, {user.gender}</li>
            ))}
        </ul>
    </>
  )
}

export default UsersList