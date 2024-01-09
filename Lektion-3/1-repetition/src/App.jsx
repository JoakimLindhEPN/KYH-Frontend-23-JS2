import { useState } from "react"

import { AddItemForm } from "./components/AddItemForm"
import { Header } from "./components/Header"
import { ShoppingList } from "./components/ShoppingList"
import { Modal } from "./components/Modal"

function App() {
  const [showModal, setShowModal] = useState(false)
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
    setShowModal(false)
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

  const changeItemText = (id, newText) => {
    const newItems = items.map(item => {
      if(item.id === id) {
        item.product = newText
        return item
      }

      return item
    })
    setItems(newItems)
  }

  const toggleComplete = (item) => {

    // const newItems = items.map(_item => {

    //   if(_item.id === item.id) {
    //     _item.completed = !_item.completed
    //     return _item
    //   }

    //   return _item
    // })

    // setItems(newItems)


    item.completed = !item.completed
    setItems(prev => {
      prev.sort((a, b) => a.completed - b.completed)
      return [...prev]
    })
  }

  return (
    <div className="App container">
      <div className="card">
        <Header clearList={() => setShowModal(true)} />

        <ShoppingList items={items} removeItem={removeItem} toggleComplete={toggleComplete} changeItemText={changeItemText} />
        <AddItemForm addItem={addItem} />
        { showModal && <Modal clearList={clearList} onBack={() => setShowModal(false)} /> }
      </div>
    </div>
  )
}
export default App