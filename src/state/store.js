import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);


export default (preloadedState = {}) => {
  const store = createStore(
    persistedReducer,
    preloadedState, // initial state
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
