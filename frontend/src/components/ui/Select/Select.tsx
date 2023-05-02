import React, { useState } from 'react';
import { ReactComponent as ArrowUp } from '../../../assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../../assets/arrow-down.svg';
import { useAppContext } from '../../../context/AppContext';
import classes from './Select.module.css';

interface rowsPerPage {
  id: string;
  name: string;
  value: number;
}

interface SelectProps {
  options: rowsPerPage[];
}

export const Select: React.FC<SelectProps> = ({ options }) => {
  const { setItemsPerPage, setPage } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (selectedItems: number) => {
    setIsOpen(false);
    setItemsPerPage(selectedItems);
    setPage(1);
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.custom_select}>
      <div
        className={`${classes.select} ${isOpen ? classes.select_openList : ''}`}
        onClick={handleSelectClick}
      >
        Per Page:
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>
      {isOpen && (
        <div className={classes.select_items}>
          {options.map((option) => (
            <div
              key={option.id}
              className={classes.select_list}
              onClick={() => handleOptionClick(option.value)}
            >
              <p>{option.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
