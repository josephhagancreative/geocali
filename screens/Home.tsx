import { View, Text, StyleSheet, Button } from "react-native"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/Usercontext"
import { StackNavigation } from "./Navigation"
import { signOut } from "../lib/auth/signout"

interface HomeScreenProps {
  navigation: StackNavigation
}

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { user } = useContext(UserContext)

  const handleSignout = () => {
    signOut()
    console.log(user)
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to geoCali!</Text>
      {user && <Text>Welcome {user.attributes.preferred_username}</Text>}
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
    gap: 2,
  },
})
