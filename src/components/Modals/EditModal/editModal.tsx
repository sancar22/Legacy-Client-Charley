import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'node-uuid';

import { INote, IRecipe } from 'src/interfaces';
import { change_name, add_note, delete_note } from '../../../state/actions';
import apiService from '../../../services/apiService';

import * as styles from './editModal.module.css';

interface EditModalProps {
  show: boolean;
  handleClose: () => void;
  recipe: IRecipe;
}

const EditModal: React.FC<EditModalProps> = ({
  show,
  handleClose,
  recipe,
}): JSX.Element => {
  const [notes, setNotes] = useState<INote[]>(recipe.notes);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>(recipe.name);
  const [noteInput, setNoteInput] = useState<string>('');

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNameInput(event.target.value);
  };
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    try {
      await apiService.nameChange(recipe._id, nameInput);
      if (nameInput !== recipe.name) {
        dispatch(change_name(recipe._id, nameInput));
      }
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  const handleNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNoteInput(event.target.value);
  };

  const handleNoteSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (!noteInput) return;
    const newNote = { id: uuid.v4(), text: noteInput };
    try {
      await apiService.addNote(recipe._id, newNote);
      setNotes((oldNotes) => [...oldNotes, newNote]);
      dispatch(add_note(recipe._id, newNote));
      setNoteInput('');
    } catch (e) {
      console.log(e);
    }
    setEditMode(false);
  };

  const handleDelete = async (event) => {
    const noteId: string = event.target.id;
    try {
      await apiService.deleteNote(recipe._id, noteId);
      dispatch(delete_note(recipe._id, noteId));
      setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={show ? styles.modalShow : styles.modalHide}>
      <form onSubmit={handleSubmit}>
        <div className={styles.buttons}>
          <div
            onClick={handleClose}
            className={styles.button__close}
            aria-hidden='true'
          >
            x
          </div>
          <button type='submit'>save</button>
        </div>
        <input
          value={nameInput}
          onChange={handleChange}
          className={styles.input__title}
        />
      </form>

      <div className={styles.heading__notes}>Notes</div>

      <div
        className={styles.button__addNote}
        onClick={() => setEditMode(!editMode)}
        aria-hidden='true'
      >
        edit your notes!
      </div>

      {editMode ? (
        <>
          <form className={styles.form__addNotes} onSubmit={handleNoteSubmit}>
            <input
              className={styles.input__note}
              value={noteInput}
              onChange={handleNoteChange}
            />
            <button className={styles.button__saveNote} type='submit'>
              <span aria-hidden='true'>📩</span>
            </button>
          </form>

          {notes
            && notes.map((note, index) => (
              <div key={index} className={styles.delete__container}>
                <button id={note.id} onClick={handleDelete}>
                  x
                </button>
                <p>{note.text}</p>
              </div>
            ))}
        </>
      ) : (
        <ul>
          {notes
            && notes.map((note, index) => (
              <li key={index} className={styles.note}>
                {note.text}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default EditModal;
