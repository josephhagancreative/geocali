import { Storage } from "aws-amplify"

export const uploadImage = async (images: string[]) => {
  console.log("Uploading images")
  // Upload to S3
  Storage.configure({ region: "ap-northeast-1" })
  let newImageUriArray = []
  for (const image of images) {
    try {
      const response = await fetch(image)
      const blob = await response.blob()
      const putImage = await Storage.put(`image${new Date()}`, blob, {
        contentType: "image/jpeg",
      })
      newImageUriArray.push(putImage.key)
    } catch (err) {
      console.log("Error uploading file:", err)
    }
  }

  // try {
  //   const response = await fetch(image)
  //   const blob = await response.blob()
  //   const putImage = await Storage.put("yourKeyHere3.jpg", blob, {
  //     contentType: "image/jpeg", // contentType is optional
  //   })
  //   return putImage
  // } catch (err) {
  //   console.log("Error uploading file:", err)
  // }
  console.log("finished uploading image")
  return newImageUriArray
}
