import { TableHeader } from './TableHeader/TableHeader';
import { TableBody } from './TableBody/TableBody';
import { Pagination } from 'components/ui/Pagination/Pagination';
import type { TableProps } from '../types';
import classes from './TableContent.module.css';
import { useAppContext } from 'context/AppContext';

export const TableContent = ({ columns, data, rowHeight = 50 }: TableProps) => {
  const { sortConfig, setSortConfig } = useAppContext();

  return (
    <div className={classes.table}>
      <TableHeader
        columns={columns}
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
      />

      <TableBody data={data.products} rowHeight={rowHeight} columns={columns} />

      <Pagination totalProducts={data.totalProducts} />
    </div>
  );
};
