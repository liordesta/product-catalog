import React from 'react';
import { Header } from '../ui/Header/Header';
import { Table } from '../ui/Table/Table';
import classes from './Catalog.module.css';

const data = [
  {
    asin: '078669324X',
    locale: 'CA',
    seller_name: 'Thrasio',
    availability: true,
    price: 16.87,
    product_name: 'You Can Teach Yourself Dobro',
    product_link:
      'https://www.amazon.com/dp/078669324X?tag=hallocostu201-20&linkCode=ogi&th=1&psc=1',
  },
  {
    asin: '999768409',
    locale: 'US',
    seller_name: 'Perch',
    availability: true,
    price: 15.95,
    product_name: `Li'l-Gen Dinosaurs Sound Book: Clever Creatures and Boundless Beasts - A Land of Dinosaurs (12 Button Sound)`,
    product_link:
      'https://www.amazon.com/dp/0999768409?tag=hallocostu201-20&linkCode=ogi&th=1&psc=1',
  },
  {
    asin: '1562222430',
    locale: 'CA',
    seller_name: 'Thrasio',
    availability: false,
    price: 14.99,
    product_name: 'Easy Solos for Beginning Cello Level 1',
    product_link:
      'https://www.amazon.com/dp/1562222430?tag=hallocostu201-20&linkCode=ogi&th=1&psc=1',
  },
];

const columns = [
  { key: 'asin', label: 'ASIN' },
  { key: 'locale', label: 'Region', sortable: true },
  { key: 'seller_name', label: 'Brand' },
  { key: 'availability', label: 'In Stock' },
  { key: 'price', label: 'Price', sortable: true },
  { key: 'product_name', label: 'Product Name', sortable: true },
  { key: 'product_link', label: 'Product Link' },
];

export const Catalog = () => {
  return (
    <div className={classes.main}>
      <Header
        title='Product catalog'
        subTitle='Effortlessly Manage Your Amazon Inventory: An intuitive, feature-rich platform to search, sort, and track your products in real-time, all in one place.'
      />
      <Table data={data} columns={columns} height={1000} />
    </div>
  );
};
