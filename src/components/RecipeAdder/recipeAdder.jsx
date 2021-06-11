import React, { useState } from "react";
import Modal from "../Modal/modal";
import * as styles from "./recipeAdder.module.css";

const RecipeAdder = () => {
  const [modalStatus, setModalStatus] = useState(false);


  const handleModal = () => {
    setModalStatus(!modalStatus);
  };

  return (
    <div className={styles.container}>
      <div className={styles.addButton} onClick={handleModal}>
        +

      </div>
      <Modal show={modalStatus} handleClose={handleModal}></Modal>
    </div>
  );
};

export default RecipeAdder;
