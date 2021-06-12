import React from "react";
import * as styles from "./recipeModal.module.css";

const RecipeModal = ({ show, handleClose, recipe }) => {
  return (
    <div className={show ? styles.modalShow : styles.modalHide}>
      <div onClick={handleClose} className={styles.closeIcon}>
        x
      </div>
      <div className={styles.title}>{recipe.name}</div>

      <div className={styles.content}>
        <div className={styles.recipeYield}>{recipe.recipeYield}</div>
        <ul>
          {recipe.recipeIngredient.map((ingredient) => (
            <li className={styles.ingredient}>{ingredient}</li>
          ))}
        </ul>
        <div className={styles.prepareHeader}>Prepare</div>
        <ul>
          {recipe.recipeInstructions.map((ingredient) => (
            <li className={styles.ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeModal;
