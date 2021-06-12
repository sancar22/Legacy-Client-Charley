import React from "react";
import * as styles from "./recipeModal.module.css";

const RecipeModal = ({ show, handleClose, recipe }) => {
  return (
    <div className={show ? styles.modalShow : styles.modalHide}>
      <div onClick={handleClose}>x</div>
    </div>
  );
};

export default RecipeModal;
