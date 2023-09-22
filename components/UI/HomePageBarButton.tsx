import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { GestureResponderEvent } from "react-native"

type HomePageBarButtonProps = {
  icon: any
  size: number
  onPress?: (e: GestureResponderEvent) => void
}

const HomePageBarButton = ({ icon, size, onPress }: HomePageBarButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : {},
      ]}
      onPress={onPress}>
      <Ionicons name={icon} size={size} color="white" />
    </Pressable>
  )
}

export default HomePageBarButton

const styles = StyleSheet.create({
  button: {
    padding: 5,
    height: 45,
    width: 50,
    backgroundColor: "#242124",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: "#3f3b3f",
    borderRadius: 10,
  },
})
