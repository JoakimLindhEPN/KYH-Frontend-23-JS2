import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../store/reducers/todosReducer'

export const Todos = () => {

  const { todos, error, loading } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  if(error) return <div>{ error }</div>
  if(loading) return <div>Loading...</div>
  return (
    <div>
      <h2>Todos</h2>
      {
        todos.map(todo => (
          <div key={todo.id}>{ todo.title }</div>
        ))
      }
    </div>
  )
}