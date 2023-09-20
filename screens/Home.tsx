import { View, Text, StyleSheet } from "react-native"
import { useContext } from "react"
import { UserContext } from "../context/Usercontext"
import { StackNavigation } from "./Navigation"
import HomePageBar from "../components/UI/HomePageBar"

interface HomeScreenProps {
  navigation: StackNavigation
}

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { user, setIsLoading } = useContext(UserContext)

  return (
    <View style={styles.container}>
      <Text>Welcome to geoCali!</Text>
      <Text>This is the Homepage</Text>
      {user && <Text>Welcome {user.attributes.preferred_username}</Text>}
      <View style={styles.homepageBarContainer}>
        <HomePageBar />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  homepageBarContainer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 50,
  },
})
