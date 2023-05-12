import type { FC } from 'react';
import { ReactComponent as ArrowRight } from 'assets/arrow-right.svg';
import { ReactComponent as ArrowLeft } from 'assets/arrow-left.svg';
import { useAppContext } from 'context/AppContext';
import classes from './Pagination.module.css';

interface PaginationProps {
  totalProducts: number;
}

export const Pagination: FC<PaginationProps> = ({ totalProducts }) => {
  const { page, itemsPerPage, setPage } = useAppContext();

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handleNextPage = () => {
    if (page === totalPages) return;

    setPage(page + 1);
  };

  const handlePrevioustPage = () => {
    if (page === 1) return;

    setPage(page - 1);
  };

  return (
    <div className={classes.pagination}>
      <p>{`${page === 1 ? page : itemsPerPage * (page - 1)}-${
        itemsPerPage * page > totalProducts
          ? totalProducts
          : itemsPerPage * page
      } of ${totalProducts} items`}</p>
      <button
        className={`${classes.paginationBtn} ${
          page === 1 ? classes.btnDisabled : ''
        }`}
        onClick={handlePrevioustPage}
      >
        <ArrowLeft />
      </button>
      <button
        className={`${classes.paginationBtn} ${
          page === totalPages ? classes.btnDisabled : ''
        }`}
        onClick={handleNextPage}
      >
        <ArrowRight />
      </button>
    </div>
  );
};
