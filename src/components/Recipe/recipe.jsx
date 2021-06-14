import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { BsPencil } from "react-icons/bs";

import { delete_item } from "../../state/actions";
import apiService from "../../services/apiService";
import RecipeModal from "../Modals/RecipeModal/recipeModal";
import EditModal from "../Modals/EditModal/editModal";
import * as styles from "./recipe.module.css";


const Recipe = ({ recipe, remove, edit, save}) => {
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
    try {
      await apiService.deleteRecipe(recipe.id);
      dispatch(delete_item(recipe.id));
    } catch (e) {
      console.log(e);
    }
  };

  let keywordString = "";
  if (recipe.keywords) {
    keywordString = recipe.keywords.join(", ");
  }

  return (
    <>
      <div
        className={styles.container}
        onMouseEnter={() => setInFocus(true)}
        onMouseLeave={() => setInFocus(false)}
        aria-hidden="true"
      >
        {recipe.image && <img src={recipe.image} className={styles.image} alt="recipe"/>}
        {!recipe.image && <div className={styles.noImage}></div>}

        <div
          className={styles.detailsBox}
          onClick={handleModal}
          aria-hidden="true"
        >
          <div>
            <div className={styles.details__name}>{recipe.name}</div>
            <div className={styles.details__author}>{recipe.publisher}</div>
            <div className={styles.details__author}>{recipe.author}</div>
          </div>
          <div className={styles.details__keywords}>{keywordString}</div>
        </div>

        <div className={styles.buttons}>
          {remove ? <div
              className={inFocus ? styles.deleteIcon__show : styles.deleteIcon__hide}
              onClick={handleDelete}
              aria-hidden="true"
            > x
            </div> : null
          }
          { edit ? <div
              className={inFocus ? styles.editIcon__show : styles.editIcon__hide}
              onClick={handleEditModal}
              aria-hidden="true"
            >
              <BsPencil/>
            </div> : null
          }
          { save ? <div>+</div> : null}
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
