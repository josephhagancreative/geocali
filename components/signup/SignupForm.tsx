import {
  View,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native"
import React, { useState } from "react"
import { validateInputs } from "../../lib/validation/signupValidation"
import { useNavigation } from "@react-navigation/native"
import { signUp } from "../../lib/auth/signup"
import { RootStackParamList } from "../../screens/Navigation"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import ModernTextInput from "../UI/ModernTextInput"
import Button from "../UI/Button"

type StackNavigator = NativeStackNavigationProp<RootStackParamList>

const SignupForm = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigation = useNavigation<StackNavigator>()

  const onSubmit = () => {
    if (password == null || password !== confirmPassword) {
      Alert.alert("Please make sure passwords match")
      return
    }

    const user = {
      username,
      email,
      password,
    }
    const isValid = validateInputs(user)
    if (!isValid) {
      Alert.alert("Please check your inputs are correct and try again")
      return
    }
    try {
      signUp({ username, password, email })
      navigation.navigate("Confirm", { email: email })
    } catch (error) {}
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ModernTextInput
        text="Display Name"
        placeholder="your-display-name"
        onChangeText={(newUsername) => setUsername(newUsername)}
        defaultValue={username}
      />
      <ModernTextInput
        text="Email"
        placeholder="your-email@example.com"
        onChangeText={(newEmail) => setEmail(newEmail)}
        defaultValue={email}
      />
      <ModernTextInput
        text="Password"
        secureTextEntry={true}
        placeholder="your-password"
        onChangeText={(newPassword) => setPassword(newPassword)}
        defaultValue={password}
      />
      <ModernTextInput
        text="Confirm Password"
        secureTextEntry={true}
        placeholder="confirm-password"
        onChangeText={(newConfirmPassword) =>
          setConfirmPassword(newConfirmPassword)
        }
        defaultValue={confirmPassword}
      />

      <Button title="Sign Up" onPress={onSubmit} />
    </ScrollView>
  )
}

export default SignupForm

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width: "100%",
  },
})
