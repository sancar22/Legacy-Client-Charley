import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import reduxStore from '../../state/store';
import Recipe from './recipe';

const { store } = reduxStore();

describe('Recipe component', () => {
  const recipe = create(
    <Provider store={store}>
      <Recipe recipe = {{
        _id: '',
        notes: [],
        origin: '',
        url: '',
        recipeIngredient: [],
        recipeInstructions: [],
      }} />
    </Provider>,
  );
  test('match previous Recipe snapshot', () => {
    expect(recipe).toMatchSnapshot();
  });
});
