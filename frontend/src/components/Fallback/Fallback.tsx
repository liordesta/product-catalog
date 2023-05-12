import type { FC } from 'react';
import { Header } from 'components/ui/Header/Header';
import noResult from 'assets/no-result.png';
import error from 'assets/error.png';
import type { FallbackProps } from './types';
import classes from './Fallback.module.css';

export const Fallback: FC<FallbackProps> = ({ type, title, subTitle }) => {
  const imagePath = {
    'no-result': noResult,
    error: error,
  };
  const imageSrc = imagePath[type];

  return (
    <div className={classes.fallback}>
      <div className={classes.fallbackWrapper}>
        <img
          src={imageSrc}
          alt={`${type === 'error' ? '' : 'no data found'}`}
        />
        <Header title={title} subTitle={subTitle} />
      </div>
    </div>
  );
};
