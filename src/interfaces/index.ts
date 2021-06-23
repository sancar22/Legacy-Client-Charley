export interface ILogin {
  email?: string;
  password?: string;
}

export interface ISignup extends ILogin {
  username?: string;
}

export interface INote {
  id: string;
  text: string;
}

export interface IExtractedRecipe {
  name: string;
  keywords: string[];
  image: string;
  recipeYield: string;
  recipeIngredient: string[];
  recipeInstructions: string[];
  author: string;
  publisher?: string;
}

export interface IRecipe extends IExtractedRecipe {
  _id: string;
  notes: INote[];
  origin: string;
  url: string;
}

export interface IState {
  isAuthenticated: boolean;
  username: string;
  recipeStore: IRecipe[];
  _persist?: { version: number; rehydrated: boolean };
}

// TODO
export interface IAction {
  type: string;
  payload?: any;
}
