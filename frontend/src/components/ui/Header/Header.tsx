import React from 'react';
import classes from './Header.module.css';

interface HeaderProps {
  title: string;
  subTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <div>
      <h4 className={classes.title}>{title}</h4>
      <h6 className={classes.sub_title}>{subTitle}</h6>
    </div>
  );
};
