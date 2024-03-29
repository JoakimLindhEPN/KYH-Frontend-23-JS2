import { Link } from "react-router-dom"
import { Card } from "../../components/Card"
import { RegisterForm } from "../../components/RegisterForm"

function RegisterPage() {
  return (
    <div>
      <Card>
        <RegisterForm />
        <p className="mt-3">Already a member? <Link className="text-blue-600 underline" to="/auth/login">Login here!</Link></p>
      </Card>
    </div>
  )
}
export default RegisterPage