import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import reducers from './reducers';

const createStore = () => reduxCreateStore(reducers);


const root = ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);

export default root;