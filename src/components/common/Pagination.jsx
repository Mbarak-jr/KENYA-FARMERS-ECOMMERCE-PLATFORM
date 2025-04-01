import PropTypes from 'prop-types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 5;
  
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);
    
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:justify-center items-center space-x-2">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center rounded-md px-3 py-1.5 text-sm ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}`}
        >
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="ml-1">Previous</span>
        </button>
        
        <nav className="hidden sm:flex space-x-1">
          {pageNumbers[0] > 1 && (
            <>
              <button
                onClick={() => onPageChange(1)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium ${1 === currentPage ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                1
              </button>
              {pageNumbers[0] > 2 && (
                <span className="px-3 py-1.5 text-sm text-gray-500">...</span>
              )}
            </>
          )}
          
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium ${number === currentPage ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {number}
            </button>
          ))}
          
          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                <span className="px-3 py-1.5 text-sm text-gray-500">...</span>
              )}
              <button
                onClick={() => onPageChange(totalPages)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium ${totalPages === currentPage ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {totalPages}
              </button>
            </>
          )}
        </nav>
        
        <span className="text-sm text-gray-500 sm:hidden">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`relative inline-flex items-center rounded-md px-3 py-1.5 text-sm ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}`}
        >
          <span className="mr-1">Next</span>
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;