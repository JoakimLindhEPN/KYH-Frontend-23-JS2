import ReactDOM from 'react-dom'
import { useRef } from 'react'
import './Modal.css'

export const Modal = ({ handleClose }) => {

  const modalRef = useRef(null)

  const handleOutsideClick = e => {
    if(e.target !== modalRef.current) return

    handleClose()
  }
  return ReactDOM.createPortal((
    <div ref={modalRef} className='modal-bg' onClick={handleOutsideClick}>
      <div className="modal">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sapiente!</p>
        <button onClick={handleClose} className='btn btn-primary'>Close</button>
      </div>
    </div>
  ), document.querySelector('#modals')) 
  
}