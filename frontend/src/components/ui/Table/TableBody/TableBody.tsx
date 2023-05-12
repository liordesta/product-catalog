import type { FC } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import type { TableColumn, TableRow } from '../types';
import classes from './TableBody.module.css';

interface TableBodyProps {
  data: TableRow[];
  rowHeight: number;
  columns: TableColumn[];
}

export const TableBody: FC<TableBodyProps> = ({ data, rowHeight, columns }) => {
  const renderCellContent = (column: TableColumn, rowData: TableRow) => {
    if (column.key === 'availability') {
      return rowData[column.key] ? 'Yes' : 'No';
    }

    if (column.key === 'price') {
      return `$${rowData[column.key]}`;
    }

    if (column.key === 'product_link') {
      return (
        <a href={rowData[column.key]} target='_blank' rel='noreferrer'>
          {rowData[column.key]}
        </a>
      );
    }

    return rowData[column.key];
  };

  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          height={Number(height)}
          itemCount={data.length}
          itemSize={rowHeight}
          width={Number(width)}
        >
          {({ index, style }) => {
            const rowData = data[index];
            return (
              <div className={classes.row} style={style}>
                {columns.map((column) => (
                  <div key={column.key} className={classes.cell}>
                    {renderCellContent(column, rowData)}
                  </div>
                ))}
              </div>
            );
          }}
        </List>
      )}
    </AutoSizer>
  );
};
