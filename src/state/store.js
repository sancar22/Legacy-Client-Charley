import { createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['isAuthenticated', 'username', 'recipeStore'],
  blacklist: ['_persist'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const loggerMiddleware = createLogger();
const middleware = composeWithDevTools(applyMiddleware(loggerMiddleware));

 const reduxStore = (preloadedState = {}) => {
  const store = createStore(
    persistedReducer,
    preloadedState, // initial state
    middleware
  );
  const persistor = persistStore(store);
  return { store, persistor };
}

export default reduxStore