import { Text } from "react-native"
import { useAddFitspot } from "../context/AddFitspotContext"
import ModalBackground from "../components/UI/ModalBackground"

const Search = () => {
  const { selectedFitspot } = useAddFitspot()

  return (
    <ModalBackground>
      {selectedFitspot && (
        <Text>
          Let's search for fit spots around {selectedFitspot.latitude} x{" "}
          {selectedFitspot.longitude}
        </Text>
      )}
      <Text>Search</Text>
    </ModalBackground>
  )
}

export default Search
