import { createContext, useState, useEffect, useContext } from "react"
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
    // Check the initial authentication state
    const checkAuthState = async () => {
      try {
        const cognitoUser = await Auth.currentAuthenticatedUser()
        setUser(cognitoUser)
      } catch (e) {
        console.warn(e)
      }
      setIsLoading(false)
    }
    checkAuthState()

    // Set up event listeners for sign-in and sign-out events
    const listener = Hub.listen("auth", (data) => {
      const { payload } = data
      if (payload.event === "signIn") {
        setUser(payload.data)
      }
      if (payload.event === "signOut") {
        setUser(null)
      }
    })

    // Clean up the event listener on component unmount
    return () => listener()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
