import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from "react-native"
import { StackNavigation } from "./Navigation"
import HomePageBar from "../components/UI/HomePageBar"
import { useAuth } from "../context/Usercontext"

import Map from "../components/home/Map"
import useLocation from "../hooks/useLocation"

interface HomeScreenProps {
  navigation: StackNavigation
}

// export type LocationObj = Location.LocationObject

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { user, isLoading } = useAuth()

  const location = useLocation()

  //  useEffect(() => {
  //    if (!isLoading && user === null) {
  //      navigation.navigate("Login")
  //    }
  //  }, [user, isLoading, navigation])

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.textContainer}>
          {user ? (
            <Text style={styles.headerText}>
              Hello {user.attributes.preferred_username}!
            </Text>
          ) : (
            <Text style={styles.headerText}>Hello User!</Text>
          )}
        </SafeAreaView>
        <View style={styles.homepageBarContainer}>
          <HomePageBar />
        </View>
        {location && <Map location={location} />}
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
    marginBottom: 75,
  },
  textContainer: {
    position: "absolute",
    top: 75,
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    fontSize: 24,
  },
})
