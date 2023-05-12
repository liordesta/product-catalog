import { createContext, useContext, useState } from 'react';
import type { SortConfig } from 'components/ui/Table/types';
import type { FC, ReactNode } from 'react';

interface AppContextState {
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (itemsPerPage: number) => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
  sortConfig: SortConfig;
  setSortConfig: (sortConfig: SortConfig) => void;
}

const AppContext = createContext<AppContextState | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [searchText, setSearchText] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: '',
    direction: 'none',
  });

  const state: AppContextState = {
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

const useAppContext = (): AppContextState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
