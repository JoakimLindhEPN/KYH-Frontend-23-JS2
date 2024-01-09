import { useState, useEffect } from "react"
import { TodoItem } from "./TodoItem"

const todos = [
  {
    id: 1,
    title: 'todo 1',
    completed: false
  },
  {
    id: 2,
    title: 'todo 2',
    completed: false
  },
]

export const TodoList = () => {
  return (
    <div className="todo-list">
      {
        todos.map(todo => (
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