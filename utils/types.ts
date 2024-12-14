export interface Country {
  name: { common: string; official: string };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  flags: { png: string; svg: string };
  cca3: string;
  cca2: string;
  borders?: string[];
  tld?: string[];
  languages?: { [key: string]: string };
   currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
}

export interface FilterOptions {
  search: string;
  region: string;
}

export interface Pagination {
  currentPage: number;
  countriesPerPage: number;
}
