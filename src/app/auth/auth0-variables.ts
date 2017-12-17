interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '6y5mxwElv4XvbARqOnlbEI9K5XDxbm97',
  domain: 'morfi.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};