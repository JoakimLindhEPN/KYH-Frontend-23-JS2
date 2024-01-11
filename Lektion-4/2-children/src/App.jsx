import { useState } from "react"
import { Modal } from "./components/Modal"
import { LoginForm } from "./components/login-form/LoginForm"

function App() {

  const [showSaleModal, setShowSaleModal] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    setShowSaleModal(false)
    setShowModal(false)
  }

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Open modal</button>
      <div className="relative">
        {
          showSaleModal && 
          <Modal isSaleModal handleClose={handleClose}>
            <h3>Winter Sale</h3>
            <p>sign up to our newsletter to get 20% off your first order</p>
            <input type="text" placeholder="enter your email address" />
          </Modal>
        }
        {
          showModal && <Modal handleClose={handleClose}>
            <LoginForm />
          </Modal>
        }
      </div>
    </div>
  )
}
export default App