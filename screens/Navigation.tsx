import { NavigationContainer } from "@react-navigation/native"
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack"
import { useAuth } from "../context/Usercontext"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import { AddFitspotProvider } from "../context/AddFitspotContext"

import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import ConfirmSignup from "./ConfirmSignup"
import Menu from "./Menu"
import AddLocation from "./AddLocation"
import UserProfile from "./UserProfile"
import Search from "./Search"

export type ScreenNames = [
  "Home",
  "Login",
  "Signup",
  "Confirm",
  "Menu",
  "Add Location",
  "UserProfile",
  "Search"
]
export type RootStackParamList = {
  Home: undefined
  Login: undefined
  Signup: undefined
  Confirm: { email: string }
  Menu: undefined
  AddLocation: undefined
  UserProfile: undefined
  Search: undefined
}
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <AddFitspotProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerBlurEffect: "light" }}>
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              options={{
                title: "Search",
                presentation: "transparentModal",
                headerShown: false,
              }}
              component={Search}
            />
          </Stack.Group>
          {user && (
            <Stack.Group>
              <Stack.Screen name="UserProfile" component={UserProfile} />

              <Stack.Screen
                name="AddLocation"
                options={{
                  title: "Add Fit Spot",
                  presentation: "transparentModal",
                  headerShown: false,
                }}
                component={AddLocation}
              />
            </Stack.Group>
          )}
          {!user && (
            <Stack.Group
              screenOptions={{
                headerTransparent: true,
                headerBlurEffect: "light",
                headerTintColor: "#242124",
                headerTitleStyle: {
                  fontFamily: "Montserrat-SemiBold",
                },
              }}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Confirm" component={ConfirmSignup} />
            </Stack.Group>
          )}
          <Stack.Group
            screenOptions={{
              presentation: "transparentModal",
              headerShown: false,
            }}>
            <Stack.Screen name="Menu" component={Menu} />
          </Stack.Group>
        </Stack.Navigator>
      </AddFitspotProvider>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
})
