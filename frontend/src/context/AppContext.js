import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchText, setSearchText] = useState('');
  const [sortConfig, setSortConfig] = useState({
    key: '',
    direction: 'none',
  });

  const state = {
    page,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    searchText,
    setSearchText,
    sortConfig,
    setSortConfig,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
