import { View, Text, StyleSheet, Button } from "react-native"
import React from "react"
import LoginForm from "../components/login/LoginForm"
import { StackNavigation } from "./Navigation"

interface LoginScreenProps {
  navigation: StackNavigation
}

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <LoginForm />
        </View>
        <View style={styles.signUpContainer}>
          <Text>Don't have an account yet?</Text>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch",
    width: "100%",
    backgroundColor: "#fff",
  },
  signUpContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
})
