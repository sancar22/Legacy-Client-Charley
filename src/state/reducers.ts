import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import {
  IAction, INote, IRecipe, IState,
} from 'src/interfaces';

const initialState: IState = {
  isAuthenticated: false,
  username: 'nobody',
  recipeStore: [],
};

export const isAuthenticated = (
  state = initialState,
  action: IAction,
): IState => {
  switch (action.type) {
    case 'SET_IS_AUTHENTICATED':
      return { ...state, isAuthenticated: true };
    case 'SET_NOT_AUTHENTICATED':
      return { ...state, isAuthenticated: false };
    case 'LOGOUT_USER':
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export const username = (state = initialState, action: IAction): IState => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export const recipeStore = (state = initialState, action: IAction): IState => {
  switch (action.type) {
    case 'REWRITE_STORE':
      return { ...state, recipeStore: [...action.payload] };

    case 'DELETE_ITEM': {
      const newRecipes = state.recipeStore.filter(
        (recipe: IRecipe) => recipe._id.toString() !== action.payload,
      );

      return { ...state, recipeStore: [...newRecipes] };
    }

    case 'ADD_ITEM':
      return { ...state, recipeStore: [...state.recipeStore, action.payload] };

    case 'CHANGE_NAME': {
      const changeRecipeNameArr = state.recipeStore.map((recipe: IRecipe) => {
        if (recipe._id === action.payload.id) {
          recipe.name = action.payload.name;
        }
        return recipe;
      });
      return { ...state, recipeStore: [...changeRecipeNameArr] };
    }

    case 'ADD_NOTE': {
      const addNotesArr = state.recipeStore.map((recipe: IRecipe) => {
        if (recipe._id === action.payload.recipeId) {
          recipe.notes.push(action.payload.note);
        }
        return recipe;
      });
      return { ...state, recipeStore: [...addNotesArr] };
    }

    case 'DELETE_NOTE': {
      const deleteNotesArr = state.recipeStore.map((recipe: IRecipe) => {
        if (recipe._id === action.payload.recipeId) {
          const deleteNote = recipe.notes.filter(
            (note: INote) => note.id !== action.payload.noteId,
          );
          recipe.notes = deleteNote;
        }
        return recipe;
      });
      return { ...state, recipeStore: [...deleteNotesArr] };
    }

    default:
      return state;
  }
};

const appReducer = combineReducers({
  isAuthenticated,
  username,
  recipeStore,
});

const rootReducer = (state, action: IAction) => {
  if (action.type === 'LOGOUT_USER') {
    storage.removeItem('persist:root');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
