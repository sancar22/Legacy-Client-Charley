import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import reduxStore from '../../../state/store';
import Login from './login';
import logoImage from '../../../images/bighat.png';

const { store } = reduxStore();

jest.mock('../../../services/apiService');

describe('Login component', () => {
  const login = render(
    <Provider store={store}>
      <Login />
    </Provider>,
  );

  test('displays the correct logo image', async () => {
    const logo = await login.findByTestId('logo');
    expect(logo.src).toContain(logoImage);
  });
  test('match previous Login snapshot', () => {
    expect(login).toMatchSnapshot();
  });
});
