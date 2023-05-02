import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ReactComponent as Search } from '../../../assets/search.svg';
import { useAppContext } from '../../../context/AppContext';
import { debounce } from '../../../utils/helpers';
import classes from './SearchBar.module.css';

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search by product name...',
}) => {
  const { searchText, setSearchText } = useAppContext();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearchText = useCallback(
    debounce((value: string) => setSearchText(value), 1000),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedSearchText(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchText]);

  return (
    <div className={classes.search_bar}>
      <Search />
      <input
        type='text'
        value={inputValue || searchText}
        onChange={handleInputChange}
        className={classes.search_input}
        placeholder={placeholder}
        ref={inputRef}
      />
    </div>
  );
};
