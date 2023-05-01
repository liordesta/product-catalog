import React, { useState } from 'react';
import { ReactComponent as Search } from '../../../assets/search.svg';
import classes from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (searchValue: string) => void;
  placeholder?: string;
}
export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search by product name...',
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={classes.search_bar}>
      <Search />
      <input
        type='text'
        value={searchValue}
        onChange={handleInputChange}
        className={classes.search_input}
        placeholder={placeholder}
      />
    </div>
  );
};
