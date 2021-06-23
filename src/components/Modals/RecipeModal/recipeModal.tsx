import React from 'react';

import { IRecipe } from 'src/interfaces';

import * as styles from './recipeModal.module.css';

interface RecipeModalProps {
  show: boolean;
  handleClose: () => void;
  recipe: IRecipe;
}

const RecipeModal: React.FC<RecipeModalProps> = ({
  show,
  handleClose,
  recipe,
}): JSX.Element => (
  <div className={show ? styles.modalShow : styles.modalHide}>
    <div className={styles.closeIcon} onClick={handleClose} aria-hidden='true'>
      x
    </div>
    <div className={styles.title}>{recipe.name}</div>

    <div className={styles.content}>
      <div className={styles.recipeYield}>{recipe.recipeYield}</div>
      <ul>
        {recipe.recipeIngredient.map((ingredient, index) => (
          <li className={styles.ingredient} key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
      <div className={styles.prepareHeader}>Prepare</div>
      {recipe.recipeInstructions.map((step, index) => (
        <div key={index}>
          <h4 className={styles.step__header}>STEP{` ${index + 1}`}</h4>
          <p className={styles.step__task}>{step}</p>
        </div>
      ))}
      {recipe.notes.length ? (
        <>
          <div className={styles.prepareHeader}>Notes</div>
          {recipe.notes.map((note, index) => (
            <li key={index} className={styles.text__note}>
              {note.text}
            </li>
          ))}
        </>
      ) : null}
    </div>
  </div>
);

export default RecipeModal;
