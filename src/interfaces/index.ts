export interface ILogin {
  email?: string;
  password?: string;
}
export interface ISignup extends ILogin {
  username?: string;
}
export interface IState {
  isAuthenticated: boolean;
  username: string;
  recipeStore: [];
  _persist: { version: number; rehydrated: boolean };
}
