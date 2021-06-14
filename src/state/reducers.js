import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';


const isAuthenticated = (state = false, action) => {

  switch (action.type) {
    case 'SET_IS_AUTHENTICATED':
      state = true;
      return state;
    case 'SET_NOT_AUTHENTICATED':
      state = false;
      return state;
    case 'LOGOUT_USER': return false;
    default: return state;
  }

};

const username = (state = 'nobody', action) => {
  switch (action.type) {
  case 'SET_USERNAME':
    state = action.payload
    return state;
  default: return state;
  }
};

const recipeStore = (state=[], action) => {
  switch (action.type) {

    case 'REWRITE_STORE':
      state = [...action.payload];
      return state;

    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.payload);

    case 'ADD_ITEM':
      return [...state, action.recipe]

    case 'CHANGE_NAME':
      state.forEach((recipe) => {
        if (recipe.id === action.id) recipe.name = action.name;
      })
      return [...state];

    case 'ADD_NOTE':
      state.forEach((recipe) => {
        if (recipe.id === action.id) recipe.notes.push(action.note);
      })
      return [...state];

    case 'DELETE_NOTE':
      state.forEach((recipe) => {
        if (recipe.id === action.recipeId) {
          const filtered = recipe.notes.filter(note => note.id !== action.noteId)
          recipe.notes = filtered;
        }
      })
      return [...state]

    default: return state;
  }
}


const appReducer = combineReducers({
  isAuthenticated,
  username,
  recipeStore
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    storage.removeItem('persist:root');
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}


export default rootReducer;