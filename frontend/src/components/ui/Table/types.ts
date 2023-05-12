export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface TableRow {
  asin: string;
  locale: string;
  seller_name: string;
  availability: boolean;
  price: number;
  product_name: string;
  product_link: string;
  [key: string]: any;
}

export interface TableRowData {
  products: TableRow[];
  totalProducts: number;
}

export interface TableProps {
  data: TableRowData;
  columns: TableColumn[];
  rowHeight?: number;
  height?: number;
  isFetching?: boolean;
}

type sortDirection = 'none' | 'asc' | 'desc';

export interface SortConfig {
  key: string;
  direction: sortDirection;
}
