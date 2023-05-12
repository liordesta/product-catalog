import { Select } from 'components/ui/Select/Select';
import { rowsPerPage } from '../tableConfig';
import type { TableProps } from '../types';
import type { FC } from 'react';
import classes from './TablePageItems.module.css';

export const TablePageItems: FC<Pick<TableProps, 'data'>> = ({ data }) => {
  return (
    <div className={classes.all_items}>
      <p
        className={classes.shown_items}
      >{`${data.products.length} from ${data.totalProducts} items`}</p>
      <Select options={rowsPerPage} />
    </div>
  );
};
