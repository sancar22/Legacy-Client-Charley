import React from 'react';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import reduxStore from '../../../state/store';
import Modal from './modal';

const { store } = reduxStore();

describe('Modal component', () => {
  const modal = create(
    <Provider store={store}>
      <Modal show={true} handleClose={jest.fn()} />
    </Provider>,
  );
  test('match previous Modal snapshot', () => {
    expect(modal).toMatchSnapshot();
  });
});
