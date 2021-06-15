import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  return <>{promiseInProgress && <p>some async shit is in process</p>}</>;
};

export default LoadingIndicator;
