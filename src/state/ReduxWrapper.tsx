import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { set_is_authenticated, set_not_authenticated } from './actions';
import reduxStore from './store';

const { store, persistor } = reduxStore();

const handleAuth = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    store.dispatch(set_is_authenticated());
  } else {
    store.dispatch(set_not_authenticated());
  }
};
// TODO
const root = ({ element }): JSX.Element => (
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
      onBeforeLift={() => handleAuth()}
    >
      {element}
    </PersistGate>
  </Provider>
);

export default root;
