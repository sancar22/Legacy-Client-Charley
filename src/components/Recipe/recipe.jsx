import React, {useState} from "react";
import { useDispatch } from "react-redux";

import { delete_item } from "../../state/actions";
import apiService from "../../services/apiService";
import RecipeModal from "../RecipeModal/recipeModal";
import EditModal from "../EditModal/editModal";

import * as styles from "./recipe.module.css";
import { BsPencil } from "react-icons/bs";


const Recipe = ({ recipe }) => {
  const [inFocus, setInFocus] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [editModalStatus, setEditModalStatus] = useState(false);
  const dispatch = useDispatch();

  const handleModal = () => {
    setModalStatus(!modalStatus);
  };
  const handleEditModal = () => {
    setEditModalStatus(!editModalStatus)
  }

  const handleDelete = async () => {
    dispatch(delete_item(recipe.id));
    try {
      await apiService.deleteRecipe(recipe.id);
    } catch (e) {
      console.log(e);
    }
  };

  const keywordString = recipe?.keywords.join(", ");

  return (
    <>
      <div
        className={styles.container}
        onMouseEnter={() => setInFocus(true)}
        onMouseLeave={() => setInFocus(false)}
      >
        {recipe.image && <img src={recipe.image} className={styles.image}/>}
        {!recipe.image && <div className={styles.noImage}></div>}

        <div
          className={styles.detailsBox}
          onClick={handleModal}>
          <div>
            <div className={styles.details__name}>{recipe.name}</div>
            <div className={styles.details__author}>{recipe.publisher}</div>
            <div className={styles.details__author}>{recipe.author}</div>
          </div>
          <div className={styles.details__keywords}>{keywordString}</div>
        </div>

        <div className={styles.buttons}>
          <div className={inFocus ? styles.deleteIcon__show : styles.deleteIcon__hide}
               onClick={handleDelete}
          > x
          </div>
          <div className={inFocus ? styles.editIcon__show : styles.editIcon__hide}
                onClick={handleEditModal}>
            <BsPencil/>
          </div>
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
