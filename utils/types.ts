export interface Country {
  cca3: string;
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital?: string[];
  flags: {
    png: string;
    svg: string;
  };
  borders?: string[];
}
