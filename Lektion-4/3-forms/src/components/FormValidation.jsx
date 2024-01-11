import { useState } from "react"


const baseState = {
  firstName: '', 
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const FormValidation = () => {
  
  const [formData, setFormData] = useState(baseState)
  const [formErrors, setFormErrors] = useState(baseState)

  const handleChange = e => {
    setFormData(data => {
      return {
        ...data,
        [e.target.name]: e.target.value
      }
    })
  }


  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h1 style={{ textAlign: 'center', margin: '1rem'}}>Register</h1>

      <div className="form-group">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} name="firstName" className="form-control" />
        { formErrors.firstName && <p className="error">{formErrors.firstName}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} name="lastName" className="form-control" />
        { formErrors.lastName && <p className="error">{formErrors.lastName}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" value={formData.email} onChange={handleChange} name="email" className="form-control" />
        { formErrors.email && <p className="error">{formErrors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" id="password" value={formData.password} onChange={handleChange} name="password" className="form-control" />
        { formErrors.password && <p className="error">{formErrors.password}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} name="confirmPassword" className="form-control" />
        { formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}
      </div>

      <button>Register</button>

    </form>
  )
}