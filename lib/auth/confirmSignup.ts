import { Auth } from "aws-amplify"

type ConfirmSignUpParameters = {
  username: string
  code: string
}

export async function confirmSignUp({
  username,
  code,
}: ConfirmSignUpParameters) {
  try {
    await Auth.confirmSignUp(username, code)
  } catch (error) {
    console.warn("error confirming sign up", error)
  }
}
