import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../components/marketplace/ProductCard';
import FilterSidebar from '../components/marketplace/FilterSidebar';
import SearchBar from '../components/common/SearchBar';
import Pagination from '../components/common/Pagination';
import LoadingSpinner from '../components/common/LoadingSpinner';

const AgriInputs = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    brand: '',
    rating: '',
  });
  
  const productsPerPage = 12;
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAgriInputs = async () => {
      try {
        // In a real app, you would fetch from your API
        // const response = await fetch('/api/marketplace/agri-inputs');
        // const data = await response.json();
        
        // Mock data for demonstration
        const mockInputs = [
          {
            id: 1,
            name: 'NPK Fertilizer 50kg',
            price: 3500,
            unit: 'bag',
            category: 'Fertilizers',
            image: '/images/inputs/fertilizer.jpg',
            brand: 'Twiga',
            rating: 4.7,
            stock: 20,
            description: 'High-quality NPK fertilizer with balanced nutrients for all crops.'
          },
          {
            id: 2,
            name: 'Drip Irrigation Kit',
            price: 12500,
            unit: 'set',
            category: 'Irrigation',
            image: '/images/inputs/irrigation.jpg',
            brand: 'Rainbird',
            rating: 4.8,
            stock: 15,
            description: 'Complete drip irrigation kit for 1/4 acre, easy to install.'
          },
          // Add more mock products...
        ];
        
        setProducts(mockInputs);
        setFilteredProducts(mockInputs);
        setLoading(false);
      } catch (err) {
        setError('Failed to load agricultural inputs. Please try again later.');
        setLoading(false);
        console.error(err);
      }
    };
    
    fetchAgriInputs();
  }, []);

  useEffect(() => {
    // Apply filters and search
    let result = [...products];
    
    // Apply search term filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply other filters
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }
    
    if (filters.minPrice) {
      result = result.filter(product => product.price >= Number(filters.minPrice));
    }
    
    if (filters.maxPrice) {
      result = result.filter(product => product.price <= Number(filters.maxPrice));
    }
    
    if (filters.brand) {
      result = result.filter(product => product.brand === filters.brand);
    }
    
    if (filters.rating) {
      result = result.filter(product => product.rating >= Number(filters.rating));
    }
    
    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, filters, products]);

  const handleAddToCart = (productId) => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/marketplace/agri-inputs' } });
      return;
    }
    // Add to cart logic here
    console.log(`Added product ${productId} to cart`);
  };

  const handleViewDetails = (productId) => {
    navigate(`/marketplace/agri-inputs/${productId}`);
  };

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (loading) return <LoadingSpinner fullPage />;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Agricultural Inputs Marketplace</h1>
          <p className="text-lg text-gray-600">
            Quality farm inputs from trusted suppliers. Everything you need for successful farming.
          </p>
        </div>
        
        <div className="mb-6">
          <SearchBar 
            placeholder="Search for seeds, fertilizers, equipment..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <FilterSidebar 
              filters={filters}
              setFilters={setFilters}
              categories={[...new Set(products.map(p => p.category))]}
              brands={[...new Set(products.map(p => p.brand))]}
              isAgriInputs={true}
            />
          </div>
          
          <div className="md:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-10">
                <h3 className="text-lg font-medium text-gray-900">No products found</h3>
                <p className="mt-2 text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onViewDetails={handleViewDetails}
                      isAgriInput={true}
                    />
                  ))}
                </div>
                
                {totalPages > 1 && (
                  <div className="mt-8">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriInputs;