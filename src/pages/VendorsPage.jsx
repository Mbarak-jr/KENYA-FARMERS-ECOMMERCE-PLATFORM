import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStar, FaMapMarkerAlt, FaBoxOpen, FaFilter } from 'react-icons/fa';

const VendorsPage = () => {
  const [vendors, setVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    rating: 0,
  });
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Mock data - replace with actual API call
    const fetchVendors = async () => {
      try {
        // Simulating API call
        setTimeout(() => {
          const mockVendors = [
            {
              id: 1,
              name: "Farm Supplies Co.",
              description: "Quality agricultural supplies and equipment for modern farming needs",
              logo: "https://images.unsplash.com/photo-1608461342673-b8ba148e1e18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhcm0lMjBzdXBwbGllc3xlbnwwfHwwfHx8MA%3D%3D",
              category: "Equipment",
              rating: 4.5,
              location: "Nairobi, Kenya",
              productsCount: 42,
              coverImage: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              id: 2,
              name: "Green Seeds Ltd",
              description: "Organic and hybrid seeds for all seasons with guaranteed germination",
              logo: "https://images.unsplash.com/photo-1684510459778-51433ae1178d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBzZWVkc3xlbnwwfHwwfHx8MA%3D%3D",
              category: "Seeds",
              rating: 4.2,
              location: "Nakuru, Kenya",
              productsCount: 78,
              coverImage: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              id: 3,
              name: "AgriTech Solutions",
              description: "Modern farming technology and innovative agricultural solutions",
              logo: "https://images.unsplash.com/photo-1626083558246-c0644090f365?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWdyaXRlY2glMjBzb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D",
              category: "Technology",
              rating: 4.7,
              location: "Mombasa, Kenya",
              productsCount: 35,
              coverImage: "https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              id: 4,
              name: "Fertilizer Plus",
              description: "Premium organic and chemical fertilizers for maximum crop yield",
              logo: "https://images.unsplash.com/photo-1722132340018-34403bd43262?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlcnRpbGl6ZXIlMjBwbHVzfGVufDB8fDB8fHww",
              category: "Fertilizer",
              rating: 4.0,
              location: "Kisumu, Kenya",
              productsCount: 29,
              coverImage: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              id: 5,
              name: "Organic Harvest",
              description: "Certified organic farming inputs and sustainable solutions",
              logo: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JnYW5pYyUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
              category: "Organic",
              rating: 4.8,
              location: "Eldoret, Kenya",
              productsCount: 56,
              coverImage: "https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              id: 6,
              name: "Irrigation Masters",
              description: "Advanced irrigation systems and water management solutions",
              logo: "https://images.unsplash.com/photo-1626083558246-c0644090f365?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWdyaXRlY2glMjBzb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D",
              category: "Technology",
              rating: 4.4,
              location: "Thika, Kenya",
              productsCount: 31,
              coverImage: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          ];
          setVendors(mockVendors);
          setFilteredVendors(mockVendors);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching vendors:", error);
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  useEffect(() => {
    // Filter vendors based on search term and filters
    const results = vendors.filter(vendor => {
      const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          vendor.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filters.category === 'all' || vendor.category === filters.category;
      const matchesRating = vendor.rating >= filters.rating;
      
      return matchesSearch && matchesCategory && matchesRating;
    });
    
    setFilteredVendors(results);
  }, [searchTerm, filters, vendors]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  // Function to render rating stars
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-amber-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStar key="half-star" className="text-amber-400 opacity-50" />);
    }
    
    return (
      <div className="flex items-center">
        <div className="flex mr-1">{stars}</div>
        <span className="text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Trusted Agricultural Vendors</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Connect with Kenya's top suppliers of farming equipment, seeds, and agricultural solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 relative">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search vendors by name or specialty..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition text-gray-700"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 text-lg" />
              </div>
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center px-4 py-3 bg-amber-100 text-amber-700 rounded-lg font-medium"
            >
              <FaFilter className="mr-2" />
              Filters
            </button>
          </div>

          {/* Expanded Filters */}
          {(showFilters || window.innerWidth > 768) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                >
                  <option value="all">All Categories</option>
                  <option value="Equipment">Equipment</option>
                  <option value="Seeds">Seeds</option>
                  <option value="Fertilizer">Fertilizer</option>
                  <option value="Technology">Technology</option>
                  <option value="Organic">Organic</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
                <select
                  name="rating"
                  value={filters.rating}
                  onChange={handleFilterChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                >
                  <option value="0">All Ratings</option>
                  <option value="3">3+ Stars</option>
                  <option value="4">4+ Stars</option>
                  <option value="4.5">4.5+ Stars</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {filteredVendors.length} {filteredVendors.length === 1 ? 'Vendor' : 'Vendors'} Found
          </h2>
          <div className="text-sm text-gray-500">
            Showing {filteredVendors.length} of {vendors.length} total vendors
          </div>
        </div>

        {/* Vendors Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mb-4"></div>
            <p className="text-lg text-gray-600">Loading vendors...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVendors.length > 0 ? (
              filteredVendors.map(vendor => (
                <div key={vendor.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Vendor Cover Image */}
                  <div className="h-40 bg-gray-100 overflow-hidden">
                    <img 
                      src={vendor.coverImage} 
                      alt={vendor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 relative">
                    {/* Vendor Logo */}
                    <div className="absolute -top-8 left-6">
                      <img
                        src={vendor.logo}
                        alt={`${vendor.name} logo`}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-900">{vendor.name}</h3>
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-800 rounded-full">
                          {vendor.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 my-3 line-clamp-2">{vendor.description}</p>
                      
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center">
                          {renderRatingStars(vendor.rating)}
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <FaMapMarkerAlt className="mr-2 text-amber-500" />
                          {vendor.location}
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <FaBoxOpen className="mr-2 text-amber-500" />
                          {vendor.productsCount} Products Available
                        </div>
                      </div>
                      
                      <Link 
                        to={`/vendors/${vendor.id}`}
                        className="block w-full text-center py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                      >
                        View Products
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <div className="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                    <FaSearch className="text-amber-600 text-3xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">No matching vendors found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setFilters({ category: 'all', rating: 0 });
                    }}
                    className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg font-medium hover:bg-amber-200 transition"
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

export default VendorsPage;