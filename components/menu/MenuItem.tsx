import { Pressable, Text, StyleSheet } from "react-native"
import React from "react"

type MenuItemProps = {
  name: string
  onPress: () => void
}

const MenuItem = ({ name, onPress }: MenuItemProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed ? styles.buttonOnPress : {},
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{name}</Text>
    </Pressable>
  )
}

export default MenuItem

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonOnPress: {
    backgroundColor: "#dadada",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
})
