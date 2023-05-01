import React, { useState, useMemo } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { TableHeader } from './TableHeader/TableHeader';
import { TableBody } from './TableBody/TableBody';
import type { TableRow, TableColumn, SortConfig } from './types';
import classes from './Table.module.css';

interface TableProps {
  data: TableRow[];
  columns: TableColumn[];
  rowHeight?: number;
  height: number;
}

export const Table: React.FC<TableProps> = ({
  data,
  columns,
  rowHeight = 50,
  height,
}) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: '',
    direction: 'none',
  });
  const [searchText, setSearchText] = useState('');

  const filteredAndsortedData = useMemo(() => {
    let filteredData = data;

    if (searchText) {
      filteredData = data.filter((row) =>
        row.product_name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (sortConfig.direction === 'none') return filteredData;

    return filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig, searchText]);

  const handleSearch = (searchValue: string) => {
    setSearchText(searchValue);
  };

  return (
    <div>
      <div>
        <p className={classes.all_items}>225 from 225 items</p>
      </div>

      <SearchBar onSearch={handleSearch} />

      <div className={classes.table}>
        <TableHeader
          columns={columns}
          sortConfig={sortConfig}
          setSortConfig={setSortConfig}
        />

        <TableBody
          height={height}
          filteredAndsortedData={filteredAndsortedData}
          rowHeight={rowHeight}
          columns={columns}
        />
      </div>
    </div>
  );
};
