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

  return (
    <div className="App container">
      <div className="card">
        <Header />

        <ShoppingList items={items} />
        <AddItemForm />
      </div>
    </div>
  )
}
export default App