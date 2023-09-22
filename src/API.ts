/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReportsInput = {
  id?: string | null,
  fitspotID: string,
  reportedByID: string,
  reportedReason: string,
};

export type ModelReportsConditionInput = {
  fitspotID?: ModelStringInput | null,
  reportedByID?: ModelStringInput | null,
  reportedReason?: ModelStringInput | null,
  and?: Array< ModelReportsConditionInput | null > | null,
  or?: Array< ModelReportsConditionInput | null > | null,
  not?: ModelReportsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Reports = {
  __typename: "Reports",
  id: string,
  fitspotID: string,
  reportedByID: string,
  reportedReason: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReportsInput = {
  id: string,
  fitspotID?: string | null,
  reportedByID?: string | null,
  reportedReason?: string | null,
};

export type DeleteReportsInput = {
  id: string,
};

export type CreateLikesInput = {
  id?: string | null,
  fitspotID: string,
  userID: string,
};

export type ModelLikesConditionInput = {
  fitspotID?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelLikesConditionInput | null > | null,
  or?: Array< ModelLikesConditionInput | null > | null,
  not?: ModelLikesConditionInput | null,
};

export type Likes = {
  __typename: "Likes",
  id: string,
  fitspotID: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLikesInput = {
  id: string,
  fitspotID?: string | null,
  userID?: string | null,
};

export type DeleteLikesInput = {
  id: string,
};

export type CreateFitspotInput = {
  id?: string | null,
  tile: string,
  coords: CoordInput,
  createdBy: string,
  images?: Array< string > | null,
  likes: number,
};

export type CoordInput = {
  lat: number,
  lng: number,
};

export type ModelFitspotConditionInput = {
  tile?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  images?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  and?: Array< ModelFitspotConditionInput | null > | null,
  or?: Array< ModelFitspotConditionInput | null > | null,
  not?: ModelFitspotConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Fitspot = {
  __typename: "Fitspot",
  id: string,
  tile: string,
  coords: Coord,
  createdBy: string,
  images?: Array< string > | null,
  likes: number,
  createdAt: string,
  updatedAt: string,
};

export type Coord = {
  __typename: "Coord",
  lat: number,
  lng: number,
};

export type UpdateFitspotInput = {
  id: string,
  tile?: string | null,
  coords?: CoordInput | null,
  createdBy?: string | null,
  images?: Array< string > | null,
  likes?: number | null,
};

export type DeleteFitspotInput = {
  id: string,
};

export type CreateAppUserInput = {
  id?: string | null,
  email: string,
  username: string,
  Favorites?: Array< string > | null,
};

export type ModelAppUserConditionInput = {
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  Favorites?: ModelStringInput | null,
  and?: Array< ModelAppUserConditionInput | null > | null,
  or?: Array< ModelAppUserConditionInput | null > | null,
  not?: ModelAppUserConditionInput | null,
};

export type AppUser = {
  __typename: "AppUser",
  id: string,
  email: string,
  username: string,
  Favorites?: Array< string > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAppUserInput = {
  id: string,
  email?: string | null,
  username?: string | null,
  Favorites?: Array< string > | null,
};

export type DeleteAppUserInput = {
  id: string,
};

export type ModelReportsFilterInput = {
  id?: ModelIDInput | null,
  fitspotID?: ModelStringInput | null,
  reportedByID?: ModelStringInput | null,
  reportedReason?: ModelStringInput | null,
  and?: Array< ModelReportsFilterInput | null > | null,
  or?: Array< ModelReportsFilterInput | null > | null,
  not?: ModelReportsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelReportsConnection = {
  __typename: "ModelReportsConnection",
  items:  Array<Reports | null >,
  nextToken?: string | null,
};

export type ModelLikesFilterInput = {
  id?: ModelIDInput | null,
  fitspotID?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelLikesFilterInput | null > | null,
  or?: Array< ModelLikesFilterInput | null > | null,
  not?: ModelLikesFilterInput | null,
};

export type ModelLikesConnection = {
  __typename: "ModelLikesConnection",
  items:  Array<Likes | null >,
  nextToken?: string | null,
};

export type ModelFitspotFilterInput = {
  id?: ModelIDInput | null,
  tile?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  images?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  and?: Array< ModelFitspotFilterInput | null > | null,
  or?: Array< ModelFitspotFilterInput | null > | null,
  not?: ModelFitspotFilterInput | null,
};

export type ModelFitspotConnection = {
  __typename: "ModelFitspotConnection",
  items:  Array<Fitspot | null >,
  nextToken?: string | null,
};

export type ModelAppUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  Favorites?: ModelStringInput | null,
  and?: Array< ModelAppUserFilterInput | null > | null,
  or?: Array< ModelAppUserFilterInput | null > | null,
  not?: ModelAppUserFilterInput | null,
};

export type ModelAppUserConnection = {
  __typename: "ModelAppUserConnection",
  items:  Array<AppUser | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionReportsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fitspotID?: ModelSubscriptionStringInput | null,
  reportedByID?: ModelSubscriptionStringInput | null,
  reportedReason?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReportsFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLikesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fitspotID?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLikesFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikesFilterInput | null > | null,
};

export type ModelSubscriptionFitspotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tile?: ModelSubscriptionStringInput | null,
  createdBy?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  likes?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionFitspotFilterInput | null > | null,
  or?: Array< ModelSubscriptionFitspotFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionAppUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  Favorites?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAppUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppUserFilterInput | null > | null,
};

export type CreateReportsMutationVariables = {
  input: CreateReportsInput,
  condition?: ModelReportsConditionInput | null,
};

export type CreateReportsMutation = {
  createReports?:  {
    __typename: "Reports",
    id: string,
    fitspotID: string,
    reportedByID: string,
    reportedReason: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReportsMutationVariables = {
  input: UpdateReportsInput,
  condition?: ModelReportsConditionInput | null,
};

export type UpdateReportsMutation = {
  updateReports?:  {
    __typename: "Reports",
    id: string,
    fitspotID: string,
    reportedByID: string,
    reportedReason: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReportsMutationVariables = {
  input: DeleteReportsInput,
  condition?: ModelReportsConditionInput | null,
};

export type DeleteReportsMutation = {
  deleteReports?:  {
    __typename: "Reports",
    id: string,
    fitspotID: string,
    reportedByID: string,
    reportedReason: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikesMutationVariables = {
  input: CreateLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type CreateLikesMutation = {
  createLikes?:  {
    __typename: "Likes",
    id: string,
    fitspotID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikesMutationVariables = {
  input: UpdateLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type UpdateLikesMutation = {
  updateLikes?:  {
    __typename: "Likes",
    id: string,
    fitspotID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikesMutationVariables = {
  input: DeleteLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type DeleteLikesMutation = {
  deleteLikes?:  {
    __typename: "Likes",
    id: string,
    fitspotID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFitspotMutationVariables = {
  input: CreateFitspotInput,
  condition?: ModelFitspotConditionInput | null,
};

export type CreateFitspotMutation = {
  createFitspot?:  {
    __typename: "Fitspot",
    id: string,
    tile: string,
    coords:  {
      __typename: "Coord",
      lat: number,
      lng: number,
    },
    createdBy: string,
    images?: Array< string > | null,
    likes: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFitspotMutationVariables = {
  input: UpdateFitspotInput,
  condition?: ModelFitspotConditionInput | null,
};

export type UpdateFitspotMutation = {
  updateFitspot?:  {
    __typename: "Fitspot",
    id: string,
    tile: string,
    coords:  {
      __typename: "Coord",
      lat: number,
      lng: number,
    },
    createdBy: string,
    images?: Array< string > | null,
    likes: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFitspotMutationVariables = {
  input: DeleteFitspotInput,
  condition?: ModelFitspotConditionInput | null,
};

export type DeleteFitspotMutation = {
  deleteFitspot?:  {
    __typename: "Fitspot",
    id: string,
    tile: string,
    coords:  {
      __typename: "Coord",
      lat: number,
      lng: number,
    },
    createdBy: string,
    images?: Array< string > | null,
    likes: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAppUserMutationVariables = {
  input: CreateAppUserInput,
  condition?: ModelAppUserConditionInput | null,
};

export type CreateAppUserMutation = {
  createAppUser?:  {
    __typename: "AppUser",
    id: string,
    email: string,
    username: string,
    Favorites?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAppUserMutationVariables = {
  input: UpdateAppUserInput,
  condition?: ModelAppUserConditionInput | null,
};

export type UpdateAppUserMutation = {
  updateAppUser?:  {
    __typename: "AppUser",
    id: string,
    email: string,
    username: string,
    Favorites?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAppUserMutationVariables = {
  input: DeleteAppUserInput,
  condition?: ModelAppUserConditionInput | null,
};

export type DeleteAppUserMutation = {
  deleteAppUser?:  {
    __typename: "AppUser",
    id: string,
    email: string,
    username: string,
    Favorites?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetReportsQueryVariables = {
  id: string,
};

export type GetReportsQuery = {
  getReports?:  {
    __typename: "Reports",
    id: string,
    fitspotID: string,
    reportedByID: string,
    reportedReason: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportsQuery = {
  listReports?:  {
    __typename: "ModelReportsConnection",
    items:  Array< {
      __typename: "Reports",
      id: string,
      fitspotID: string,
      reportedByID: string,
      reportedReason: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLikesQueryVariables = {
  id: string,
};

export type GetLikesQuery = {
  getLikes?:  {
    __typename: "Likes",
    id: string,
    fitspotID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikesConnection",
    items:  Array< {
      __typename: "Likes",
      id: string,
      fitspotID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFitspotQueryVariables = {
  id: string,
};

export type GetFitspotQuery = {
  getFitspot?:  {
    __typename: "Fitspot",
    id: string,
    tile: string,
    coords:  {
      __typename: "Coord",
      lat: number,
      lng: number,
    },
    createdBy: string,
    images?: Array< string > | null,
    likes: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFitspotsQueryVariables = {
  filter?: ModelFitspotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFitspotsQuery = {
  listFitspots?:  {
    __typename: "ModelFitspotConnection",
    items:  Array< {
      __typename: "Fitspot",
      id: string,
      tile: string,
      createdBy: string,
      images?: Array< string > | null,
      likes: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAppUserQueryVariables = {
  id: string,
};

export type GetAppUserQuery = {
  getAppUser?:  {
    __typename: "AppUser",
    id: string,
    email: string,
    username: string,
    Favorites?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAppUsersQueryVariables = {
  filter?: ModelAppUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppUsersQuery = {
  listAppUsers?:  {
    __typename: "ModelAppUserConnection",
    items:  Array< {
      __typename: "AppUser",
      id: string,
      email: string,
      username: string,
      Favorites?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateReportsSubscriptionVariables = {
  filter?: ModelSubscriptionReportsFilterInput | null,
};

export type OnCreateReportsSubscription = {
  onCreateReports?:  {
    __typename: "Reports",
    id: string,
    fitspotID: string,
    reportedByID: string,
    reportedReason: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportsSubscriptionVariables = {
  filter?: ModelSubscriptionReportsFilterInput | null,
};

export type OnUpdateReportsSubscription = {
  onUpdateReports?:  {
    __typename: "Reports",
    id: string,
    fitspotID: string,
    reportedByID: string,
    reportedReason: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportsSubscriptionVariables = {
  filter?: ModelSubscriptionReportsFilterInput | null,
};

export type OnDeleteReportsSubscription = {
  onDeleteReports?:  {
    __typename: "Reports",
    id: string,
    fitspotID: string,
    reportedByID: string,
    reportedReason: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikesSubscriptionVariables = {
  filter?: ModelSubscriptionLikesFilterInput | null,
};

export type OnCreateLikesSubscription = {
  onCreateLikes?:  {
    __typename: "Likes",
    id: string,
    fitspotID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikesSubscriptionVariables = {
  filter?: ModelSubscriptionLikesFilterInput | null,
};

export type OnUpdateLikesSubscription = {
  onUpdateLikes?:  {
    __typename: "Likes",
    id: string,
    fitspotID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikesSubscriptionVariables = {
  filter?: ModelSubscriptionLikesFilterInput | null,
};

export type OnDeleteLikesSubscription = {
  onDeleteLikes?:  {
    __typename: "Likes",
    id: string,
    fitspotID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFitspotSubscriptionVariables = {
  filter?: ModelSubscriptionFitspotFilterInput | null,
};

export type OnCreateFitspotSubscription = {
  onCreateFitspot?:  {
    __typename: "Fitspot",
    id: string,
    tile: string,
    coords:  {
      __typename: "Coord",
      lat: number,
      lng: number,
    },
    createdBy: string,
    images?: Array< string > | null,
    likes: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFitspotSubscriptionVariables = {
  filter?: ModelSubscriptionFitspotFilterInput | null,
};

export type OnUpdateFitspotSubscription = {
  onUpdateFitspot?:  {
    __typename: "Fitspot",
    id: string,
    tile: string,
    coords:  {
      __typename: "Coord",
      lat: number,
      lng: number,
    },
    createdBy: string,
    images?: Array< string > | null,
    likes: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFitspotSubscriptionVariables = {
  filter?: ModelSubscriptionFitspotFilterInput | null,
};

export type OnDeleteFitspotSubscription = {
  onDeleteFitspot?:  {
    __typename: "Fitspot",
    id: string,
    tile: string,
    coords:  {
      __typename: "Coord",
      lat: number,
      lng: number,
    },
    createdBy: string,
    images?: Array< string > | null,
    likes: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAppUserSubscriptionVariables = {
  filter?: ModelSubscriptionAppUserFilterInput | null,
};

export type OnCreateAppUserSubscription = {
  onCreateAppUser?:  {
    __typename: "AppUser",
    id: string,
    email: string,
    username: string,
    Favorites?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAppUserSubscriptionVariables = {
  filter?: ModelSubscriptionAppUserFilterInput | null,
};

export type OnUpdateAppUserSubscription = {
  onUpdateAppUser?:  {
    __typename: "AppUser",
    id: string,
    email: string,
    username: string,
    Favorites?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAppUserSubscriptionVariables = {
  filter?: ModelSubscriptionAppUserFilterInput | null,
};

export type OnDeleteAppUserSubscription = {
  onDeleteAppUser?:  {
    __typename: "AppUser",
    id: string,
    email: string,
    username: string,
    Favorites?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
