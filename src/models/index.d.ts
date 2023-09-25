import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerReports = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reports, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fitspotID: string;
  readonly reportedByID: string;
  readonly reportedReason: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReports = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reports, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fitspotID: string;
  readonly reportedByID: string;
  readonly reportedReason: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reports = LazyLoading extends LazyLoadingDisabled ? EagerReports : LazyReports

export declare const Reports: (new (init: ModelInit<Reports>) => Reports) & {
  copyOf(source: Reports, mutator: (draft: MutableModel<Reports>) => MutableModel<Reports> | void): Reports;
}

type EagerLikes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Likes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fitspotID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLikes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Likes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fitspotID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Likes = LazyLoading extends LazyLoadingDisabled ? EagerLikes : LazyLikes

export declare const Likes: (new (init: ModelInit<Likes>) => Likes) & {
  copyOf(source: Likes, mutator: (draft: MutableModel<Likes>) => MutableModel<Likes> | void): Likes;
}

type EagerFitspot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fitspot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly geohash: string;
  readonly createdBy: string;
  readonly likes: number;
  readonly images?: string[] | null;
  readonly facilities: string[];
  readonly coords: number[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFitspot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fitspot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly geohash: string;
  readonly createdBy: string;
  readonly likes: number;
  readonly images?: string[] | null;
  readonly facilities: string[];
  readonly coords: number[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Fitspot = LazyLoading extends LazyLoadingDisabled ? EagerFitspot : LazyFitspot

export declare const Fitspot: (new (init: ModelInit<Fitspot>) => Fitspot) & {
  copyOf(source: Fitspot, mutator: (draft: MutableModel<Fitspot>) => MutableModel<Fitspot> | void): Fitspot;
}

type EagerAppUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly username: string;
  readonly Favorites?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly username: string;
  readonly Favorites?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AppUser = LazyLoading extends LazyLoadingDisabled ? EagerAppUser : LazyAppUser

export declare const AppUser: (new (init: ModelInit<AppUser>) => AppUser) & {
  copyOf(source: AppUser, mutator: (draft: MutableModel<AppUser>) => MutableModel<AppUser> | void): AppUser;
}