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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncReports = /* GraphQL */ `
  query SyncReports(
    $filter: ModelReportsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fitspotID
        reportedByID
        reportedReason
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fitspotID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getFitspot = /* GraphQL */ `
  query GetFitspot($id: ID!) {
    getFitspot(id: $id) {
      id
      title
      geohash
      createdBy
      likes
      images
      facilities
      coords
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        title
        geohash
        createdBy
        likes
        images
        facilities
        coords
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFitspots = /* GraphQL */ `
  query SyncFitspots(
    $filter: ModelFitspotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFitspots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        geohash
        createdBy
        likes
        images
        facilities
        coords
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAppUsers = /* GraphQL */ `
  query SyncAppUsers(
    $filter: ModelAppUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        username
        Favorites
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
