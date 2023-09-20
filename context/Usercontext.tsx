import { createContext, useState, useEffect } from "react"
import { Auth, Hub } from "aws-amplify"
import { User } from "../global"

// Types
type UserContextType = {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type UserContextProviderProps = {
  children: React.ReactNode
}

// Context
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  isLoading: true,
  setIsLoading: () => {},
})

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signOut":
          setUser(null)
          break
        case "signIn":
          setUser(data)
          break
        case "signUp":
          break
        case "confirmSignUp":
          setUser(data)
          break
        case "autoSignIn":
          setUser(data)
          break
      }
    })
    checkUser()
  }, [])
  const checkUser = async () => {
    try {
      const responseUser = await Auth.currentAuthenticatedUser()
      setUser(responseUser)
      setIsLoading(false)
    } catch (error) {
      setUser(null)
      setIsLoading(false)
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  )
}
