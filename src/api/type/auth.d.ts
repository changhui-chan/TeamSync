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
type SignUpRequest = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

type SignUpResponse = AuthResponse;

//post - /{teamId}/auth/signIn
type SignInRequest = {
  email: string;
  password: string;
};

type SignInResponse = AuthResponse;

//post - /{teamId}/auth/refresh-token
type RefreshTokenRequest = {
  refreshToken: string;
};

type RefreshTokenResponse = {
  accessToken: string;
};

//post - /{teamId}/auth/signIn/{provider}
type SocialSignInProvider = SocialAuthProvider;

type SocialSignInRequest = {
  state: string;
  redirectUri: string;
  token: string;
};

type SocialSignInResponse = AuthResponse;
