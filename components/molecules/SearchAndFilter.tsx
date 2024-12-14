import React, { FC } from 'react';
import SearchFilter from '../atoms/SearchFilter';
import SearchInput from '../atoms/SearchInput';

interface Props {
  searchValue: string;
  onSearchChange: (value: string) => void;
  filterValue: string;
  onFilterChange: (value: string) => void;
  regions: string[];
}

const SearchAndFilter: FC<Props> = ({
  searchValue,
  onSearchChange,
  filterValue,
  onFilterChange,
  regions,
}) => {
  return (
    <div className="flex max-sm:pt-14 flex-col gap-4 px-6 md:flex-row md:justify-between">
      <SearchInput value={searchValue} onChange={onSearchChange} placeholder="Search for a country..." />
      <SearchFilter options={regions} value={filterValue} onChange={onFilterChange} />
    </div>
  );
};

export default SearchAndFilter;
