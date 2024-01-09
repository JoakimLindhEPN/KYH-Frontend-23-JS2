import { useState, useEffect, useCallback } from "react"
import { TodoItem } from "./TodoItem"
import { useFetch } from "../../hooks/useFecth"


export const TodoList = () => {

  // const [todos, setTodos] = useState([])
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos')

  // const getTodos = useCallback(async () => {
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   console.log(data)
  //   setTodos(data)
  // }, [url])

  // useEffect(() => {
  //   const getTodos = async () => {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     console.log(data)
  //     setTodos(data)
  //   }
  //   getTodos()
  // }, [url])

  const { data: todos, loading, error } = useFetch(url, { method: 'GET' })

  if(error) return <p>{error}</p>

  if(loading) return (
    <p>Loading...</p>
  )

  return (
    <div className="todo-list">
      <button className="btn" onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos')}>All users</button>
      <button className="btn" onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=1')}>user 1</button>
      <button className="btn" onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=2')}>user 2</button>
      <button className="btn" onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=3')}>user 3</button>
      {
        todos && todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }
    </div>
  )
}























// export const TodoList = () => {

//   const [counter, setCounter] = useState(0)
//   const [counter2, setCounter2] = useState(0)

//   useEffect(() => {
//     console.log('use effect')

//     return () => { // cleanup
//       console.log('component destroyed')
//     }
//   }, [counter])

//   console.log('utanför')

//   return (
//     <div>
//       <button onClick={() => setCounter(state => state + 1)}>counter1 clicked {counter} times</button>
//       <button onClick={() => setCounter2(state => state + 1)}>counter2 clicked {counter2} times</button>
//     </div>
//   )
// }