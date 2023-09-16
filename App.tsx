import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Amplify, Auth } from "aws-amplify"
import awsconfig from "./src/aws-exports"

Amplify.configure(awsconfig)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcom to GeoCali!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
