import { View, Text, StyleSheet, Button } from "react-native"
import React from "react"
import { StackNavigation } from "../App"
import { signOut } from "../lib/auth/signout"

interface HomeScreenProps {
  navigation: StackNavigation
}

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleSignout = () => {
    signOut()
    console.log("Signed Out")
    navigation.navigate("Login")
  }
  return (
    <View style={styles.container}>
      <Text>Welcome to geoCali!</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
      <Button title="Confirm" onPress={() => navigation.navigate("Confirm")} />
      <Button title="Signout" onPress={handleSignout} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
