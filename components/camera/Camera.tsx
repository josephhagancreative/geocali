import {
  View,
  Text,
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native"
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker"

const Camera = ({ pickedImages, setPickedImages }) => {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions()

  const verifyPermissions = async () => {
    if (
      cameraPermissionInformation &&
      cameraPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission()
      return permissionResponse.granted
    }

    if (
      cameraPermissionInformation &&
      cameraPermissionInformation.status === PermissionStatus.DENIED
    ) {
      Alert.alert(
        "Insufficient Permissions",
        "You need to grant camera permissions to use this feature"
      )
      return false
    }
    return true
  }

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions()

    if (!hasPermission) {
      return
    }
    const image = await launchCameraAsync({
      quality: 0.5,
    })

    if (image.canceled === false && image.assets) {
      setPickedImages((prevState) => [...prevState, image.assets[0].uri])
    }
  }

  const deleteTakenImage = (indexToRemove: number) => {
    if (pickedImages.length === 1) {
      setPickedImages([])
      return
    }
    setPickedImages((prevState) =>
      prevState.filter((_, index) => index !== indexToRemove)
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.labelText}>Add Images:</Text>
        <Pressable style={styles.takeImageButton} onPress={takeImageHandler}>
          <Text style={styles.labelText}>
            {pickedImages.length === 0 ? "Take Image" : "Take Another Image"}
          </Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.imageScroll}
        showsHorizontalScrollIndicator={false}>
        {pickedImages &&
          pickedImages.map((image, index) => (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.imagewrapper}
              key={index}>
              <Pressable
                style={styles.buttonContainer}
                onPress={() => deleteTakenImage(index)}>
                <Text style={styles.textClose}>X</Text>
              </Pressable>
              <Image source={{ uri: image }} style={styles.image} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageScroll: {
    height: "auto",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  takeImageButton: {
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
  },
  imagewrapper: {
    width: 300,
    height: 300,
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    zIndex: 10,
    position: "absolute",
    padding: 5,
    paddingHorizontal: 9,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 40,
    right: 0,
    opacity: 0.5,
  },
  textClose: {
    fontFamily: "Montserrat-Bold",
  },
  labelText: {
    color: "#3f3b3f",
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
})
