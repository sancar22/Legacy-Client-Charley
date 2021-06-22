import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import reduxStore from '../../../state/store';
import RecipeModal from './recipeModal';

const { store } = reduxStore();

describe('recipeModal component', () => {
  const recipeModal = create(
    <Provider store={store}>
      <RecipeModal show={true} handleClose={jest.fn()} recipe = {{
        _id: '',
        notes: [],
        origin: '',
        url: '',
        recipeIngredient: [],
        recipeInstructions: [],
      }}/>
    </Provider>,
  );
  test('match previous recipeModal snapshot', () => {
    expect(recipeModal).toMatchSnapshot();
  });
});
