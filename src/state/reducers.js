import { combineReducers } from 'redux';




const isAuthenticated = (state = false, action) => {

  switch (action.type) {
    case 'SET_IS_AUTHENTICATED': return true;
    case 'SET_NOT_AUTHENTICATED': return false;
    case 'LOGOUT_USER': return false;
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