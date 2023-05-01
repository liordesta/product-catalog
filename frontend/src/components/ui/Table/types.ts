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

export interface TableProps {
  data: TableRow[];
  columns: TableColumn[];
  rowHeight?: number;
  height: number;
}

type sortDirection = 'none' | 'asc' | 'desc';

export interface SortConfig {
  key: string;
  direction: sortDirection;
}
