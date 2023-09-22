import { Alert } from "react-native"

export const loginAlert = (title: string, message: string) => {
  Alert.alert(title, message)
}
