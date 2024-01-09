export const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <h2>{ todo.title }</h2>
      <button className="btn">X</button>
    </div>
  )
}