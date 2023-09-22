import { StatusBar } from "expo-status-bar"
import { UserContextProvider } from "./context/Usercontext"
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font"
import { useEffect } from "react"
import { Amplify } from "aws-amplify"
import awsconfig from "./src/aws-exports"

import Navigation from "./screens/Navigation"

Amplify.configure(awsconfig)

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <UserContextProvider>
      <StatusBar style="auto" />
      <Navigation />
    </UserContextProvider>
  )
}
