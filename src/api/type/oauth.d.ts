enum OAuthProvider {
  GOOGLE = 'GOOGLE',
  GITHUB = 'GITHUB',
  FACEBOOK = 'FACEBOOK',
}

//post - /{teamId}/oauthApps
export type CreateOAuthAppRequest = {
  appSecret: string;
  appKey: string;
  provider: OAuthProvider;
};

export type CreateOAuthAppResponse = {
  createdAt: string;
  updatedAt: string;
  appSecret: string;
  appKey: string;
  provider: OAuthProvider;
  teamId: string;
  id: number;
};
