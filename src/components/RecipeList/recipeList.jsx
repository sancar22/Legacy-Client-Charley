import React from "react";
import Recipe from "../Recipe/recipe";

const RecipeList = ({ recipeStore }) => {
  return (
    <>
      {recipeStore.length
        ? recipeStore.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))
        : null}
    </>
  );
};

export default RecipeList;
