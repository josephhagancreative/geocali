import { View, Text, StyleSheet, TextInput } from "react-native"

type ModernTextInputProps = {
  placeholder?: string
  onChangeText?: (text: string) => void
  defaultValue?: string | undefined
  secureTextEntry?: boolean
  editable?: boolean
  text: string
}

const ModernTextInput = ({
  placeholder,
  onChangeText,
  defaultValue,
  secureTextEntry,
  text,
  editable,
}: ModernTextInputProps) => {
  return (
    <View style={styles.formfieldContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{text}:</Text>
      </View>
      <TextInput
        secureTextEntry={secureTextEntry}
        editable={editable}
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
      />
    </View>
  )
}

export default ModernTextInput

const styles = StyleSheet.create({
  formfieldContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 15,
  },
  labelContainer: {
    width: "100%",
  },
  labelText: {
    color: "#3f3b3f",
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
  textInput: {
    width: "100%",
    paddingHorizontal: 1,
    paddingVertical: 7,
    color: "#242124",
    borderColor: "#3f3b3f",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
})
