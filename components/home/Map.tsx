import { StyleSheet } from "react-native"
import MapView, { MapPressEvent, Marker } from "react-native-maps"
import * as Location from "expo-location"
import { useState } from "react"
import { useAddFitspot } from "../../context/AddFitspotContext"

interface MapProps {
  location: Location.LocationObject
}

type SelectedLocation = {
  latitude: number
  longitude: number
}

const Map: React.FC<MapProps> = ({ location }) => {
  const [selectedLocation, setSelectedLocation] = useState<SelectedLocation>()
  const { setSelectedFitspot } = useAddFitspot()

  const setLocationHandler = (event: MapPressEvent) => {
    const latitude = event.nativeEvent.coordinate.latitude
    const longitude = event.nativeEvent.coordinate.longitude

    setSelectedLocation({ latitude: latitude, longitude: longitude })
    setSelectedFitspot({ latitude: latitude, longitude: longitude })
  }

  const removePins = () => {
    setSelectedLocation(undefined)
    setSelectedFitspot(null)
  }

  return (
    <MapView
      onLongPress={removePins}
      style={styles.map}
      showsUserLocation={true}
      onPress={setLocationHandler}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {selectedLocation && (
        <Marker title="Search or Add Location" coordinate={selectedLocation} />
      )}
    </MapView>
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
