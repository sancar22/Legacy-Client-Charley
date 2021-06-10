import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import reduxStore from './store';
import { authenticate_user } from '../state/actions';


const {store, persistor} = reduxStore();

if (localStorage.accessToken) {
  store.dispatch(authenticate_user());
}


const root = ({ element }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {element}
    </PersistGate>
  </Provider>
);

export default root;