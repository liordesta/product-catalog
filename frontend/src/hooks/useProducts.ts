import { useQuery } from 'react-query';
import { fetchProducts } from 'api/products';
import type { Key } from 'api/products';
import type { SortConfig } from 'components/ui/Table/types';

export const useProducts = (
  page: number,
  itemsPerPage: number,
  q: string,
  sortConfig: SortConfig
) => {
  return useQuery(
    ['products', { page, itemsPerPage, q, sortConfig }] as Key['queryKey'],
    (key) => fetchProducts(key.queryKey),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );
};
