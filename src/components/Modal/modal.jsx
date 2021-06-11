import React, { useState } from "react";
import * as styles from "./modal.module.css";
import recipeService from '../../services/recipeService';

const Modal = ({ show, handleClose }) => {

  const [url, setUrl] = useState('');

  const handleChange = ({target}) => {
    setUrl(target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(url);
      const jsonld = recipeService.saveRecipe(url);
      console.log(jsonld);
      setUrl('');
      handleClose();
    } catch (e) {

    }

  }



  return (
    <div className={show ? styles.modalShow : styles.modalHide}>
      <div className={styles.modalMain}>
        <p className={styles.headerText}>Add your url</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            name='url'
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
