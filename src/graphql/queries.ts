/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReports = /* GraphQL */ `
  query GetReports($id: ID!) {
    getReports(id: $id) {
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
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fitspotID
        reportedByID
        reportedReason
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLikes = /* GraphQL */ `
  query GetLikes($id: ID!) {
    getLikes(id: $id) {
      id
      fitspotID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fitspotID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFitspot = /* GraphQL */ `
  query GetFitspot($id: ID!) {
    getFitspot(id: $id) {
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
export const listFitspots = /* GraphQL */ `
  query ListFitspots(
    $filter: ModelFitspotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFitspots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tile
        createdBy
        images
        likes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAppUser = /* GraphQL */ `
  query GetAppUser($id: ID!) {
    getAppUser(id: $id) {
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
export const listAppUsers = /* GraphQL */ `
  query ListAppUsers(
    $filter: ModelAppUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        username
        Favorites
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
