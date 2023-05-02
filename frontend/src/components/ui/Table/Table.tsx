import React, { useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Select } from '../Select/Select';
import { Fallback } from '../../Fallback/Fallback';
import { TableHeader } from './TableHeader/TableHeader';
import { TableBody } from './TableBody/TableBody';
import { Pagination } from '../Pagination/Pagination';
import type { TableRowData, TableColumn, SortConfig } from './types';
import { FallbackType } from '../../Fallback/types';
import { rowsPerPage } from './data';
import classes from './Table.module.css';

interface TableProps {
  data: TableRowData;
  columns: TableColumn[];
  rowHeight?: number;
}

export const Table: React.FC<TableProps> = ({
  data,
  columns,
  rowHeight = 50,
}) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: '',
    direction: 'none',
  });

  return (
    <div>
      {data.products.length ? (
        <div className={classes.all_items}>
          <p
            className={classes.shown_items}
          >{`${data.products.length} from ${data.totalProducts} items`}</p>
          <Select options={rowsPerPage} />
        </div>
      ) : null}

      <SearchBar />

      {data.products.length ? (
        <div className={classes.table}>
          <TableHeader
            columns={columns}
            sortConfig={sortConfig}
            setSortConfig={setSortConfig}
          />

          <TableBody
            data={data.products}
            rowHeight={rowHeight}
            columns={columns}
          />

          <Pagination totalProducts={data.totalProducts} />
        </div>
      ) : (
        <Fallback
          type={FallbackType.NoResult}
          title='No Products Found'
          subTitle='Please try a different search term or Add some products to manage them here.'
        />
      )}
    </div>
  );
};
