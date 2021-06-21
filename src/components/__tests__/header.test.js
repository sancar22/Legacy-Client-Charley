import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import reduxStore from '../../state/store';
import Header from '../Headings/Header/header';
import logoImage from '../../images/smallhat.png';

const { store } = reduxStore();

describe('Header component', () => {
  const header = render(
    <Provider store={store}>
      <Header username={'Dr.DoofenSchmirtz'} />
    </Provider>,
  );
  test('displays the correct logo image', async () => {
    const logo = await header.findByTestId('headerLogo');
    expect(logo.src).toContain(logoImage);
  });
  // TODO
  test('displays the correct username', async () => {});
});
