import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStar, FaMapMarkerAlt, FaBoxOpen } from 'react-icons/fa';

const VendorsPage = () => {
  const [vendors, setVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    rating: 0,
  });
  const [loading, setLoading] = useState(true);

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
              description: "Quality agricultural supplies and equipment",
              logo: "https://images.unsplash.com/photo-1608461342673-b8ba148e1e18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhcm0lMjBzdXBwbGllc3xlbnwwfHwwfHx8MA%3D%3D",
              category: "Equipment",
              rating: 4.5,
              location: "Nairobi, Kenya",
              productsCount: 42
            },
            {
              id: 2,
              name: "Green Seeds Ltd",
              description: "Organic and hybrid seeds for all seasons",
              logo: "https://images.unsplash.com/photo-1684510459778-51433ae1178d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBzZWVkc3xlbnwwfHwwfHx8MA%3D%3D",
              category: "Seeds",
              rating: 4.2,
              location: "Nakuru, Kenya",
              productsCount: 78
            },
            {
              id: 3,
              name: "AgriTech Solutions",
              description: "Modern farming technology and solutions",
              logo: "https://images.unsplash.com/photo-1626083558246-c0644090f365?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWdyaXRlY2glMjBzb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D",
              category: "Technology",
              rating: 4.7,
              location: "Mombasa, Kenya",
              productsCount: 35
            },
            {
              id: 4,
              name: "Fertilizer Plus",
              description: "Premium fertilizers for maximum yield",
              logo: "https://images.unsplash.com/photo-1722132340018-34403bd43262?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlcnRpbGl6ZXIlMjBwbHVzfGVufDB8fDB8fHww",
              category: "Fertilizer",
              rating: 4.0,
              location: "Kisumu, Kenya",
              productsCount: 29
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
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStar key="half-star" className="text-yellow-400 opacity-50" />);
    }
    
    return (
      <div className="flex items-center">
        <div className="flex mr-1">{stars}</div>
        <span className="text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Agricultural Vendors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our curated list of trusted agricultural vendors offering a wide range of products and services.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search vendors..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
              </div>
            </div>
            
            <div>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              >
                <option value="all">All Categories</option>
                <option value="Equipment">Equipment</option>
                <option value="Seeds">Seeds</option>
                <option value="Fertilizer">Fertilizer</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
            
            <div>
              <select
                name="rating"
                value={filters.rating}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              >
                <option value="0">All Ratings</option>
                <option value="3">3+ Stars</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
              </select>
            </div>
          </div>
        </div>

        {/* Vendors Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
            <p className="text-lg text-gray-600">Loading vendors...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVendors.length > 0 ? (
              filteredVendors.map(vendor => (
                <div key={vendor.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={vendor.logo}
                        alt={`${vendor.name} logo`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900">{vendor.name}</h3>
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                          {vendor.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{vendor.description}</p>
                    
                    <div className="flex flex-col gap-2 text-sm mb-4">
                      <div className="flex items-center">
                        {renderRatingStars(vendor.rating)}
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2 text-gray-400" />
                        {vendor.location}
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <FaBoxOpen className="mr-2 text-gray-400" />
                        {vendor.productsCount} Products
                      </div>
                    </div>
                    
                    <Link 
                      to={`/vendors/${vendor.id}`}
                      className="block w-full text-center py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-300"
                    >
                      View Vendor
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <div className="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">No vendors found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or filters</p>
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