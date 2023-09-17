import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Amplify, Auth } from "aws-amplify"
import awsconfig from "./src/aws-exports"
import { NavigationContainer } from "@react-navigation/native"
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack"
import Home from "./screens/Home"
import Login from "./screens/Login"
import Signup from "./screens/Signup"
import ConfirmSignup from "./screens/ConfirmSignup"

export type ScreenNames = ["Home", "Login", "Signup", "Confirm"]
export type RootStackParamList = Record<ScreenNames[number], undefined>
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator<RootStackParamList>()

Amplify.configure(awsconfig)

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerBlurEffect: "light" }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Confirm" component={ConfirmSignup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
