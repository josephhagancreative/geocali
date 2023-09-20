import { View, TextInput, StyleSheet, Button } from "react-native"
import React, { useState } from "react"
import { confirmSignUp } from "../lib/auth/confirmSignup"
import { RootStackParamList, StackNavigation } from "./Navigation"
import { RouteProp } from "@react-navigation/native"

interface ConfirmSignupScreenProps {
  route: RouteProp<RootStackParamList, "Confirm">
  navigation: StackNavigation
}

const ConfirmSignup: React.FC<ConfirmSignupScreenProps> = ({
  route,
  navigation,
}) => {
  const [code, setCode] = useState("")

  const prevEmail = route.params.email

  console.log(prevEmail)

  const onSubmit = () => {
    confirmSignUp({ username: prevEmail, code: code })
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <TextInput
        editable={false}
        style={styles.textInput}
        defaultValue={prevEmail}
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
