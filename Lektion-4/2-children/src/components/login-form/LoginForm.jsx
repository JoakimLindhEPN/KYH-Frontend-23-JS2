import './LoginForm.css'

export const LoginForm = () => {
  return (
    <form>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" />
      </div>
      
      <div className="input-group">
        <label htmlFor="password">Pasword:</label>
        <input type="password" />
      </div>

      <button className="btn btn-primary">Login</button>
    </form>
  )
}