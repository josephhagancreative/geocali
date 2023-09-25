import { View, StyleSheet } from "react-native"
import { signOut } from "../lib/auth/signout"
import { StackNavigation } from "./Navigation"
import { useAuth } from "../context/Usercontext"
import MenuItem from "../components/menu/MenuItem"
import HomePageBarButton from "../components/UI/HomePageBarButton"
import ModalBackground from "../components/UI/ModalBackground"

interface MenuScreenProps {
  navigation: StackNavigation
}

const Menu: React.FC<MenuScreenProps> = ({ navigation }) => {
  const { user } = useAuth()

  const handleSignout = () => {
    signOut()
    navigation.navigate("Home")
  }

  return (
    <ModalBackground>
      <View style={styles.closeButton}>
        <HomePageBarButton
          icon={"close"}
          size={24}
          onPress={navigation.goBack}
        />
      </View>
      {user && (
        <>
          <MenuItem
            name="Profile"
            onPress={() => navigation.replace("UserProfile")}
          />
          <MenuItem
            name="Favourites"
            onPress={() => navigation.replace("Home")}
          />
          {/* UPDATE */}
        </>
      )}
      {!user && (
        <>
          <MenuItem name="Log In" onPress={() => navigation.replace("Login")} />
          <MenuItem
            name="Sign Up"
            onPress={() => navigation.replace("Signup")}
          />
        </>
      )}
      <MenuItem name="About" onPress={() => navigation.replace("Home")} />
      <MenuItem name="Settings" onPress={() => navigation.replace("Home")} />
      <MenuItem name="Contact" onPress={() => navigation.replace("Home")} />
      {/* UPDATE */}
      {user && <MenuItem name="Sign Out" onPress={handleSignout} />}
    </ModalBackground>
  )
}

export default Menu

const styles = StyleSheet.create({
  closeButton: {
    borderRadius: 25,
    overflow: "hidden",
    position: "absolute",
    right: "45%",
    bottom: -60,
  },
})
