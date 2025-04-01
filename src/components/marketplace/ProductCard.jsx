import PropTypes from 'prop-types';

const ProductCard = ({ product, onAddToCart, onViewDetails, isAgriInput = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="relative pb-2/3 h-48 bg-gray-100">
        <img
          className="absolute h-full w-full object-cover"
          src={product.image || '/images/placeholder-product.jpg'}
          alt={product.name}
          onError={(e) => {
            e.target.src = '/images/placeholder-product.jpg';
          }}
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {isAgriInput ? (
                product.brand || 'No brand specified'
              ) : (
                `${product.farmer || 'Local farmer'}, ${product.location || 'Kenya'}`
              )}
            </p>
          </div>
          {product.organic && !isAgriInput && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Organic
            </span>
          )}
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`h-4 w-4 ${star <= Math.floor(product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-gray-600 text-sm">
              {(product.rating || 0).toFixed(1)}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            {product.stock || 0} in stock
          </span>
        </div>
        
        <div className="mt-3">
          <span className="text-lg font-bold text-gray-900">
            KSh {(product.price || 0).toLocaleString()}
          </span>
          <span className="text-sm text-gray-500 ml-1">/ {product.unit || 'unit'}</span>
        </div>
        
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description || 'No description available'}
        </p>
        
        <div className="mt-4 flex space-x-2">
          <button
            onClick={() => onViewDetails(product.id)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition-colors duration-300 text-sm font-medium"
          >
            Details
          </button>
          <button
            onClick={() => onAddToCart(product.id)}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-300 text-sm font-medium disabled:opacity-50"
            disabled={!product.stock || product.stock <= 0}
          >
            {(!product.stock || product.stock <= 0) ? 'Out of stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    unit: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    farmer: PropTypes.string,
    brand: PropTypes.string,
    location: PropTypes.string,
    rating: PropTypes.number,
    organic: PropTypes.bool,
    stock: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
  isAgriInput: PropTypes.bool,
};

export default ProductCard;