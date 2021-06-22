import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import reduxStore from '../../state/store';
import RecipeList from './recipeList';

const { store } = reduxStore();

describe('RecipeList component', () => {
  const recipeAdder = create(
    <Provider store={store}>
      <RecipeList recipeStore={[]}/>
    </Provider>,
  );
  test('match previous RecipeList snapshot', () => {
    expect(recipeAdder).toMatchSnapshot();
  });
});
