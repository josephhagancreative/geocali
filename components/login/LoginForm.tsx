import { View, StyleSheet, Alert } from "react-native"
import { useState } from "react"
import { signIn } from "../../lib/auth/login"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../../screens/Navigation"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import Button from "../UI/Button"
import ModernTextInput from "../UI/ModernTextInput"

type StackNavigator = NativeStackNavigationProp<RootStackParamList>

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation<StackNavigator>()

  const onSubmit = async () => {
    if (!email || !password) {
      Alert.alert("Empty Fields", "Please enter your email and password")
      return
    }
    signIn({ username: email, password: password })
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <ModernTextInput
        onChangeText={(newEmail) => setEmail(newEmail)}
        defaultValue={email}
        placeholder="your-email@example.com"
        text="Email"
      />
      <ModernTextInput
        secureTextEntry={true}
        onChangeText={(newPassword) => setPassword(newPassword)}
        defaultValue={password}
        placeholder="your-password"
        text="Password"
      />
      <Button title="Log In" onPress={onSubmit} />
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width: "100%",
  },
})
