import React, {useState} from "react";
import { useDispatch } from "react-redux";
import * as styles from "./recipe.module.css";
import { delete_item } from "../../state/actions";
import apiService from "../../services/apiService";
import RecipeModal from "../RecipeModal/recipemodal";


const Recipe = ({ recipe }) => {
  const [inFocus, setInFocus] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const dispatch = useDispatch();

  const handleModal = () => {
    setModalStatus(!modalStatus);
  };

  const handleDelete = async () => {
    dispatch(delete_item(recipe.id));
    try {
      await apiService.deleteRecipe(recipe.id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div
        className={styles.container}
        onMouseEnter={()  => setInFocus(true)}
        onMouseLeave={()  => setInFocus(false)}
        onClick={handleModal}
      >
        {recipe.image && <img src={recipe.image} className={styles.image}></img>}
        {!recipe.image && <div className={styles.noImage}></div>}

        <div className={styles.detailsBox}>
          <div>
            <div>{recipe.name}</div>
            <div>{recipe.publisher}</div>
            <div>{recipe.author}</div>
          </div>
          <div className={styles.keywords}>{recipe.keywords}</div>
        </div>
        <div
          className={inFocus ? styles.showDeleteIcon : styles.hideDeleteIcon}
          onClick={handleDelete}
        >
          x
        </div>
      </div>
    <RecipeModal show={modalStatus} handleClose={handleModal} recipe={recipe}/>
  </>
  );
};

export default Recipe;
