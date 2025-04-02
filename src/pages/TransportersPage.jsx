import React, { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaTruck, 
  FaUserCircle, 
  FaPhone, 
  FaEnvelope, 
  FaStar, 
  FaCheckCircle, 
  FaFilter,
  FaShippingFast
} from 'react-icons/fa';

const TransportersPage = () => {
  const [transporters, setTransporters] = useState([]);
  const [filteredTransporters, setFilteredTransporters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    vehicleType: 'all',
    minRating: 0,
    verifiedOnly: false
  });

  useEffect(() => {
    const fetchTransporters = async () => {
      try {
        setTimeout(() => {
          const mockTransporters = [
            { 
              id: 1, 
              name: "James Kariuki", 
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww", 
              location: "Nairobi, Kenya", 
              vehicleType: "Truck", 
              vehicleImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31e8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              bio: "Experienced transporter specializing in farm produce delivery with 10+ years in the industry.", 
              verified: true, 
              rating: 4.8, 
              reviews: 42,
              contactInfo: { phone: "+254 723 456 789", email: "james.kariuki@example.com" } 
            },
            { 
              id: 2, 
              name: "Sarah Omondi", 
              avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww", 
              location: "Kisumu, Kenya", 
              vehicleType: "Refrigerated Van", 
              vehicleImage: "https://images.unsplash.com/photo-1621841957884-1210fe19d66d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              bio: "Reliable transport for perishable goods with temperature-controlled units.", 
              verified: true, 
              rating: 4.7, 
              reviews: 36,
              contactInfo: { phone: "+254 712 345 678", email: "sarah.omondi@example.com" } 
            },
            { 
              id: 3, 
              name: "Daniel Mwangi", 
              avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww", 
              location: "Mombasa, Kenya", 
              vehicleType: "Pickup Truck", 
              vehicleImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              bio: "Fast and efficient delivery for agricultural products across the coast region.", 
              verified: false, 
              rating: 4.2, 
              reviews: 18,
              contactInfo: { phone: "+254 734 567 890", email: "daniel.mwangi@example.com" } 
            },
            { 
              id: 4, 
              name: "Elizabeth Njeri", 
              avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww", 
              location: "Nakuru, Kenya", 
              vehicleType: "Lorry", 
              vehicleImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31e8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              bio: "Bulk transport specialist with over 10 years experience in agricultural logistics.", 
              verified: true, 
              rating: 4.9, 
              reviews: 57,
              contactInfo: { phone: "+254 745 678 901", email: "elizabeth.njeri@example.com" } 
            }
          ];
          setTransporters(mockTransporters);
          setFilteredTransporters(mockTransporters);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching transporters:", error);
        setLoading(false);
      }
    };

    fetchTransporters();
  }, []);

  useEffect(() => {
    const results = transporters.filter(transporter => {
      const matchesSearch = transporter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transporter.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transporter.bio.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesVehicleType = filters.vehicleType === 'all' || transporter.vehicleType === filters.vehicleType;
      const matchesRating = transporter.rating >= filters.minRating;
      const matchesVerified = !filters.verifiedOnly || transporter.verified;
      
      return matchesSearch && matchesVehicleType && matchesRating && matchesVerified;
    });
    
    setFilteredTransporters(results);
  }, [searchTerm, filters, transporters]);

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
        <div className="flex text-green-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${i < Math.floor(rating) ? 'text-green-400' : 'text-gray-300'} ${
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Agricultural Transporters Network</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Connect with trusted transporters for your farm produce delivery needs
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
                placeholder="Search transporters by name, location, or specialty..."
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                <select
                  name="vehicleType"
                  value={filters.vehicleType}
                  onChange={handleFilterChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                >
                  <option value="all">All Vehicle Types</option>
                  <option value="Truck">Truck</option>
                  <option value="Lorry">Lorry</option>
                  <option value="Pickup Truck">Pickup Truck</option>
                  <option value="Refrigerated Van">Refrigerated Van</option>
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

              <div className="flex items-end">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="verifiedOnly"
                    checked={filters.verifiedOnly}
                    onChange={handleFilterChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Verified Only</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {filteredTransporters.length} {filteredTransporters.length === 1 ? 'Transporter' : 'Transporters'} Available
          </h2>
          <div className="text-sm text-gray-500">
            Showing {filteredTransporters.length} of {transporters.length} total
          </div>
        </div>

        {/* Transporters Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
            <p className="text-lg text-gray-600">Loading transporters...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTransporters.length > 0 ? (
              filteredTransporters.map(transporter => (
                <div key={transporter.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Vehicle Image */}
                  <div className="h-40 bg-gray-100 overflow-hidden relative">
                    <img 
                      src={transporter.vehicleImage} 
                      alt={transporter.vehicleType} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {transporter.vehicleType}
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    {/* Transporter Avatar */}
                    <div className="absolute -top-8 left-6">
                      <img
                        src={transporter.avatar}
                        alt={transporter.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{transporter.name}</h3>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <FaMapMarkerAlt className="text-green-500 mr-1" />
                            {transporter.location}
                          </div>
                        </div>
                        {transporter.verified && (
                          <span className="flex items-center text-xs font-medium text-white bg-green-600 px-2 py-1 rounded-full">
                            <FaCheckCircle className="mr-1" /> Verified
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-3">
                        {renderRating(transporter.rating)}
                        <span className="text-xs text-gray-500 ml-2">({transporter.reviews} reviews)</span>
                      </div>
                      
                      <p className="text-gray-600 my-3 text-sm line-clamp-2">{transporter.bio}</p>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-600">
                            <FaPhone className="text-green-500 mr-2" />
                            <span>{transporter.contactInfo.phone}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FaEnvelope className="text-green-500 mr-2" />
                            <span className="truncate">{transporter.contactInfo.email}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
                          <FaShippingFast className="mr-2" /> Contact Transporter
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
                    <FaTruck className="text-green-600 text-3xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">No matching transporters</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setFilters({ vehicleType: 'all', minRating: 0, verifiedOnly: false });
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

export default TransportersPage;