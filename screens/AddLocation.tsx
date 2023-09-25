import { ScrollView, View, Text, StyleSheet } from "react-native"
import { useAddFitspot } from "../context/AddFitspotContext"
import ModalBackground from "../components/UI/ModalBackground"
import ModernTextInput from "../components/UI/ModernTextInput"
import { useState } from "react"
import Button from "../components/UI/Button"
import FacilitiesSelector from "../components/UI/FacilitiesSelector"
import Geohash from "latlon-geohash"
import Camera from "../components/camera/Camera"
import { StackNavigation } from "./Navigation"
import { useAuth } from "../context/Usercontext"
import { createNewFitspot } from "../lib/db/createFitspot"
import { uploadImage } from "../lib/db/uploadImage"

type AddLocationProps = {
  navigation: StackNavigation
}

export interface FacilityInterface {
  id: number
  name: string
  isSelected: boolean
}

export interface FacilityComponentProps {
  facilities: FacilityInterface[]
  setFacilities: React.Dispatch<React.SetStateAction<FacilityInterface[]>>
}

const AddLocation: React.FC<AddLocationProps> = ({
  navigation,
}: AddLocationProps) => {
  const [title, setTitle] = useState("")
  const [facilities, setFacilities] = useState([
    { id: 1, name: "pullup bar", isSelected: false },
    { id: 2, name: "parallel bars", isSelected: false },
    { id: 3, name: "low bar", isSelected: false },
    { id: 4, name: "bench", isSelected: false },
    { id: 5, name: "other", isSelected: false },
  ])
  const [pickedImages, setPickedImages] = useState<string[]>([])
  const { user, isLoading } = useAuth()

  const { selectedFitspot } = useAddFitspot()

  const handleSubmit = async () => {
    if (!selectedFitspot || !user) return

    const imageUris = await uploadImage(pickedImages)

    const containedFacilities = facilities.filter(
      (facility) => facility.isSelected === true
    )

    const filteredFacilities = containedFacilities.map(
      (facility) => facility.name
    )

    const geohash = Geohash.encode(
      selectedFitspot.latitude,
      selectedFitspot.longitude,
      12
    )
    try {
      console.log("Creating Fit Spot")
      createNewFitspot(
        title,
        [selectedFitspot.latitude, selectedFitspot.longitude],
        geohash,
        user?.attributes.email,
        imageUris,
        filteredFacilities
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ModalBackground>
      {selectedFitspot && (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.labelText}>Lets add a new Fitspot</Text>
          <ModernTextInput
            text="Title"
            defaultValue={title}
            placeholder="fit-spot-title"
            onChangeText={(newTitle) => setTitle(newTitle)}
          />
          <FacilitiesSelector
            facilities={facilities}
            setFacilities={setFacilities}
          />
          <Camera
            pickedImages={pickedImages}
            setPickedImages={setPickedImages}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.halfWidth}>
              <Button onPress={() => navigation.goBack()} title="Back" />
            </View>
            <View style={styles.halfWidth}>
              <Button onPress={handleSubmit} title="Add Fitspot" />
            </View>
          </View>
        </ScrollView>
      )}
    </ModalBackground>
  )
}

export default AddLocation

const styles = StyleSheet.create({
  labelText: {
    color: "#3f3b3f",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  halfWidth: {
    flex: 1 / 2,
  },
})
