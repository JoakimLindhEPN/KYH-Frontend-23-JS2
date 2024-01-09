import { useState } from "react"
import { TodoList } from "./components/TodoList"

function App() {

  const [showTodoList, setShowTodoList] = useState(true)
  
  return (
    <div className="container">
      <button className="btn" onClick={() => setShowTodoList(state => !state)}>toggle visibility</button>

      {
        showTodoList && <TodoList />
      }
    </div>
  )
}
export default App