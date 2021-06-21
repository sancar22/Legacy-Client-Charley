import { IAction, IRecipe } from 'src/interfaces';

export const set_is_authenticated = (): IAction => ({
  type: 'SET_IS_AUTHENTICATED',
});

export const logout_user = (): IAction => ({
  type: 'LOGOUT_USER',
});

export const set_not_authenticated = (): IAction => ({
  type: 'SET_NOT_AUTHENTICATED',
});

export const set_username = (username: string): IAction => ({
  type: 'SET_USERNAME',
  payload: username,
});

export const rewrite_store = (store: IRecipe[]): IAction => ({
  type: 'REWRITE_STORE',
  payload: store,
});

export const add_item = (recipe: IRecipe): IAction => ({
  type: 'ADD_ITEM',
  payload: recipe,
});

export const delete_item = (id: string): IAction => ({
  type: 'DELETE_ITEM',
  payload: id,
});

export const change_name = (id: string, name: string): IAction => ({
  type: 'CHANGE_NAME',
  payload: { id, name },
});

export const add_note = (id: string, note: string): IAction => ({
  type: 'ADD_NOTE',
  payload: { id, note },
});

export const delete_note = (recipeId: string, noteId: string): IAction => ({
  type: 'DELETE_NOTE',
  payload: { recipeId, noteId },
});
