import ReactDOM from 'react-dom'
import { useRef } from 'react'
import './Modal.css'

export const Modal = ({ handleClose, children, isSaleModal }) => {
  
  const styles = {
    card: {
      border: '3px solid',
      borderColor: isSaleModal ? 'red': '#555',
      textAlign: isSaleModal ? 'center' : 'left'
    },
    button: {
      backgroundColor: isSaleModal && 'red'
    }  
  }
  const modalRef = useRef(null)

  const handleOutsideClick = e => {
    if(e.target !== modalRef.current) return

    handleClose()
  }
  return ReactDOM.createPortal((
    <div ref={modalRef} className='modal-bg' onClick={handleOutsideClick}>
      <div className="modal" style={styles.card}>

        { children }

        <button 
          onClick={handleClose} 
          className='btn btn-primary' 
          style={styles.button}
        >
          Close
        </button>
      </div>
    </div>
  ), document.querySelector('#modals')) 
  
}




