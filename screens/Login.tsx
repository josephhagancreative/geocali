import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import LoginForm from "../components/login/LoginForm"
import { StackNavigation } from "./Navigation"

interface LoginScreenProps {
  navigation: StackNavigation
}

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}>
        <View>
          <View>
            <LoginForm />
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.descText}>Don't have an account yet?</Text>
            <Text
              onPress={() => navigation.navigate("Signup")}
              style={styles.signupText}>
              Sign Up
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login

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
    paddingVertical: 200,
  },
  signUpContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 40,
  },
  descText: {
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
  },
  signupText: {
    fontFamily: "Montserrat-Bold",
    textAlign: "left",
    fontSize: 16,
    marginTop: 5,
  },
})
