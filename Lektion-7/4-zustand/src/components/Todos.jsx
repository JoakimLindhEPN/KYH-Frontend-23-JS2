import { useEffect } from 'react'
import { useTodosStore } from '../store/todosStore'

export const Todos = () => {

  const { todos, getAllTodos, loading, error } = useTodosStore()

  useEffect(() => {
    getAllTodos()
  }, [])

  if(error) return <div>{ error }</div>
  if(loading) return <div>Loading...</div>
  return (
    <div>
      <h2>Todos</h2>
      {
        todos && todos.map(todo => (
          <div key={todo.id}>{ todo.title }</div>
        ))
      }
    </div>
  )
}