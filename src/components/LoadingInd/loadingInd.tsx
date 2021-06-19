import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import * as styles from './loadingInd.module.css';

const LoadingInd = ({ color }: { color: string }): JSX.Element => {
  const dotColor: string = color || 'white';
  const { promiseInProgress } = usePromiseTracker();

  return (
    <>
      {promiseInProgress && (
        <div className={styles.loading__container}>
          <Loader type='ThreeDots' color={dotColor} height='100' width='100' />
        </div>
      )}
    </>
  );
};

export default LoadingInd;
