import { StatusBar } from "expo-status-bar"
import { UserContextProvider } from "./context/Usercontext"

import { Amplify } from "aws-amplify"
import awsconfig from "./src/aws-exports"

import Navigation from "./screens/Navigation"

Amplify.configure(awsconfig)

export default function App() {
  return (
    <UserContextProvider>
      <StatusBar style="auto" />
      <Navigation />
    </UserContextProvider>
  )
}
