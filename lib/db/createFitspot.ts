import { API } from "aws-amplify"
import { createFitspot } from "../../src/graphql/mutations"

export const createNewFitspot = async (
  title: string,
  coords: number[],
  geohash: string,
  userId: string,
  images: string[],
  facilities: string[]
) => {
  const newFitspot = await API.graphql({
    query: createFitspot,
    variables: {
      input: {
        title: title,
        coords: coords,
        geohash: geohash,
        createdBy: userId,
        likes: 0,
        images: images,
        facilities: facilities,
      },
    },
  })
  console.log(newFitspot)
}
