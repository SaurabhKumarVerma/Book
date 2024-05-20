interface User {
  email: string;
  familyName: string;
  givenName: string;
  id: string;
  name: string;
  photo: string;
}

interface ITokenData {
  idToken: string;
  scopes: string[];
  serverAuthCode: string;
  user: User;
}
