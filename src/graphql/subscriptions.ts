/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReports = /* GraphQL */ `
  subscription OnCreateReports($filter: ModelSubscriptionReportsFilterInput) {
    onCreateReports(filter: $filter) {
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
export const onUpdateReports = /* GraphQL */ `
  subscription OnUpdateReports($filter: ModelSubscriptionReportsFilterInput) {
    onUpdateReports(filter: $filter) {
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
export const onDeleteReports = /* GraphQL */ `
  subscription OnDeleteReports($filter: ModelSubscriptionReportsFilterInput) {
    onDeleteReports(filter: $filter) {
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
export const onCreateLikes = /* GraphQL */ `
  subscription OnCreateLikes($filter: ModelSubscriptionLikesFilterInput) {
    onCreateLikes(filter: $filter) {
      id
      fitspotID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLikes = /* GraphQL */ `
  subscription OnUpdateLikes($filter: ModelSubscriptionLikesFilterInput) {
    onUpdateLikes(filter: $filter) {
      id
      fitspotID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLikes = /* GraphQL */ `
  subscription OnDeleteLikes($filter: ModelSubscriptionLikesFilterInput) {
    onDeleteLikes(filter: $filter) {
      id
      fitspotID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFitspot = /* GraphQL */ `
  subscription OnCreateFitspot($filter: ModelSubscriptionFitspotFilterInput) {
    onCreateFitspot(filter: $filter) {
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
export const onUpdateFitspot = /* GraphQL */ `
  subscription OnUpdateFitspot($filter: ModelSubscriptionFitspotFilterInput) {
    onUpdateFitspot(filter: $filter) {
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
export const onDeleteFitspot = /* GraphQL */ `
  subscription OnDeleteFitspot($filter: ModelSubscriptionFitspotFilterInput) {
    onDeleteFitspot(filter: $filter) {
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
export const onCreateAppUser = /* GraphQL */ `
  subscription OnCreateAppUser($filter: ModelSubscriptionAppUserFilterInput) {
    onCreateAppUser(filter: $filter) {
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
export const onUpdateAppUser = /* GraphQL */ `
  subscription OnUpdateAppUser($filter: ModelSubscriptionAppUserFilterInput) {
    onUpdateAppUser(filter: $filter) {
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
export const onDeleteAppUser = /* GraphQL */ `
  subscription OnDeleteAppUser($filter: ModelSubscriptionAppUserFilterInput) {
    onDeleteAppUser(filter: $filter) {
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
