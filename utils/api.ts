const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/all`);
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    return await response.json();
  } catch {
    // Fallback to data.json
    return await fetch(`${BASE_URL}/all`).then((res) => res.json());
  }
};

export const fetchCountryByCode = async (code: string) => {
  try {
    const response = await fetch(`${BASE_URL}/alpha/${code}`);
    if (!response.ok) {
      throw new Error('Failed to fetch country by code');
    }
    const data = await response.json();
    return data[0];
  } catch {
    // Fallback to data.json
    const countries = await fetch(`${BASE_URL}/all`).then((res) => res.json());
    return countries.find((country: any) => country.cca3 === code);
  }
};
