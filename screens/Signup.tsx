import { View, Text, StyleSheet } from "react-native"
import React from "react"
import SignupForm from "../components/signup/SignupForm"

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <SignupForm />
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
