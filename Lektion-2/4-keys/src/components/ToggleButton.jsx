import { useState } from "react"

export const ToggleButton = ({ number }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(state => !state)
  }


  return (
    <div className="ToggleButton">
      <button className={`btn ${isOpen && 'btn-outline'}`} onClick={toggleOpen}>button nr {number}</button>

      {
        isOpen && (
          <div className="expandable">
            <p>Titut</p>
          </div>
        )
      }
    </div>
  )
}