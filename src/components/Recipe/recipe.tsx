import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPencil } from 'react-icons/bs';
import { IRecipe, IState } from 'src/interfaces';
import { delete_item, add_item } from '../../state/actions';
import apiService from '../../services/apiService';
import RecipeModal from '../Modals/RecipeModal/recipeModal';
import EditModal from '../Modals/EditModal/editModal';
import * as styles from './recipe.module.css';

const Recipe = ({
  recipe,
  remove,
  edit,
  save,
  self,
}: {
  recipe: IRecipe;
  remove: boolean;
  edit: boolean;
  save: boolean;
  self: boolean;
}): JSX.Element => {
  const [inFocus, setInFocus] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [saved, setSaved] = useState(false);
  const { username } = useSelector<IState>((state) => state.username);

  const dispatch = useDispatch();

  const handleModal = () => {
    setModalStatus(!modalStatus);
  };
  const handleEditModal = () => {
    setEditModalStatus(!editModalStatus);
  };

  const handleDelete = async () => {
    try {
      await apiService.deleteRecipe(recipe._id);
      dispatch(delete_item(recipe._id));
      setSaved(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSave = async () => {
    try {
      await apiService.addFromFriend(recipe);
      dispatch(add_item(recipe));
      setSaved(true);
    } catch (e) {
      console.log(e);
    }
  };

  let keywordString = '';
  if (recipe.keywords) {
    keywordString = recipe.keywords.join(', ');
  }

  return (
    <>
      <div
        className={styles.container}
        onMouseEnter={() => setInFocus(true)}
        onMouseLeave={() => setInFocus(false)}
        aria-hidden='true'
      >
        {recipe.image && (
          <img src={recipe.image} className={styles.image} alt='recipe' />
        )}
        {!recipe.image && <div className={styles.noImage}></div>}

        <div
          className={styles.detailsBox}
          onClick={handleModal}
          aria-hidden='true'
        >
          <div>
            <div className={styles.details__name}>{recipe.name}</div>
            {self ? (
              <>
                {recipe.origin === username ? null : (
                  <div className={styles.details__origin}>
                    {`from chef ${recipe.origin}`}
                  </div>
                )}
              </>
            ) : null}
            <div className={styles.details__author}>{recipe.publisher}</div>
            <div className={styles.details__author}>{recipe.author}</div>
          </div>
          <div className={styles.details__keywords}>{keywordString}</div>
        </div>

        <div className={styles.buttons}>
          {remove && (
            <div
              className={inFocus ? styles.button__show : styles.button__hide}
              onClick={handleDelete}
              aria-hidden='true'
            >
              x
            </div>
          )}
          {edit && (
            <div
              className={
                inFocus ? styles.editButton__show : styles.editButton__hide
              }
              onClick={handleEditModal}
              aria-hidden='true'
            >
              <BsPencil />
            </div>
          )}
          {save && (
            <div
              className={inFocus ? styles.button__show : styles.button__hide}
              onClick={handleSave}
              aria-hidden='true'
            >
              +
            </div>
          )}
        </div>
      </div>
      <RecipeModal
        show={modalStatus}
        handleClose={handleModal}
        recipe={recipe}
      />
      <EditModal
        show={editModalStatus}
        handleClose={handleEditModal}
        recipe={recipe}
      />
    </>
  );
};

export default Recipe;
