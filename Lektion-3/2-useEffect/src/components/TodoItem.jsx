export const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <div>
        <h2>{ todo.title }</h2>
        <small>{ todo.userId }</small>
      </div>
      <button className="btn">X</button>
    </div>
  )
}