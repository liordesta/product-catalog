import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import classes from './Table.module.css';

export const Table = () => {
  const handleSearch = (searchValue: string) => {
    console.log('searchValue: ', searchValue);
  };

  return (
    <div>
      <div>
        <p className={classes.all_items}>225 from 225 items</p>
      </div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};
