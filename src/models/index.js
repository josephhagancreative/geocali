// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Reports, Likes, Fitspot, AppUser } = initSchema(schema);

export {
  Reports,
  Likes,
  Fitspot,
  AppUser
};