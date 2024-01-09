import { useFetch } from "../../hooks/useFecth"

export const UserList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
      {
        data && data.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))
      }
    </div>
  )
}