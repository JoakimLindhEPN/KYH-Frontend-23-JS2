import { useState } from "react"
import { Modal } from "./components/Modal"

function App() {

  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Open modal</button>
      <div className="relative">
        s
        {
          showModal && <Modal handleClose={handleClose} />
        }
      </div>
    </div>
  )
}
export default App