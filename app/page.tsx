"use client"

import { useEffect, useState } from 'react';
import SearchAndFilter from '../components/molecules/SearchAndFilter';
import CountryList from '../components/organisms/CountryList';
import Pagination from '../components/organisms/Pagination';
import { fetchCountries } from '../utils/api';
import { Country } from '../utils/types';

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchValue.toLowerCase()) &&
      (filterValue ? country.region === filterValue : true)
  );

  const startIdx = (currentPage - 1) * countriesPerPage;
  const paginatedCountries = filteredCountries.slice(
    startIdx,
    startIdx + countriesPerPage
  );

  return (
    <main className="md:p-20 sm:p-12 bg-white dark:bg-gray-900 text-black dark:text-white">
      <SearchAndFilter
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        filterValue={filterValue}
        onFilterChange={setFilterValue}
        regions={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
      />
      <CountryList countries={paginatedCountries} />
      <Pagination
        totalCountries={filteredCountries.length}
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};

export default Home;
