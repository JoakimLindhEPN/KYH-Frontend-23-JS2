import { ListItem } from "./ListItem"

export const ShoppingList = ({ items, removeItem }) => {
  return (
    <div className="ShoppingList">
      {
        items.length 
        ? items.map(item => <ListItem key={item.id} item={item} removeItem={removeItem} />)
        : <p>No items here.. Add some to start shopping</p>
      }

    </div>
  )
}