import { v4 as uuidv4 } from 'uuid';

import { useState } from "react"
import { Header } from "./components/Header"
import { AddCustomerForm } from './components/AddCustomerForm'
import { CustomerList } from './components/CustomerList'

function App() {

  const [customers, setCustomers] = useState([
    {
      id: uuidv4(),
      name: 'Hans Mattin-Lassei'
    },
    {
      id: uuidv4(),
      name: 'Tommy Mattin-Lassei'
    },
  ])

  const addCustomer = (customerName) => {
    setCustomers(state => {
      return [...state, { id: uuidv4(), name: customerName }]
    })
  }

  const onDeleteCustomer = (id) => {
    setCustomers(prevCustomers => {
      return prevCustomers.filter(customer => customer.id !== id)
    })
  }

  return (
    <div>
      <Header title="Customer List" />
      <main className="container">
        <AddCustomerForm addCustomer={addCustomer} />
        <CustomerList customers={customers} onDeleteCustomer={onDeleteCustomer} />
      </main>
    </div>
  )
}
export default App