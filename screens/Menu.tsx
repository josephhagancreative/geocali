import { View, Text, Button } from "react-native"
import { useContext } from "react"
import { signOut } from "../lib/auth/signout"
import { StackNavigation } from "./Navigation"
import { UserContext } from "../context/Usercontext"

interface MenuScreenProps {
  navigation: StackNavigation
}

const Menu: React.FC<MenuScreenProps> = ({ navigation }) => {
  const { user, setIsLoading } = useContext(UserContext)

  const handleSignout = () => {
    signOut()
    navigation.navigate("Home")
  }

  return (
    <View>
      <Text>Menu</Text>
      {user && <Button title="Sign Out" onPress={handleSignout} />}
    </View>
  )
}

export default Menu
