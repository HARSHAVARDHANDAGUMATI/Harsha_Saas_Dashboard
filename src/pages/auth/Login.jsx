import Authlayout from '../../components/layout/Authlayout'
import LoginForm from '../../components/Auth/LoginForm'

function Login() {
  return (
    <Authlayout title="Welcome back" subtitle="Login to continue to your protected SaaS workspace.">
      <LoginForm />
    </Authlayout>
  )
}

export default Login
