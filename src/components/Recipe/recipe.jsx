import React from "react";
import * as styles from "./recipe.module.css";

const Recipe = ({ recipe }) => {
  return (
    <div className={styles.container}>
      {recipe.image && <img src={recipe.image} className={styles.image}></img>}
      {!recipe.image && <div className={styles.noImage}></div>}
      <div className={styles.detailsBox}>
        <div>
          <div>{recipe.name}</div>
          <div>{recipe.publisher}</div>
          <div>{recipe.author}</div>
        </div>
        <div className={styles.keywords}>{recipe.keywords}</div>
      </div>
    </div>
  );
};

export default Recipe;
