interface UserAttributes {
  email: string
  email_verified: boolean
  preferred_username: string
  sub: string
}

export interface User {
  Session: any
  attributes: UserAttributes
  authenticationFlowType: string
  client: any
  keyPrefix: string
  pool: any
  preferredMFA: string
  signInUserSession: any
}
