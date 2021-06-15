import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import * as styles from "./loadingIndicator.module.css";

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <>
      {promiseInProgress && (
        <div className={styles.loading__container}>
          <Loader type="ThreeDots" color="white" height="100" width="100" />
        </div>
      )}
    </>
  );
};

export default LoadingIndicator;
