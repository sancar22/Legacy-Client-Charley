import React from "react";
import * as styles from "./modal.module.css";

const Modal = ({ show, handleClose }) => {


  return (
    <div className={show ? styles.modalShow : styles.modalHide}>
      <div className={styles.modalMain}>
        <p className={styles.headerText}>Add your url</p>
        <form className={styles.form}>
          <input className={styles.input}></input>
          <button>submit</button>
        </form>
        <button onClick={handleClose} className={styles.close}>
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
