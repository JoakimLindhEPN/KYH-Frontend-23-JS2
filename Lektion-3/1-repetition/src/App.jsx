import { useState } from "react"

import { AddItemForm } from "./components/AddItemForm"
import { Header } from "./components/Header"
import { ShoppingList } from "./components/ShoppingList"

function App() {

  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      product: 'Milk',
      completed: false
    },
    {
      id: crypto.randomUUID(),
      product: 'Bread',
      completed: false
    },
    {
      id: crypto.randomUUID(),
      product: 'Butter',
      completed: false
    },
  ])

  const clearList = () => {
    setItems([])
  }

  const addItem = (product) => {
    setItems(prevItems => {

      const newItem = {
        id: crypto.randomUUID(),
        product,
        completed: false
      }

      return [newItem, ...prevItems]
    })
  }

  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <div className="App container">
      <div className="card">
        <Header clearList={clearList} />

        <ShoppingList items={items} removeItem={removeItem} />
        <AddItemForm addItem={addItem} />
      </div>
    </div>
  )
}
export default App