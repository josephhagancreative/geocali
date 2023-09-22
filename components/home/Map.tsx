import { StyleSheet } from "react-native"
import MapView from "react-native-maps"
import * as Location from "expo-location"

interface MapProps {
  location: Location.LocationObject
}

const Map: React.FC<MapProps> = ({ location }) => {
  return (
    <MapView
      style={styles.map}
      showsUserLocation={true}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  map: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: -1,
  },
})
