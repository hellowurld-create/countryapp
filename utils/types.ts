export interface Country {
  name: { common: string; official: string };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  flags: { png: string; svg: string };
  cca3: string;
  borders?: string[];
}

export interface FilterOptions {
  search: string;
  region: string;
}

export interface Pagination {
  currentPage: number;
  countriesPerPage: number;
}
