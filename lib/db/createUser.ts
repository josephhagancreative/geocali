import { API } from "aws-amplify"
import { createAppUser } from "../../src/graphql/mutations"

export const createUser = async (email: string, username: string) => {
  const newAppUser = await API.graphql({
    query: createAppUser,
    variables: {
      input: {
        email: email,
        username: username,
        Favorites: [],
      },
    },
  })
}
