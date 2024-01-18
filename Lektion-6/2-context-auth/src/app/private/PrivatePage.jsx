import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../contexts/authContext"

function PrivatePage() {

  const { token } = useAuth()
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if(!token) {
  //     navigate("/auth/login")
  //   }
  // }, [token])

  const createTodo = async () => {
    const res = await fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title: 'todo 1' })
    })
  }
  
  return (
    <div>PrivatePage</div>
  )
}
export default PrivatePage