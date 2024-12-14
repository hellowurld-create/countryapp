import React, { FC } from 'react';

interface Props {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const SearchFilter: FC<Props> = ({ options, value, onChange }) => {
  return (
    <select
      title='filter'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 cursor-pointer py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
    >
      <option value="">Filter by region</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SearchFilter;
