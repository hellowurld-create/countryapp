import React, { FC } from 'react';
import { Country } from '../../utils/types';

interface Props {
  country: Country;
}

const CountryCard: FC<Props> = ({ country }) => {
  return (
    <div className="bg-white cursor-pointer dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={country.flags.svg || country.flags.png}
        alt={`${country.name.common} Flag`}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-8">
        <h3 className="text-lg font-semibold mb-2 dark:text-white">
          {country.name.common}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className=" font-semibold">Population:</span> {country.population.toLocaleString()}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Region:</span> {country.region}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
