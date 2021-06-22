import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import reduxStore from '../../../state/store';
import Header from './header';
import logoImage from '../../../images/smallhat.png';

const { store } = reduxStore();

describe('Header component', () => {
  const header = render(
    <Provider store={store}>
      <Header />
    </Provider>,
  );
  test('displays the correct logo image', async () => {
    const logo = await header.findByTestId('headerLogo');
    expect(logo.src).toContain(logoImage);
  });

  test('match previous Login snapshot', () => {
    expect(header).toMatchSnapshot();
  });
});
