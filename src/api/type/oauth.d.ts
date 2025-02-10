//post - /{teamId}/oauthApps
enum OAuthProvider {
  GOOGLE = 'GOOGLE',
  GITHUB = 'GITHUB',
  FACEBOOK = 'FACEBOOK',
}

type CreateOAuthAppRequest = {
  appSecret: string;
  appKey: string;
  provider: OAuthProvider;
};

type CreateOAuthAppResponse = {
  createdAt: string;
  updatedAt: string;
  appSecret: string;
  appKey: string;
  provider: OAuthProvider;
  teamId: string;
  id: number;
};
