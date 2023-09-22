/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReports = /* GraphQL */ `
  mutation CreateReports(
    $input: CreateReportsInput!
    $condition: ModelReportsConditionInput
  ) {
    createReports(input: $input, condition: $condition) {
      id
      fitspotID
      reportedByID
      reportedReason
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReports = /* GraphQL */ `
  mutation UpdateReports(
    $input: UpdateReportsInput!
    $condition: ModelReportsConditionInput
  ) {
    updateReports(input: $input, condition: $condition) {
      id
      fitspotID
      reportedByID
      reportedReason
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReports = /* GraphQL */ `
  mutation DeleteReports(
    $input: DeleteReportsInput!
    $condition: ModelReportsConditionInput
  ) {
    deleteReports(input: $input, condition: $condition) {
      id
      fitspotID
      reportedByID
      reportedReason
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLikes = /* GraphQL */ `
  mutation CreateLikes(
    $input: CreateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    createLikes(input: $input, condition: $condition) {
      id
      fitspotID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLikes = /* GraphQL */ `
  mutation UpdateLikes(
    $input: UpdateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    updateLikes(input: $input, condition: $condition) {
      id
      fitspotID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLikes = /* GraphQL */ `
  mutation DeleteLikes(
    $input: DeleteLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    deleteLikes(input: $input, condition: $condition) {
      id
      fitspotID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createFitspot = /* GraphQL */ `
  mutation CreateFitspot(
    $input: CreateFitspotInput!
    $condition: ModelFitspotConditionInput
  ) {
    createFitspot(input: $input, condition: $condition) {
      id
      tile
      coords {
        lat
        lng
        __typename
      }
      createdBy
      images
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateFitspot = /* GraphQL */ `
  mutation UpdateFitspot(
    $input: UpdateFitspotInput!
    $condition: ModelFitspotConditionInput
  ) {
    updateFitspot(input: $input, condition: $condition) {
      id
      tile
      coords {
        lat
        lng
        __typename
      }
      createdBy
      images
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteFitspot = /* GraphQL */ `
  mutation DeleteFitspot(
    $input: DeleteFitspotInput!
    $condition: ModelFitspotConditionInput
  ) {
    deleteFitspot(input: $input, condition: $condition) {
      id
      tile
      coords {
        lat
        lng
        __typename
      }
      createdBy
      images
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAppUser = /* GraphQL */ `
  mutation CreateAppUser(
    $input: CreateAppUserInput!
    $condition: ModelAppUserConditionInput
  ) {
    createAppUser(input: $input, condition: $condition) {
      id
      email
      username
      Favorites
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAppUser = /* GraphQL */ `
  mutation UpdateAppUser(
    $input: UpdateAppUserInput!
    $condition: ModelAppUserConditionInput
  ) {
    updateAppUser(input: $input, condition: $condition) {
      id
      email
      username
      Favorites
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAppUser = /* GraphQL */ `
  mutation DeleteAppUser(
    $input: DeleteAppUserInput!
    $condition: ModelAppUserConditionInput
  ) {
    deleteAppUser(input: $input, condition: $condition) {
      id
      email
      username
      Favorites
      createdAt
      updatedAt
      __typename
    }
  }
`;
