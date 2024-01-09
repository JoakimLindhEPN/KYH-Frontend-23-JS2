export const ListItem = ({ item, removeItem }) => {

  const onRemoveItem = () => {
    removeItem(item.id)
  }


  return (
    <div className="list-item">
      <p className={`product-title ${item.completed && 'completed'}`}>{ item.product }</p>
      <div className="buttons">
        <button className="btn change-btn"><i className="fa-solid fa-pen"></i></button>
        <button onClick={onRemoveItem} className="btn delete-btn"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}