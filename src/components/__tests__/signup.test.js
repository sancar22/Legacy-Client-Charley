import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import reduxStore from '../../state/store';
import Signup from '../Auth/Signup/signup';
import logoImage from '../../images/bighat.png';

const { store } = reduxStore();
describe('Signup component', () => {
  const signup = render(
    <Provider store={store}>
      <Signup />
    </Provider>,
  );
  test('displays the correct logo image', async () => {
    const logo = await signup.findByTestId('signUpLogo');
    expect(logo.src).toContain(logoImage);
  });
});
