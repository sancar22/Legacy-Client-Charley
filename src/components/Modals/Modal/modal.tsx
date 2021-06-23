import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'gatsby';
import { trackPromise } from 'react-promise-tracker';

import LoadingInd from '../../LoadingInd/loadingInd';
import apiService from '../../../services/apiService';

import * as styles from './modal.module.css';

const Modal = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}): JSX.Element => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUrl(event.target.value);
    setError(false);
    setSuccess(false);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    trackPromise(
      apiService.scrapeRecipe(url).then((res) => {
        if (res.ok) {
          setUrl('');
          setSuccess(true);
          setError(false);
        } else {
          setError(true);
          setSuccess(false);
        }
      }),
    );
  };

  return (
    <div className={show ? styles.modalShow : styles.modalHide}>
      <div className={styles.modalMain}>
        <p className={styles.text__header}>Add your url</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            name='url'
            value={url}
            onChange={handleChange}
            className={styles.input}
          />
          <LoadingInd color='lightgrey' />
          {success && (
            <div className={styles.text__success}>
              succcess! take me to <Link to='/recipes'>my recipes</Link>
            </div>
          )}
          {error && (
            <p className={styles.text__error}>
              unable to import, please try another website
            </p>
          )}

          <button type='submit' disabled={!url}>
            submit
          </button>
        </form>

        <button onClick={handleClose} className={styles.close}>
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
