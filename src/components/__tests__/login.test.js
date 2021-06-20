import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import reduxStore from '../../state/store';
import Login from '../Auth/Login/login';
import logoImage from '../../images/bighat.png';

const { store } = reduxStore();
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
});
