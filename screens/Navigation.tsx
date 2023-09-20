import { NavigationContainer } from "@react-navigation/native"
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack"
import { UserContext } from "../context/Usercontext"
import { useContext } from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import * as SplashScreen from "expo-splash-screen"

import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import ConfirmSignup from "./ConfirmSignup"
import Menu from "./Menu"
import AddLocation from "./AddLocation"
import UserProfile from "./UserProfile"

export type ScreenNames = [
  "Home",
  "Login",
  "Signup",
  "Confirm",
  "Menu",
  "Add Location",
  "UserProfile"
]
export type RootStackParamList = {
  Home: undefined
  Login: undefined
  Signup: undefined
  Confirm: { email: string }
  Menu: undefined
  AddLocation: undefined
  UserProfile: undefined
}
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator<RootStackParamList>()

SplashScreen.preventAutoHideAsync()

const Navigation = () => {
  const { user, isLoading } = useContext(UserContext)

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  } else {
    SplashScreen.hideAsync()
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerBlurEffect: "light" }}>
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Group>
        {user && (
          <Stack.Group>
            <Stack.Screen name="UserProfile" component={UserProfile} />
          </Stack.Group>
        )}
        {!user && (
          <Stack.Group screenOptions={{ headerTransparent: true }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Confirm" component={ConfirmSignup} />
          </Stack.Group>
        )}

        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Menu" component={Menu} />

          <Stack.Screen
            name="AddLocation"
            options={{ title: "Add Location" }}
            component={AddLocation}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
})
