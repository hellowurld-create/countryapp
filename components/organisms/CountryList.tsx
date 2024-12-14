import { fetchCountries } from '@/utils/api';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { Country } from '../../utils/types';
import SkeletonLoader from '../atoms/SkeletonLoader';
import CountryCard from '../molecules/CountryCard';


interface Props {
  countries: Country[];
}

const CountryList: FC<Props> = ({ countries }) => {
   const [countrieslist, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCountries = async () => {
      setLoading(true);
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
      setLoading(false);
    };
    
    loadCountries();
  }, []);

return (
    <div className="p-6">
    {loading ? (
      <SkeletonLoader />
    ) : (
      <div className="grid gap-6 mt-[50px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gray-100 dark:bg-gray-900 p-10 rounded-md">
        {countries?.map((country) => (
          <Link href={`/countries/${country.cca3}`} key={country.cca3}>
            <CountryCard key={country.cca3} country={country} />
          </Link>
        ))}
      </div>
    )}
    </div>
)
}

export default CountryList;
