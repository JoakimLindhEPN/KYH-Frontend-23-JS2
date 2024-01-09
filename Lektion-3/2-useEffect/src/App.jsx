import { useState } from "react"
import { TodoList } from "./components/TodoList"
import { UserList } from "./components/UserList"

function App() {

  const [showTodoList, setShowTodoList] = useState(true)
  
  return (
    <div className="container">
      <button className="btn" onClick={() => setShowTodoList(state => !state)}>toggle visibility</button>
      <UserList />
      {
        showTodoList && <TodoList />
      }
    </div>
  )
}
export default App