import { Country } from './types';

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch countries:', error);
    return [];
  }
};

export const fetchCountryByCode = async (code: string): Promise<Country | null> => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = await response.json();
    return data[0] || null;
  } catch (error) {
    console.error('Failed to fetch country by code:', error);
    return null;
  }
};
