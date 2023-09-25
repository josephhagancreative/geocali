import { View, Text, ScrollView, StyleSheet } from "react-native"
import FacilityButton from "./FacilityButton"
import { FacilityComponentProps } from "../../screens/AddLocation"

const FacilitiesSelector: React.FC<FacilityComponentProps> = ({
  facilities,
  setFacilities,
}) => {
  const updateSelectedFacilities = (id: number) => {
    setFacilities((prevFacilities) =>
      prevFacilities.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    )
  }
  return (
    <View>
      <Text style={styles.labelText}>Facilities Selector</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {facilities.map((facility) => (
          <FacilityButton
            key={facility.id}
            text={facility.name}
            onPress={() => updateSelectedFacilities(facility.id)}
            isSelected={facility.isSelected}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default FacilitiesSelector

const styles = StyleSheet.create({
  labelText: {
    color: "#3f3b3f",
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
})
