import { SearchBar } from 'components/ui/SearchBar/SearchBar';
import { Fallback } from 'components/Fallback/Fallback';
import { TableContent } from './TableContent/TableContent';
import { LoadingSpinner } from 'components/ui/LoadingSpinner/LoadingSpinner';
import { FallbackType } from 'components/Fallback/types';
import { TablePageItems } from './TablePageItems/TablePageItems';
import type { TableProps } from './types';
import type { FC } from 'react';

export const Table: FC<TableProps> = ({
  data,
  columns,
  rowHeight,
  isFetching,
}) => {
  return (
    <div>
      {data.products.length && <TablePageItems data={data} />}

      <SearchBar />

      {isFetching ? (
        <LoadingSpinner />
      ) : data.products.length ? (
        <TableContent columns={columns} rowHeight={rowHeight} data={data} />
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
