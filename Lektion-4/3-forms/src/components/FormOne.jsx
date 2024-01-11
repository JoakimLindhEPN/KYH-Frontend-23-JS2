import { useState } from "react"

export const FormOne = () => {
  console.log('render')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({ firstName, lastName, email })

    setFirstName('')
    setLastName('')
    setEmail('')
  }
  
  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="form-group">
        <label className="form-label" htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
      </div>

      <button>Register</button>


      <br /><br />
      <p>First name:  { firstName }</p>
      <p>Last name:  { lastName }</p>
      <p>Email:  { email }</p>
    </form>
  )
}