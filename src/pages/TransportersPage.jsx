import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaTruck, FaUserCircle, FaPhone, FaEnvelope, FaStar, FaCheckCircle } from 'react-icons/fa';

const TransportersPage = () => {
  const [transporters, setTransporters] = useState([]);
  const [filteredTransporters, setFilteredTransporters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('transporters');

  useEffect(() => {
    const fetchTransporters = async () => {
      try {
        setTimeout(() => {
          const mockTransporters = [
            { 
              id: 1, 
              name: "James Kariuki", 
              avatar: "https://via.placeholder.com/150", 
              location: "Nairobi, Kenya", 
              vehicleType: "Truck", 
              bio: "Experienced transporter specializing in farm produce delivery.", 
              verified: true, 
              rating: 4.8, 
              contactInfo: { phone: "+254 723 456 789", email: "james.kariuki@example.com" } 
            },
            { 
              id: 2, 
              name: "Sarah Omondi", 
              avatar: "https://via.placeholder.com/150", 
              location: "Kisumu, Kenya", 
              vehicleType: "Van", 
              bio: "Reliable transport for perishable goods with temperature control.", 
              verified: true, 
              rating: 4.7, 
              contactInfo: { phone: "+254 712 345 678", email: "sarah.omondi@example.com" } 
            },
            { 
              id: 3, 
              name: "Daniel Mwangi", 
              avatar: "https://via.placeholder.com/150", 
              location: "Mombasa, Kenya", 
              vehicleType: "Pickup", 
              bio: "Fast and efficient delivery for agricultural products.", 
              verified: false, 
              rating: 4.2, 
              contactInfo: { phone: "+254 734 567 890", email: "daniel.mwangi@example.com" } 
            },
            { 
              id: 4, 
              name: "Elizabeth Njeri", 
              avatar: "https://via.placeholder.com/150", 
              location: "Nakuru, Kenya", 
              vehicleType: "Lorry", 
              bio: "Bulk transport specialist with over 10 years experience.", 
              verified: true, 
              rating: 4.9, 
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
    const results = transporters.filter(transporter =>
      transporter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transporter.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transporter.bio.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransporters(results);
  }, [searchTerm, transporters]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to render rating stars
  const renderRating = (rating) => {
    return (
      <div className="flex items-center mt-1">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} ${
                i === Math.floor(rating) && rating % 1 > 0 ? 'opacity-70' : ''
              }`}
              size={16}
            />
          ))}
        </div>
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Transporters Directory</h1>
          <p className="mt-2 text-gray-600">Find reliable transporters for your agricultural products</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search transporters by name, location, or bio..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition shadow-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'transporters'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('transporters')}
            >
              Transporters List
            </button>
          </div>
        </div>

        {/* Transporters List */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
            <p className="text-lg text-gray-600">Loading transporters...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTransporters.length > 0 ? (
              filteredTransporters.map(transporter => (
                <div key={transporter.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-start">
                      <img
                        src={transporter.avatar}
                        alt={transporter.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">{transporter.name}</h3>
                          {transporter.verified && (
                            <span className="flex items-center text-xs font-medium text-green-800 bg-green-100 px-2 py-1 rounded-full">
                              <FaCheckCircle className="mr-1" /> Verified
                            </span>
                          )}
                        </div>
                        {renderRating(transporter.rating)}
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <FaMapMarkerAlt className="text-gray-400 mr-2" />
                        <span>{transporter.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FaTruck className="text-green-600 mr-2" />
                        <span>{transporter.vehicleType}</span>
                      </div>
                    </div>
                    
                    <p className="mt-3 text-sm text-gray-600">{transporter.bio}</p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <FaPhone className="text-gray-400 mr-2" />
                          <span>{transporter.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <FaEnvelope className="text-gray-400 mr-2" />
                          <span className="truncate">{transporter.contactInfo.email}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4">
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center">
                        <FaUserCircle className="mr-2" /> Contact Transporter
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <div className="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No transporters found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria</p>
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