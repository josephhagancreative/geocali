import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { StackNavigation } from "./Navigation"
import HomePageBar from "../components/UI/HomePageBar"
import { useAuth } from "../context/Usercontext"

interface HomeScreenProps {
  navigation: StackNavigation
}

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to geoCali!</Text>
        <Text>This is the Homepage</Text>
        {user ? (
          <Text>{user.attributes.preferred_username}</Text>
        ) : (
          <Text>User not found</Text>
        )}
        <View style={styles.homepageBarContainer}>
          <HomePageBar />
        </View>
      </View>
    )
  }
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
  headerText: {
    fontFamily: "Montserrat-Bold",
  },
})
