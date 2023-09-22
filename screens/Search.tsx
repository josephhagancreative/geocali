import { View, Text } from "react-native"
import { useAddFitspot } from "../context/AddFitspotContext"

const Search = () => {
  const { selectedFitspot } = useAddFitspot()

  return (
    <View>
      {selectedFitspot && (
        <Text>
          Let's search for fit spots around {selectedFitspot.latitude} x{" "}
          {selectedFitspot.longitude}
        </Text>
      )}
      <Text>Search</Text>
    </View>
  )
}

export default Search
