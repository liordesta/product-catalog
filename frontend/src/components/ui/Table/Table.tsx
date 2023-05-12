import type { FC } from 'react';
import { SearchBar } from 'components/ui/SearchBar/SearchBar';
import { Select } from 'components/ui/Select/Select';
import { Fallback } from 'components/Fallback/Fallback';
import { TableHeader } from './TableHeader/TableHeader';
import { TableBody } from './TableBody/TableBody';
import { Pagination } from 'components/ui/Pagination/Pagination';
import type { TableRowData, TableColumn } from './types';
import { FallbackType } from 'components/Fallback/types';
import { rowsPerPage } from './tableConfig';
import { useAppContext } from 'context/AppContext';
import classes from './Table.module.css';

interface TableProps {
  data: TableRowData;
  columns: TableColumn[];
  rowHeight?: number;
}

export const Table: FC<TableProps> = ({ data, columns, rowHeight = 50 }) => {
  const { sortConfig, setSortConfig } = useAppContext();

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
