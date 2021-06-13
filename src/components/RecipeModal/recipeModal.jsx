import React from "react";
import * as styles from "./recipeModal.module.css";

const RecipeModal = ({ show, handleClose, recipe }) => {
  let i = 1;
  let j = 1;

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
            <li className={styles.ingredient} key={i++}>
              {ingredient}
            </li>
          ))}
        </ul>
        <div className={styles.prepareHeader}>Prepare</div>
        {recipe.recipeInstructions.map((step) => (
          <>
            <h4 className={styles.step__header}>STEP{` ${j++}`}</h4>
            <p className={styles.step__task}>{step}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default RecipeModal;
