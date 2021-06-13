import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { change_name } from "../../state/actions";
import * as styles from "./editModal.module.css";
import apiService from "../../services/apiService";

const EditModal = ({ show, handleClose, recipe }) => {
  const [name, setName] = useState(recipe.name);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setName(target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(change_name(recipe.id, name));
    await apiService.nameChange(recipe.id, name);
    handleClose();
  };

  return (
    <div className={show ? styles.modalShow : styles.modalHide}>
      <div onClick={handleClose} className={styles.closeIcon}>
        x
      </div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange} className={styles.title} />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default EditModal;
