const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validate = (formData, setErrors, evt) => {
  const err = {}

  // First Name
  if(formData.firstName.trim() === '') {
    err.firstName = 'You need to enter a first name'

  } else if(formData.firstName.length < 3) {
    err.firstName = 'Your name must be atleast 3 chars long'
  }

  // Last Name
  if(formData.lastName.trim() === '') {
    err.lastName = 'You need to enter a last name'
  } else if(formData.lastName.length < 3) {
    err.lastName = 'Your name must be atleast 3 chars long'
  }

  // Email
  if(formData.email.trim() === '') {
    err.email = 'You need to enter an email address'
  } else if(!emailRegex.test(formData.email)) {
    err.email = 'You need to enter a valid email address'
  }

  // Password
  if(formData.password.trim() === '') {
    err.password = 'You need to enter a password'
  } else if(formData.password.length < 8) {
    err.password = 'Your password needs to be atleast 8 characters long'
  } else if(!passwordRegex.test(formData.password)) {
    err.password = 'Your pasword needs to have one Uppercase, one lowercase, one number and a special character'
  }

  // Confirm Password
  if(formData.password !== formData.confirmPassword) {
    err.confirmPassword = 'The passwords do not match'
  }

  if(evt && evt.type === 'blur') {
    setErrors(errors => ({
      ...errors,
      [evt.target.name]: err[evt.target.name]
    }))
    return
  }
  setErrors(err)

  return Object.keys(err).length < 1
}