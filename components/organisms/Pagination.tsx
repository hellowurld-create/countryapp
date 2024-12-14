import React, { FC } from 'react';

interface Props {
  totalCountries: number;
  countriesPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<Props> = ({ totalCountries, countriesPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalCountries / countriesPerPage);

  // Determine the range of pages to show (e.g., pages 1-10, 11-20)
  const maxPagesToShow = 10;
  const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  // Create an array of page numbers to display
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx);

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 text-sm rounded-md ${
            currentPage === page
              ? 'bg-blue-500 text-white dark:bg-blue-700'
              : 'bg-gray-200 text-black hover:bg-blue-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
          } 
          sm:px-4 sm:py-2 md:px-4 md:py-2`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
