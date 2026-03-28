import Authlayout from '../../components/layout/Authlayout'
import ForgotPasswordForm from '../../components/Auth/ForgotPassword'

function ForgotPassword() {
  return (
    <Authlayout title="Forgot password" subtitle="Recover account access with success and error handling.">
      <ForgotPasswordForm />
    </Authlayout>
  )
}

export default ForgotPassword
