import { View, Button, TextInput, StyleSheet, Alert } from "react-native"
import React, { useState } from "react"
import { validateInputs } from "../../lib/validation/signupValidation"
import { useNavigation } from "@react-navigation/native"
import { signUp } from "../../lib/auth/signup"
import { RootStackParamList } from "../../screens/Navigation"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

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
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Display Name"
        onChangeText={(newUsername) => setUsername(newUsername)}
        defaultValue={username}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={(newEmail) => setEmail(newEmail)}
        defaultValue={email}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(newPassword) => setPassword(newPassword)}
        defaultValue={password}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Confirm Password"
        onChangeText={(newConfirmPassword) =>
          setConfirmPassword(newConfirmPassword)
        }
        defaultValue={confirmPassword}
      />
      <Button title="Signup" onPress={onSubmit} />
      <Button title="Check" onPress={() => console.log("Checked")} />
    </View>
  )
}

export default SignupForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width: "100%",
  },
  textInput: {
    width: "90%",
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 16,
  },
})
