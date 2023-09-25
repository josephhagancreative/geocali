import { View, Text } from "react-native"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/Usercontext"
import { API, graphqlOperation } from "aws-amplify"
import { GraphQLQuery } from "@aws-amplify/api"
import * as queries from "../src/graphql/queries"
import { GetFitspotQuery, ListFitspotsQuery } from "../src/API"
import { Fitspot } from "../src/models"

const UserProfile = () => {
  const { user } = useContext(UserContext)
  const [fitSpots, setFitSpots] = useState([])

  useEffect(() => {
    const fetchFitSpots = async () => {
      console.log("Firing")
      try {
        const result = await API.graphql<GraphQLQuery<ListFitspotsQuery>>(
          graphqlOperation(queries.listFitspots)
        )
        console.log(result)
        const fetchedFitSpots = result.data?.listFitspots?.items
        if (fetchedFitSpots) {
          setFitSpots(fetchedFitSpots)
          console.log(fitSpots)
        }
      } catch (error) {
        console.error("Error fetching fit spots: ", error)
      }
    }

    fetchFitSpots()
  }, [])

  return (
    <View>
      {user && <Text>Welcome {user.attributes.preferred_username}</Text>}
      {fitSpots && fitSpots.map((fitspot) => <Text>{fitspot.geohash}</Text>)}
    </View>
  )
}

export default UserProfile
