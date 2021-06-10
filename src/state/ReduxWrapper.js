import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import reduxStore from './store';

const {store, persistor} = reduxStore();

const root = ({ element }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {element}
    </PersistGate>
  </Provider>
);

export default root;