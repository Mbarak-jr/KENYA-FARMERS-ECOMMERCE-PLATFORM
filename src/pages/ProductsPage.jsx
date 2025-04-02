import React, { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaLeaf, 
  FaUserCircle, 
  FaPhone, 
  FaEnvelope, 
  FaStar, 
  FaCheckCircle, 
  FaFilter,
  FaShoppingCart,
  FaWeightHanging
} from 'react-icons/fa';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    minRating: 0,
    organicOnly: false,
    priceRange: 'all'
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setTimeout(() => {
          const mockProducts = [
            { 
              id: 1, 
              name: "Organic Hass Avocados", 
              farmer: "Kakuzi Plantations Ltd",
              avatar: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
              location: "Murang'a County, Kenya", 
              category: "Fruits", 
              image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Premium quality Hass avocados grown using sustainable farming practices. Rich in healthy fats and perfect for salads, sandwiches, or guacamole.", 
              organic: true, 
              rating: 4.8, 
              reviews: 127,
              price: "KES 100 each",
              weight: "200-250g each",
              season: "March - September",
              contactInfo: { phone: "+254 756 789 012", email: "sales@kakuzi.example.com" } 
            },
            { 
              id: 2, 
              name: "Purple Tea Leaves", 
              farmer: "Mary Wangari",
              avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww", 
              location: "Nakuru County, Kenya", 
              category: "Beverages", 
              image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Rare purple tea leaves packed with antioxidants. This unique Kenyan variety has a delicate flavor and beautiful purple hue when brewed.", 
              organic: true, 
              rating: 4.9, 
              reviews: 89,
              price: "KES 800 per kg",
              weight: "100g, 250g, 1kg packs",
              season: "Year-round",
              contactInfo: { phone: "+254 712 345 678", email: "mary.wangari@example.com" } 
            },
            { 
              id: 3, 
              name: "Pishori Rice", 
              farmer: "Samuel Odhiambo",
              avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww", 
              location: "Kisumu County, Kenya", 
              category: "Grains", 
              image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Premium aromatic pishori rice grown in the fertile lands near Lake Victoria. Known for its excellent cooking qualities and fragrance.", 
              organic: false, 
              rating: 4.5, 
              reviews: 64,
              price: "KES 180 per kg",
              weight: "1kg, 5kg, 25kg bags",
              season: "May - August",
              contactInfo: { phone: "+254 745 678 901", email: "samuel.odhiambo@example.com" } 
            },
            { 
              id: 4, 
              name: "Macadamia Nuts", 
              farmer: "Kakuzi Plantations Ltd",
              avatar: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
              location: "Murang'a County, Kenya", 
              category: "Nuts", 
              image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Premium grade macadamia nuts, shelled and ready for consumption. Rich in healthy fats and perfect for snacking or baking.", 
              organic: true, 
              rating: 4.7, 
              reviews: 112,
              price: "KES 1,200 per kg",
              weight: "250g, 500g, 1kg packs",
              season: "February - May",
              contactInfo: { phone: "+254 756 789 012", email: "sales@kakuzi.example.com" } 
            },
            { 
              id: 5, 
              name: "Kale (Sukuma Wiki)", 
              farmer: "John Kamau",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww", 
              location: "Kiambu County, Kenya", 
              category: "Vegetables", 
              image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Fresh, pesticide-free kale harvested daily. A Kenyan staple vegetable packed with nutrients and perfect for healthy meals.", 
              organic: true, 
              rating: 4.6, 
              reviews: 78,
              price: "KES 50 per bunch",
              weight: "Approx. 500g per bunch",
              season: "Year-round",
              contactInfo: { phone: "+254 723 456 789", email: "john.kamau@example.com" } 
            },
            { 
              id: 6, 
              name: "Arabica Coffee Beans", 
              farmer: "Green Valley Cooperative",
              avatar: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
              location: "Amhara Region, Ethiopia", 
              category: "Beverages", 
              image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Single-origin Ethiopian Arabica coffee beans with floral and citrus notes. Grown at high altitude for premium quality.", 
              organic: true, 
              rating: 4.9, 
              reviews: 215,
              price: "$15 per lb",
              weight: "250g, 500g, 1kg packs",
              season: "October - January",
              contactInfo: { phone: "+251 91 234 5678", email: "info@greenvalley.example.com" } 
            }
          ];
          setProducts(mockProducts);
          setFilteredProducts(mockProducts);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const results = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
      const matchesRating = product.rating >= filters.minRating;
      const matchesOrganic = !filters.organicOnly || product.organic;
      
      // Price range filtering
      let matchesPrice = true;
      if (filters.priceRange !== 'all') {
        const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
        if (filters.priceRange === 'low' && price > 500) matchesPrice = false;
        if (filters.priceRange === 'medium' && (price <= 100 || price > 1000)) matchesPrice = false;
        if (filters.priceRange === 'high' && price <= 1000) matchesPrice = false;
      }
      
      return matchesSearch && matchesCategory && matchesRating && matchesOrganic && matchesPrice;
    });
    
    setFilteredProducts(results);
  }, [searchTerm, filters, products]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const renderRating = (rating) => {
    return (
      <div className="flex items-center">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${i < Math.floor(rating) ? 'text-amber-400' : 'text-gray-300'} ${
                i === Math.floor(rating) && rating % 1 > 0 ? 'opacity-70' : ''
              }`}
              size={14}
            />
          ))}
        </div>
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Farm Fresh Products Marketplace</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover high-quality agricultural products directly from farmers
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search products by name, farmer, or description..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-gray-700"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 text-lg" />
              </div>
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center px-4 py-3 bg-green-100 text-green-700 rounded-lg font-medium"
            >
              <FaFilter className="mr-2" />
              Filters
            </button>
          </div>

          {/* Expanded Filters */}
          {(showFilters || window.innerWidth > 768) && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                >
                  <option value="all">All Categories</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Grains">Grains</option>
                  <option value="Nuts">Nuts</option>
                  <option value="Beverages">Beverages</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
                <select
                  name="minRating"
                  value={filters.minRating}
                  onChange={handleFilterChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                >
                  <option value="0">All Ratings</option>
                  <option value="3">3+ Stars</option>
                  <option value="4">4+ Stars</option>
                  <option value="4.5">4.5+ Stars</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select
                  name="priceRange"
                  value={filters.priceRange}
                  onChange={handleFilterChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under KES 500</option>
                  <option value="medium">KES 500 - 1,000</option>
                  <option value="high">Over KES 1,000</option>
                </select>
              </div>

              <div className="flex items-end">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="organicOnly"
                    checked={filters.organicOnly}
                    onChange={handleFilterChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Organic Only</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Available
          </h2>
          <div className="text-sm text-gray-500">
            Showing {filteredProducts.length} of {products.length} total
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
            <p className="text-lg text-gray-600">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Product Image */}
                  <div className="h-40 bg-gray-100 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.category}
                    </div>
                    {product.organic && (
                      <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded flex items-center">
                        <FaLeaf className="mr-1" /> Organic
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 relative">
                    {/* Farmer Avatar */}
                    <div className="absolute -top-8 left-6">
                      <img
                        src={product.avatar}
                        alt={product.farmer}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <FaMapMarkerAlt className="text-green-500 mr-1" />
                            {product.location}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">By {product.farmer}</div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        {renderRating(product.rating)}
                        <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
                      </div>
                      
                      <p className="text-gray-600 my-3 text-sm line-clamp-2">{product.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                        <div className="flex items-center text-gray-700">
                          <FaWeightHanging className="text-green-500 mr-2" />
                          <span>{product.weight}</span>
                        </div>
                        <div className="text-right font-semibold text-green-700">
                          {product.price}
                        </div>
                        <div className="text-gray-500">
                          Season: {product.season}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-600">
                            <FaPhone className="text-green-500 mr-2" />
                            <span>{product.contactInfo.phone}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FaEnvelope className="text-green-500 mr-2" />
                            <span className="truncate">{product.contactInfo.email}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
                          <FaShoppingCart className="mr-2" /> Contact Farmer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <div className="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <FaLeaf className="text-green-600 text-3xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">No matching products</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setFilters({ 
                        category: 'all', 
                        minRating: 0, 
                        organicOnly: false,
                        priceRange: 'all'
                      });
                    }}
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;