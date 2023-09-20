import { Auth } from "aws-amplify"

type SignUpParameters = {
  username: string
  password: string
  email: string
}

export async function signUp({ username, password, email }: SignUpParameters) {
  console.log(username, password, email)
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
    console.log("error signing up:", error)
  }
}
