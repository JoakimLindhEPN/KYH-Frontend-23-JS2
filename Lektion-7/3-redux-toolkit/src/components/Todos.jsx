import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos, getTodoById } from '../store/features/todos/todosSlice'

export const Todos = () => {

  const { todos, error, loading } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getAllTodos())
    dispatch(getTodoById(5))
  }, [])

  if(error) return <div>{ error }</div>
  if(loading) return <div>Loading...</div>
  return (
    <div>
      <h2>Todos</h2>
      {/* {
        todos.map(todo => (
          <div key={todo.id}>{ todo.title }</div>
        ))
      } */}
      <div>{ todos.title }</div>
    </div>
  )
}