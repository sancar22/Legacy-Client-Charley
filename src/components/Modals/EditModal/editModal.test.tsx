import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import reduxStore from '../../../state/store';
import EditModal from './editModal';
import logoImage from '../../../images/bighat.png';

const { store } = reduxStore();

describe('EditModal component', () => {
  const editModal = render(
    <Provider store={store}>
      <EditModal show={true} handleClose={jest.fn()} recipe={ {
        _id: '',
        notes: [],
        origin: '',
        url: '',
      } }/>
    </Provider>,
  );

  test('match previous EditModal snapshot', () => {
    expect(editModal).toMatchSnapshot();
  });
});
