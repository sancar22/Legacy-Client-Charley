import { combineReducers } from 'redux';

const isAuthenticated = (state = false, action) => {

  switch (action.type) {
  case 'AUTHENTICATE_USER': return true;
  case 'LOGOUT_USER': return false;
  case 'CHECK_USER_AUTH':
    return localStorage.accessToken ? true : false;
  default: return state;
  }

};

const username = (state = 'nobody', action) => {
  switch (action.type) {
  case 'SET_USERNAME':
    return action.payload;
  default: return state;
  }
};

const recipeStore = (state=[], action) => {
  switch (action.type) {
    case 'REWRITE_STORE':
      return [...action.payload];
    default: return state;
  }
}


const reducers = combineReducers({
  isAuthenticated,
  username,
  recipeStore
});


export default reducers;