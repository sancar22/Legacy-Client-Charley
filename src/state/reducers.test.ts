import { IAction, INote, IRecipe } from 'src/interfaces';
import * as reducers from './reducers';
import * as mockData from '../mockData';

describe('isAuthenticated reducer', () => {
  const initialAuthState = {
    isAuthenticated: false,
    username: 'nobody',
    recipeStore: [],
  };
  test('should return the initial state', () => {
    expect(reducers.isAuthenticated(undefined, {})).toEqual(initialAuthState);
  });
  test('should set is authenticated ', () => {
    const action: IAction = {
      type: 'SET_IS_AUTHENTICATED',
    };
    expect(reducers.isAuthenticated(initialAuthState, action)).toEqual({
      ...initialAuthState,
      isAuthenticated: true,
    });
  });
  test('should set is not authenticated', () => {
    const action: IAction = {
      type: 'SET_NOT_AUTHENTICATED',
    };
    expect(reducers.isAuthenticated(initialAuthState, action)).toEqual({
      ...initialAuthState,
      isAuthenticated: false,
    });
  });
  test('should logout user', () => {
    const action: IAction = {
      type: 'LOGOUT_USER',
    };
    expect(reducers.isAuthenticated(initialAuthState, action)).toEqual({
      ...initialAuthState,
      isAuthenticated: false,
    });
  });
});

describe('username reducer', () => {
  const initialUserState = {
    isAuthenticated: false,
    username: 'nobody',
    recipeStore: [],
  };
  test('should return the initial state', () => {
    expect(reducers.username(undefined, {})).toEqual(initialUserState);
  });
  test('should set username', () => {
    const action: IAction = {
      type: 'SET_USERNAME',
      payload: 'Barney',
    };
    expect(reducers.username(initialUserState, action)).toEqual({
      ...initialUserState,
      username: action.payload,
    });
  });
});
describe('recipeStore reducer', () => {
  const initialRecipeStoreState = {
    isAuthenticated: false,
    username: 'nobody',
    recipeStore: mockData.mockRecipeStore,
  };
  test('should return the initial state', () => {
    expect(reducers.recipeStore(initialRecipeStoreState, {})).toEqual(
      initialRecipeStoreState,
    );
  });
  test('should rewrite store', () => {
    const action: IAction = {
      type: 'REWRITE_STORE',
      payload: mockData.mockRecipeStore,
    };
    expect(reducers.recipeStore(initialRecipeStoreState, action)).toEqual({
      ...initialRecipeStoreState,
      recipeStore: [...action.payload],
    });
  });
  test('should delete recipe', () => {
    const action: IAction = {
      type: 'DELETE_ITEM',
      payload: '60d20d2ecd08a332200578f0',
    };

    const newRecipes = initialRecipeStoreState.recipeStore.filter(
      (recipe: IRecipe) => recipe._id !== action.payload,
    );

    expect(reducers.recipeStore(initialRecipeStoreState, action)).toEqual({
      ...initialRecipeStoreState,
      recipeStore: [...newRecipes],
    });
  });
  test('should add recipe', () => {
    const action: IAction = {
      type: 'ADD_ITEM',
      payload: mockData.mockRecipe,
    };

    expect(reducers.recipeStore(initialRecipeStoreState, action)).toEqual({
      ...initialRecipeStoreState,
      recipeStore: [...initialRecipeStoreState.recipeStore, action.payload],
    });
  });
  test('should change recipe name', () => {
    const action: IAction = {
      type: 'CHANGE_NAME',
      payload: mockData.mockRecipe,
    };
    const changeRecipeNameArr = initialRecipeStoreState.recipeStore.map(
      (recipe: IRecipe) => {
        if (recipe._id === action.payload.id) {
          recipe.name = action.payload.name;
        }
        return recipe;
      },
    );
    expect(reducers.recipeStore(initialRecipeStoreState, action)).toEqual({
      ...initialRecipeStoreState,
      recipeStore: [...changeRecipeNameArr],
    });
  });
  test('should add note', () => {
    const action: IAction = {
      type: 'ADD_NOTE',
      payload: {
        recipeId: '60d20d2ecd08a332200578f0',
        note: { id: 'd', text: 'are they' },
      },
    };
    const addNotesArr = initialRecipeStoreState.recipeStore.map(
      (recipe: IRecipe) => {
        if (recipe._id === action.payload.recipeId) {
          recipe.notes.push(action.payload.note);
        }
        return recipe;
      },
    );
    expect(reducers.recipeStore(initialRecipeStoreState, action)).toEqual({
      ...initialRecipeStoreState,
      recipeStore: [...addNotesArr],
    });
  });
  test('should delete note', () => {
    const action: IAction = {
      type: 'DELETE_NOTE',
      payload: {
        recipeId: '60d20d2ecd08a332200578f0',
        noteId: 'a',
      },
    };
    const deleteNotesArr = initialRecipeStoreState.recipeStore.map(
      (recipe: IRecipe) => {
        if (recipe._id === action.payload.recipeId) {
          const deleteNote = recipe.notes.filter(
            (note: INote) => note.id !== action.payload.noteId,
          );
          recipe.notes = deleteNote;
        }
        return recipe;
      },
    );
    expect(reducers.recipeStore(initialRecipeStoreState, action)).toEqual({
      ...initialRecipeStoreState,
      recipeStore: [...deleteNotesArr],
    });
  });
});
