import { SignUp } from "@clerk/clerk-react"

const SignUpPage = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <SignUp signInUrl="/sign-in" afterSignUpUrl={"/"} />
    </div>
  )
}

export default SignUpPage;
