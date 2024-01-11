import { useState } from "react"

export const FormThree = () => {
  console.log('render')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
  }
  
  const handleChange = (e) => {
    setFormData(data => {
      return {
        ...data,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="form-group">
        <label className="form-label" htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
      </div>

      <button>Register</button>


      <br /><br />
      <p>First name:  { formData.firstName }</p>
      <p>Last name:  { formData.lastName }</p>
      <p>Email:  { formData.email }</p>
    </form>
  )
}