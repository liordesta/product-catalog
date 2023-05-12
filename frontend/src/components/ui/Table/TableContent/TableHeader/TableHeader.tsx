import type { FC } from 'react';
import { ReactComponent as ArrowUp } from 'assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';
import { ReactComponent as ArrowSort } from 'assets/arrow-sort.svg';
import type { TableColumn, SortConfig } from '../../types';
import classes from './TableHeader.module.css';

interface TableHeaderProps {
  columns: TableColumn[];
  sortConfig: SortConfig;
  setSortConfig: (config: SortConfig) => void;
}
export const TableHeader: FC<TableHeaderProps> = ({
  columns,
  sortConfig,
  setSortConfig,
}) => {
  const handleSort = (column: TableColumn) => {
    if (!column.sortable) return;

    let direction = 'asc';
    if (sortConfig.key === column.key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key: column.key, direction } as SortConfig);
  };

  const handleSortArrow = (column: TableColumn) => {
    if (column.sortable) {
      if (sortConfig.key === column.key) {
        return sortConfig.direction === 'asc' ? <ArrowUp /> : <ArrowDown />;
      } else {
        return <ArrowSort />;
      }
    }
    return null;
  };

  return (
    <div className={classes.header}>
      {columns.map((column) => (
        <div
          key={column.key}
          className={classes.header_cell}
          onClick={() => handleSort(column)}
        >
          {column.label} {handleSortArrow(column)}
        </div>
      ))}
    </div>
  );
};
