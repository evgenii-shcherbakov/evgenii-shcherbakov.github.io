export interface BackendAuthRequest {
  email: string;
  password: string;
}

export interface BackendAuthResponse {
  token: string;
}

export interface BackendAuthUserIdentityResponse {
  id: string;
}
