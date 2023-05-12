import { Header } from 'components/ui/Header/Header';
import { Table } from 'components/ui/Table/Table';
import { LoadingSpinner } from 'components/ui/LoadingSpinner/LoadingSpinner';
import { Fallback } from 'components/Fallback/Fallback';
import { useProducts } from 'hooks/useProducts';
import { columns } from 'components/ui/Table/tableConfig';
import { useAppContext } from 'context/AppContext';
import { FallbackType } from 'components/Fallback/types';
import classes from './Catalog.module.css';

export const Catalog = () => {
  const { page, itemsPerPage, searchText, sortConfig } = useAppContext();
  const { isLoading, error, data, isFetching } = useProducts(
    page,
    itemsPerPage,
    searchText,
    sortConfig
  );

  if (error) {
    return (
      <div className={classes.main}>
        <Fallback
          type={FallbackType.Error}
          title='Oops! Something went wrong.'
          subTitle='An error occurred while fetching data. Please try again later or contact support.'
        />
      </div>
    );
  }

  return (
    <div className={classes.main}>
      <Header
        title='Product catalog'
        subTitle='Effortlessly Manage Your Amazon Inventory: An intuitive, feature-rich platform to search, sort, and track your products in real-time, all in one place.'
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Table data={data} columns={columns} isFetching={isFetching} />
      )}
    </div>
  );
};
