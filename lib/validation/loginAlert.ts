import { Alert } from "react-native"

export const loginAlert = (message: string) => {
  Alert.alert("Please Log In", message)
}
