import React from 'react';
import { Header } from '../ui/Header/Header';
import { Table } from '../ui/Table/Table';
import classes from './Catalog.module.css';

export const Catalog = () => {
  return (
    <div className={classes.main}>
      <Header
        title='Product catalog'
        subTitle='Effortlessly Manage Your Amazon Inventory: An intuitive, feature-rich platform to search, sort, and track your products in real-time, all in one place.'
      />
      <Table />
    </div>
  );
};
