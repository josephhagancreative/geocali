import { Auth } from "aws-amplify"

type SignUpParameters = {
  username: string
  password: string
  email: string
}

export async function signUp({ username, password, email }: SignUpParameters) {
  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email: email,
        preferred_username: username,
        // other custom attributes
      },
      autoSignIn: {
        enabled: true,
      },
    })
  } catch (error) {
    console.warn("error signing up:", error)
  }
}
