import { View, Text } from "react-native"
import { useContext } from "react"
import { UserContext } from "../context/Usercontext"

const UserProfile = () => {
  const { user } = useContext(UserContext)

  return (
    <View>
      {user && <Text>Welcome {user.attributes.preferred_username}</Text>}
    </View>
  )
}

export default UserProfile
