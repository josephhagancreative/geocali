import { View, TextInput, Button, StyleSheet } from "react-native"
import React, { useState } from "react"
import { signIn } from "../../lib/auth/login"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../../App"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type StackNavigator = NativeStackNavigationProp<RootStackParamList>

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation<StackNavigator>()

  const onSubmit = () => {
    signIn({ username: email, password: password })
    console.log("Logged In")
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
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(newPassword) => setPassword(newPassword)}
        defaultValue={password}
      />
      <Button title="Log In" onPress={onSubmit} />
    </View>
  )
}

export default LoginForm

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
