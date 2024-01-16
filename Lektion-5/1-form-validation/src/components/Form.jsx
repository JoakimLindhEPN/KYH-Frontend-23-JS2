import { FormInput } from "./FormInput"
import { IoIosWarning } from "react-icons/io";
import useForm from "../hooks/useForm";

export const Form = () => {

  const {
    form: formData,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onSubmit = e => {
    handleSubmit(e, async (values) => {
      const res = await fetch('http://localhost:3000/api/users/register', {
        body: JSON.stringify(values)
      })
    })
  }

  return (
    <form onSubmit={onSubmit} className="reg-form" noValidate>
      <FormInput
        label="First Name"
        id="firstName"
        name="firstName"
        type="text"
        value={formData.firstName}
        onChange={handleChange}
        errorMsg={errors.firstName}
        onBlur={handleBlur}
      />
      <FormInput
        label="Last Name"
        id="lastName"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        errorMsg={errors.lastName}
        onBlur={handleBlur}
      />
      <FormInput
        label="Email"
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        errorMsg={errors.email}
        onBlur={handleBlur}
      />
      <FormInput
        label="Password"
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        errorMsg={errors.password}
        onBlur={handleBlur}
      />
      <FormInput
        label="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        errorMsg={errors.confirmPassword}
        onBlur={handleBlur}
      />
      
      { errors.main && 
      <div className="main-error">
        <p>{ errors.main }</p>
        <IoIosWarning />
      </div>}

      <button className="btn btn-primary">Register</button>
      {/* <p>{JSON.stringify(formData)}</p> */}
    </form>
  )
}