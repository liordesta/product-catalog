import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import type { TableColumn, TableRow } from '../types';
import classes from './TableBody.module.css';

interface TableBodyProps {
  height: number;
  filteredAndsortedData: TableRow[];
  rowHeight: number;
  columns: TableColumn[];
}

export const TableBody: React.FC<TableBodyProps> = ({
  height,
  filteredAndsortedData,
  rowHeight,
  columns,
}) => {
  const renderCellContent = (column: TableColumn, rowData: TableRow) => {
    if (column.key === 'availability') {
      return rowData[column.key] ? 'Yes' : 'No';
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
      {({ width }) => (
        <List
          height={Number(height)}
          itemCount={filteredAndsortedData.length}
          itemSize={rowHeight}
          width={Number(width)}
        >
          {({ index, style }) => {
            const rowData = filteredAndsortedData[index];
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
