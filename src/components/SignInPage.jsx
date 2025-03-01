import { SignIn } from "@clerk/clerk-react"

const SignInPage = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <SignIn signUpUrl="/sign-up" afterSignInUrl={"/"} />
    </div>
  )
}

export default SignInPage
