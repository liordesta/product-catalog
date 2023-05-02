import React from 'react';
import { ReactComponent as Spinner } from '../../../assets/spinner.svg';
import classes from './LoadingSpinner.module.css';

export const LoadingSpinner = () => {
  return (
    <div className={classes.loader}>
      <Spinner />
    </div>
  );
};
