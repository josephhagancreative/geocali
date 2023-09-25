import { Text, Pressable, StyleSheet } from "react-native"
import { GestureResponderEvent } from "react-native"

type FacilityButtonProps = {
  text: string
  isSelected: boolean
  onPress?: (e: GestureResponderEvent) => void
}

const FacilityButton = ({ onPress, text, isSelected }: FacilityButtonProps) => {
  return (
    <Pressable
      style={[
        styles.button,
        isSelected ? styles.selectedButton : styles.button,
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

export default FacilityButton

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 50,
    backgroundColor: "#242124",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#16822f",
  },
  buttonText: {
    color: "white",
    fontFamily: "Montserrat-SemiBold",
  },
})
