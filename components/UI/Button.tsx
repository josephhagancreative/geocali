import { View, Text, Pressable, StyleSheet } from "react-native"
import React from "react"
import { GestureResponderEvent } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

type ButtonProps = {
  title: string
  onPress?: (e: GestureResponderEvent) => void
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed ? styles.buttonContainerPressed : {},
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    backgroundColor: "#242124",
    borderRadius: 8,
    paddingVertical: 15,
    marginVertical: 25,
  },
  buttonContainerPressed: {
    backgroundColor: "#3f3b3f",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
  },
})
