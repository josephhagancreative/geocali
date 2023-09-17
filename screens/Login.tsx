import { View, Text, StyleSheet } from "react-native"
import React from "react"
import LoginForm from "../components/login/LoginForm"

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <LoginForm />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
