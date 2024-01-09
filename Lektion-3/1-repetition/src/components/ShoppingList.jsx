import { ListItem } from "./ListItem"

export const ShoppingList = ({ items }) => {
  return (
    <div className="ShoppingList">
      {
        items.length 
        ? items.map(item => <ListItem />)
        : <p>No items here.. Add some to start shopping</p>
      }
    </div>
  )
}