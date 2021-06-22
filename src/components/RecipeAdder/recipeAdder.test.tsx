import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import reduxStore from '../../state/store';
import RecipeAdder from './recipeAdder';

const { store } = reduxStore();

describe('RecipeAdder component', () => {
  const recipeAdder = create(
    <Provider store={store}>
      <RecipeAdder/>
    </Provider>,
  );
  test('match previous RecipeAdder snapshot', () => {
    expect(recipeAdder).toMatchSnapshot();
  });
});
