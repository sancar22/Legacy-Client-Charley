import React from "react";
import * as styles from "./recipeModal.module.css";

const RecipeModal = ({ show, handleClose, recipe }) => {
  let i = 0;
  let j = 0;

  return (
    <div className={show ? styles.modalShow : styles.modalHide}>
      <div
        className={styles.closeIcon}
        onClick={handleClose}
        aria-hidden="true"
      >
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
          <div key={j}>
            <h4 className={styles.step__header}>STEP{` ${++j}`}</h4>
            <p className={styles.step__task}>{step}</p>
          </div>
        ))}
        {recipe.notes.length ? (
          <>
            <div className={styles.prepareHeader}>Notes</div>
            {recipe.notes.map((note) => (
              <li key={note.id} className={styles.text__note}>
                {note.text}
              </li>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default RecipeModal;
