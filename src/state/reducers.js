import { combineReducers } from 'redux';



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
    default: return state;
  }
}


const reducers = combineReducers({
  isAuthenticated,
  username,
  recipeStore
});


export default reducers;