import {
  View,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

interface AppProps {
  children: React.ReactNode
}

const ModalBackground = ({ children }: AppProps) => {
  const navigation = useNavigation()

  return (
    <Pressable onPress={navigation.goBack} style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.menuContainer}>{children}</View>
      </TouchableWithoutFeedback>
    </Pressable>
  )
}

export default ModalBackground

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: -1,
  },
  menuContainer: {
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    padding: 10,
    paddingBottom: 0,
    marginVertical: 20,
  },
  closeButton: {
    borderRadius: 25,
    overflow: "hidden",
    position: "absolute",
    right: "45%",
    bottom: -60,
  },
})
