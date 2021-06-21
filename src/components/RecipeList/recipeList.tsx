import React from 'react';
import { IRecipe } from 'src/interfaces';
import Recipe from '../Recipe/recipe';

const RecipeList = ({
  recipeStore,
  viewAsSelf,
}: {
  recipeStore: IRecipe[];
  viewAsSelf: boolean;
}): JSX.Element => (
  <>
    {recipeStore.length
      && recipeStore.map((recipe: IRecipe) => (viewAsSelf ? (
          <Recipe
            key={recipe._id}
            recipe={recipe}
            remove={true}
            edit={true}
            save={false}
            self={true}
          />
      ) : (
          <Recipe
            key={recipe._id}
            recipe={recipe}
            remove={false}
            edit={false}
            save={true}
            self={false}
          />
      )))}
  </>
);

export default RecipeList;
