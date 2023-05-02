import { useQuery } from 'react-query';

const API_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_URL_LOCAL
    : process.env.REACT_APP_API_URL_PROD;

const fetchProducts = async (key) => {
  const { page, itemsPerPage, q } = key.queryKey[1];

  const response = await fetch(
    `${API_URL}/getProducts?page=${page}&itemsPerPage=${itemsPerPage}&q=${q}`
  );
  const data = await response.json();
  return data;
};

const useProducts = (page, itemsPerPage, q) => {
  return useQuery(['products', { page, itemsPerPage, q }], fetchProducts);
};

export { useProducts };
