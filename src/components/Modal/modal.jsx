import React, { useState } from "react";
import * as styles from "./modal.module.css";

import { scrapeRecipe } from "../../services/apiService";

const Modal = ({ show, handleClose }) => {
  const [url, setUrl] = useState("");

  const handleChange = ({ target }) => {
    setUrl(target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const recipeData = await scrapeRecipe(url);
      console.log(recipeData);
      setUrl("");
      handleClose();
    } catch (e) {}
  };

  return (
    <div className={show ? styles.modalShow : styles.modalHide}>
      <div className={styles.modalMain}>
        <p className={styles.headerText}>Add your url</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            name="url"
            value={url}
            onChange={handleChange}
            className={styles.input}
          />
          <button type="submit">submit</button>
        </form>

        <button onClick={handleClose} className={styles.close}>
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
