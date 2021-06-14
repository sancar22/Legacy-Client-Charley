import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { change_name, add_note } from "../../../state/actions";
import apiService from "../../../services/apiService";
import * as styles from "./editModal.module.css";

const EditModal = ({ show, handleClose, recipe }) => {
  const [name, setName] = useState(recipe.name);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(recipe.notes);
  const [addNote, setAddNote] = useState(false);
  const dispatch = useDispatch();
  let i = 0;

  const handleChange = ({ target }) => {
    setName(target.value);
  };
  const handleNoteChange = ({ target }) => {
    setNote(target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name !== recipe.name) {
        await apiService.nameChange(recipe.id, name);
        dispatch(change_name(recipe.id, name));
      }
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  const handleNoteSubmit = async (e) => {
    e.preventDefault();
    setAddNote(false);
    if (note) {
      try {
        await apiService.addNote(recipe.id, note);
        setNotes((oldNotes) => [...oldNotes, note]);
        dispatch(add_note(recipe.id, note));
        setNote("");
        i = 0;
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className={show ? styles.modalShow : styles.modalHide}>
      <form onSubmit={handleSubmit}>
        <div className={styles.buttons}>
          <div
            onClick={handleClose}
            className={styles.button__close}
            aria-hidden="true"
          >
            x
          </div>
          <button type="submit">save</button>
        </div>
        <input
          value={name}
          onChange={handleChange}
          className={styles.input__title}
        />
      </form>

      <div className={styles.heading__notes}>Notes</div>
      <div className={styles.button__addNote} onClick={() => setAddNote(true)} aria-hidden="true">
        add a new note!
      </div>
      {addNote ? (
        <form className={styles.form__notes} onSubmit={handleNoteSubmit}>
          <input
            className={styles.input__note}
            value={note}
            onChange={handleNoteChange}
          ></input>
          <button className={styles.button__saveNote} type="submit" >
            <span aria-hidden="true">📩</span>
          </button>
        </form>
      ) : null}

      <ul>
        {notes.length
          ? notes.map((note) => (
              <li key={i++} className={styles.note}>
                {note}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default EditModal;
