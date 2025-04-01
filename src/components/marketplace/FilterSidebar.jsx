import PropTypes from 'prop-types';

const FilterSidebar = ({ filters, setFilters, categories = [], locations = [], brands = [], isAgriInputs = false }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetFilters = () => {
    setFilters({
      category: '',
      minPrice: '',
      maxPrice: '',
      location: '',
      brand: '',
      rating: '',
      organic: false,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-900">Filters</h3>
        <button 
          onClick={resetFilters}
          className="text-sm text-green-600 hover:text-green-800 transition-colors"
        >
          Reset all
        </button>
      </div>
      
      <div className="space-y-5">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {/* Location Filter (only for produce) */}
        {!isAgriInputs && locations.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        )}
        
        {/* Brand Filter (only for agri inputs) */}
        {isAgriInputs && brands.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
            <select
              name="brand"
              value={filters.brand}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
        )}
        
        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range (KSh)</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="minPrice"
              placeholder="Min"
              value={filters.minPrice}
              onChange={handleChange}
              min="0"
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm"
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={handleChange}
              min="0"
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm"
            />
          </div>
        </div>
        
        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
          <select
            name="rating"
            value={filters.rating}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
          >
            <option value="">Any Rating</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
            <option value="1">1+ Stars</option>
          </select>
        </div>
        
        {/* Organic Filter (only for produce) */}
        {!isAgriInputs && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="organic"
              name="organic"
              checked={filters.organic || false}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="organic" className="ml-2 block text-sm text-gray-700">
              Organic Only
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

FilterSidebar.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  categories: PropTypes.array,
  locations: PropTypes.array,
  brands: PropTypes.array,
  isAgriInputs: PropTypes.bool,
};

export default FilterSidebar;