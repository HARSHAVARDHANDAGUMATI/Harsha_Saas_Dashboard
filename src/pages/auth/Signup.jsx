import Authlayout from '../../components/layout/Authlayout'
import SignupForm from '../../components/Auth/SignupForm'

function Signup() {
  return (
    <Authlayout title="Create account" subtitle="Strong validation, clean layout, and fast onboarding flow.">
      <SignupForm />
    </Authlayout>
  )
}

export default Signup
