import { View, StyleSheet, Pressable } from "react-native"
import React, { useContext } from "react"
import { Ionicons } from "@expo/vector-icons"
import HomePageBarButton from "./HomePageBarButton"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../screens/Navigation"
import { UserContext } from "../../context/Usercontext"
import { loginAlert } from "../../lib/validation/loginAlert"

const HomePageBar = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const { user, setIsLoading } = useContext(UserContext)

  return (
    <View style={styles.container}>
      <HomePageBarButton
        icon={"add"}
        size={30}
        onPress={
          user === null
            ? () =>
                loginAlert(
                  "You need to sign up or log in to add locations. Please log in from the profile icon or menu."
                )
            : () => navigation.navigate("AddLocation")
        }
      />
      <HomePageBarButton
        icon={"star"}
        size={24}
        onPress={
          user === null
            ? () =>
                loginAlert(
                  "You need to sign up or log in to view favourited locations. Please log in from the profile icon or menu."
                )
            : () => navigation.navigate("Home")
        }
      />
      <Pressable
        style={({ pressed }) => [
          styles.searchButton,
          pressed ? styles.searchButtonPressed : {},
        ]}>
        <Ionicons name="search" size={36} color="white" />
      </Pressable>
      <HomePageBarButton
        icon={"person"}
        size={24}
        onPress={
          user === null
            ? () => navigation.navigate("Login")
            : () => navigation.navigate("UserProfile")
        }
      />
      <HomePageBarButton
        icon={"menu"}
        size={30}
        onPress={() => navigation.navigate("Menu")}
      />
    </View>
  )
}

export default HomePageBar

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    backgroundColor: "#242124",
    borderRadius: 25,
    paddingHorizontal: 10,
    gap: 5,
    borderColor: "#eeeeee",
    borderWidth: 2,
  },
  searchButton: {
    height: 75,
    width: 75,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242124",
    borderColor: "#eeeeee",
    borderWidth: 2,
    marginHorizontal: 5,
    zIndex: 10,
  },
  searchButtonPressed: {
    backgroundColor: "#3f3b3f",
  },
})
