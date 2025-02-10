interface User {
  id: number;
  email: string;
  nickname: string;
  updatedAt: string;
  createdAt: string;
  image: string | null;
  teamId: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

enum SocialAuthProvider {
  GOOGLE = 'GOOGLE',
  KAKAO = 'KAKAO',
}

//post - /{teamId}/auth/signUp
export type SignUpRequest = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

export type SignUpResponse = AuthResponse;

//post - /{teamId}/auth/signIn
export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = AuthResponse;

//post - /{teamId}/auth/refresh-token
export type RefreshTokenRequest = {
  refreshToken: string;
};

export type RefreshTokenResponse = {
  accessToken: string;
};

//post - /{teamId}/auth/signIn/{provider}
export type SocialSignInProvider = SocialAuthProvider;

export type SocialSignInRequest = {
  state: string;
  redirectUri: string;
  token: string;
};

export type SocialSignInResponse = AuthResponse;
