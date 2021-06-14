import React from "react";
import Recipe from "../Recipe/recipe";

const RecipeList = ({ recipeStore, viewAsSelf}) => {


  return (
    <>
      {recipeStore.length
        ? recipeStore.map((recipe) => (
            viewAsSelf ?
            <Recipe key={recipe.id} recipe={recipe} remove={true} edit={true} save={false}/> :
            <Recipe key={recipe.id} recipe={recipe} remove={false} edit={false} save={true}/>
          ))
        : null}
    </>
  );
};

export default RecipeList;
