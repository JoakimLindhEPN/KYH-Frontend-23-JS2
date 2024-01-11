import { useRef } from "react"

export const FormTwo = () => {
  console.log('render')

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
    }
    console.log(user)

    firstNameRef.current.value = ''
    lastNameRef.current.value = ''
    emailRef.current.value = ''

    firstNameRef.current.focus()
  }
  
  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="form-group">
        <label className="form-label" htmlFor="firstName">First Name</label>
        <input ref={firstNameRef} type="text" id="firstName"className="form-control" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="lastName">Last Name</label>
        <input ref={lastNameRef} type="text" id="lastName" className="form-control" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email</label>
        <input ref={emailRef} type="email" id="email" className="form-control" />
      </div>

      <button>Register</button>


      <br /><br />
      {/* <p>First name:  { firstName }</p>
      <p>Last name:  { lastName }</p>
      <p>Email:  { email }</p> */}
    </form>
  )
}