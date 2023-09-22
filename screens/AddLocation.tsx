import { View, Text } from "react-native"
import { useAddFitspot } from "../context/AddFitspotContext"

const AddLocation = () => {
  const { selectedFitspot } = useAddFitspot()

  return (
    <View>
      {selectedFitspot && (
        <View>
          <Text>You have selected a Fitspot</Text>
          <Text>
            You have selected {selectedFitspot.latitude} :{" "}
            {selectedFitspot.longitude}{" "}
          </Text>
        </View>
      )}
      <Text>AddLocation</Text>
    </View>
  )
}

export default AddLocation
