import { View, TextInput, StyleSheet, Button } from "react-native"
import React, { useState } from "react"
import { confirmSignUp } from "../lib/auth/confirmSignup"
import { StackNavigation } from "./Navigation"

interface ConfirmSignupScreenProps {
  navigation: StackNavigation
}

const ConfirmSignup: React.FC<ConfirmSignupScreenProps> = ({ navigation }) => {
  const [code, setCode] = useState("")
  const [email, setEmail] = useState("")

  const onSubmit = () => {
    confirmSignUp({ username: email, code: code })
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={(newEmail) => setEmail(newEmail)}
        defaultValue={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Code"
        onChangeText={(newCode) => setCode(newCode)}
        defaultValue={code}
      />
      <Button title="Confirm" onPress={onSubmit} />
    </View>
  )
}

export default ConfirmSignup

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
