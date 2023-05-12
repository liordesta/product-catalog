import { useQuery } from 'react-query';
import type { SortConfig } from 'components/ui/Table/types';

type Key = {
  queryKey: [
    string,
    {
      page: number;
      itemsPerPage: number;
      q: string;
      sortConfig: SortConfig;
    }
  ];
  signal?: {};
  pageParam?: number;
  meta?: Record<string, unknown>;
};

const API_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_URL_LOCAL
    : process.env.REACT_APP_API_URL_PROD;

const fetchProducts = async (key: Key['queryKey']) => {
  const { page, itemsPerPage, q, sortConfig } = key[1];

  const searchParam = q ? `&q=${q}` : '';

  const sortParam =
    sortConfig.direction !== 'none'
      ? `&sortBy=${sortConfig.key}&sortOrder=${sortConfig.direction}`
      : '';

  const response = await fetch(
    `${API_URL}/getProducts?page=${page}&itemsPerPage=${itemsPerPage}${searchParam}${sortParam}`
  );
  const data = await response.json();
  return data;
};

const useProducts = (
  page: number,
  itemsPerPage: number,
  q: string,
  sortConfig: SortConfig
) => {
  return useQuery(
    ['products', { page, itemsPerPage, q, sortConfig }] as Key['queryKey'],
    (key) => fetchProducts(key.queryKey),
    { keepPreviousData: true }
  );
};

export { useProducts };
