import { useQuery } from 'react-query';

const API_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_URL_LOCAL
    : process.env.REACT_APP_API_URL_PROD;

const fetchProducts = async (key) => {
  const { page, itemsPerPage, q, sortConfig } = key.queryKey[1];

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

const useProducts = (page, itemsPerPage, q, sortConfig) => {
  return useQuery(
    ['products', { page, itemsPerPage, q, sortConfig }],
    (key) => fetchProducts(key),
    { keepPreviousData: true }
  );
};

export { useProducts };
