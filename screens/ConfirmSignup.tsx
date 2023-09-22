import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { useState } from "react"
import { confirmSignUp } from "../lib/auth/confirmSignup"
import { RootStackParamList, StackNavigation } from "./Navigation"
import { RouteProp } from "@react-navigation/native"
import ModernTextInput from "../components/UI/ModernTextInput"
import Button from "../components/UI/Button"

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

  const onSubmit = async () => {
    confirmSignUp({ username: prevEmail, code: code })
    navigation.navigate("Home")
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <ModernTextInput
          text="Email"
          defaultValue={prevEmail}
          editable={false}
        />
        <ModernTextInput
          text="Confirm Code"
          placeholder="your-code eg. (123456)"
          onChangeText={(newCode) => setCode(newCode)}
          defaultValue={code}
        />
        <Text>
          Please check the email you registered with to find your verification
          code.
        </Text>
        <Button title="Confirm" onPress={onSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ConfirmSignup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch",
    padding: 30,
    width: "100%",
    backgroundColor: "#eee",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 100,
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
