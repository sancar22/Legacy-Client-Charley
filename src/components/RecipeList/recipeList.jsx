import React from "react";
import Recipe from "../Recipe/recipe";

const RecipeList = ({ recipeStore, viewAsSelf}) => {

  return (
    <>
      {recipeStore.length
        ? recipeStore.map((recipe) =>
            viewAsSelf ? (
              <Recipe
                key={recipe.id}
                recipe={recipe}
                remove={true}
                edit={true}
                save={false}
                self={true}
              />
            ) : (
              <Recipe
                key={recipe.id}
                recipe={recipe}
                remove={false}
                edit={false}
                save={true}
                self={false}
              />
            )
          )
        : null}
    </>
  );
};

export default RecipeList;
