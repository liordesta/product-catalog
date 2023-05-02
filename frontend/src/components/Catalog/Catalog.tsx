import React from 'react';
import { Header } from '../ui/Header/Header';
import { Table } from '../ui/Table/Table';
import { LoadingSpinner } from '../ui/LoadingSpinner/LoadingSpinner';
import { Fallback } from '../Fallback/Fallback';
import { useProducts } from '../../api';
import { columns } from '../ui/Table/data';
import { useAppContext } from '../../context/AppContext';
import { FallbackType } from '../Fallback/types';
import classes from './Catalog.module.css';

export const Catalog = () => {
  const { page, itemsPerPage, searchText, sortConfig } = useAppContext();
  const { isLoading, error, data } = useProducts(
    page,
    itemsPerPage,
    searchText,
    sortConfig
  );

  if (error) {
    return (
      <div className={classes.main}>
        <Fallback
          type={FallbackType.Error}
          title='Oops! Something went wrong.'
          subTitle='An error occurred while fetching data. Please try again later or contact support.'
        />
      </div>
    );
  }

  return (
    <div className={classes.main}>
      <Header
        title='Product catalog'
        subTitle='Effortlessly Manage Your Amazon Inventory: An intuitive, feature-rich platform to search, sort, and track your products in real-time, all in one place.'
      />
      {isLoading ? <LoadingSpinner /> : <Table data={data} columns={columns} />}
    </div>
  );
};
