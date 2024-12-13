import axios from 'axios';
import { Country } from './types';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const { data } = await axios.get<Country[]>(`${BASE_URL}/all`);
    return data;
  } catch {
    // Fallback to local data
    const fallback = await fetch('/data/data.json').then((res) => res.json());
    return fallback as Country[];
  }
};

export const fetchCountryByCode = async (code: string): Promise<Country> => {
  try {
    const { data } = await axios.get<Country[]>(`${BASE_URL}/alpha/${code}`);
    return data[0];
  } catch {
    // Fallback to local data
    const countries = await fetch('/data/data.json').then((res) => res.json());
    return (countries as Country[]).find((country) => country.cca3 === code)!;
  }
};
