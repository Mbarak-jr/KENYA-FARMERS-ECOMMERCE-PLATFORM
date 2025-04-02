import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  SearchIcon, 
  MapPinIcon, 
  LeafIcon, 
  UserCircleIcon, 
  PhoneIcon, 
  MailIcon, 
  CheckCircleIcon,
  FilterIcon,
  StarIcon,
  GlobeIcon
} from 'lucide-react';

const FarmersPage = () => {
  const [farmers, setFarmers] = useState([]);
  const [filteredFarmers, setFilteredFarmers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    region: 'all',
    cropType: 'all',
    farmerSize: 'all',
    farmerType: 'local' // Added farmer type filter (local vs international)
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('local'); // Changed default to 'local' instead of 'farmers'
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Full list of Kenya counties
  const kenyaCounties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu", "Garissa", 
    "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", 
    "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", 
    "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", 
    "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", 
    "Samburu", "Siaya", "Taita Taveta", "Tana River", "Tharaka Nithi", "Trans Nzoia", 
    "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ];

  useEffect(() => {
    // Mock data - replace with actual API call
    const fetchFarmers = async () => {
      try {
        // Simulating API call
        setTimeout(() => {
          const mockFarmers = [
            {
              id: 1,
              name: "John Kamau",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
              location: "Kiambu County, Kenya",
              cropTypes: ["Maize", "Beans", "Sweet Potatoes"],
              farmSize: "5 acres",
              farmerSize: "small",
              bio: "Small-scale farmer with 10 years of experience in mixed farming.",
              verified: true,
              rating: 4.7,
              contactInfo: {
                phone: "+254 712 345 678",
                email: "john.kamau@example.com"
              },
              certifications: ["Organic Certified"],
              type: "local"
            },
            {
              id: 2,
              name: "Mary Wangari",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
              location: "Nakuru County, Kenya",
              cropTypes: ["Tea", "Coffee"],
              farmSize: "15 acres",
              farmerSize: "medium",
              bio: "Experienced tea and coffee farmer with sustainable farming practices.",
              verified: true,
              rating: 4.9,
              contactInfo: {
                phone: "+254 723 456 789",
                email: "mary.wangari@example.com"
              },
              certifications: ["Fair Trade", "Rainforest Alliance"],
              type: "local"
            },
            {
              id: 3,
              name: "Kiprono Cooperative Society",
              avatar: "https://randomuser.me/api/portraits/men/42.jpg",
              location: "Kericho County, Kenya",
              cropTypes: ["Tea"],
              farmSize: "250 acres",
              farmerSize: "large",
              bio: "A cooperative of over 500 small-scale tea farmers in the highlands of Kericho.",
              verified: false,
              rating: 4.3,
              contactInfo: {
                phone: "+254 734 567 890",
                email: "info@kiprono.co.ke"
              },
              certifications: ["Fair Trade"],
              type: "local"
            },
            {
              id: 4,
              name: "Samuel Odhiambo",
              avatar: "https://randomuser.me/api/portraits/men/22.jpg",
              location: "Kisumu County, Kenya",
              cropTypes: ["Rice", "Vegetables"],
              farmSize: "8 acres",
              farmerSize: "small",
              bio: "Rice and vegetable farmer specializing in irrigation farming near Lake Victoria.",
              verified: true,
              rating: 4.5,
              contactInfo: {
                phone: "+254 745 678 901",
                email: "samuel.odhiambo@example.com"
              },
              certifications: [],
              type: "local"
            },
            {
              id: 5,
              name: "Kakuzi Plantations Ltd",
              avatar: "https://randomuser.me/api/portraits/lego/5.jpg",
              location: "Murang'a County, Kenya",
              cropTypes: ["Avocado", "Macadamia", "Tea"],
              farmSize: "1200 acres",
              farmerSize: "large",
              bio: "Large-scale commercial farm producing avocados, macadamia nuts, and tea for export markets.",
              verified: true,
              rating: 4.8,
              contactInfo: {
                phone: "+254 756 789 012",
                email: "info@kakuzi.example.com"
              },
              certifications: ["GlobalGAP", "FSSC 22000", "Organic Certified"],
              type: "local"
            },
            {
              id: 6,
              name: "Fatuma Hassan",
              avatar: "https://randomuser.me/api/portraits/women/26.jpg",
              location: "Mombasa County, Kenya",
              cropTypes: ["Cassava", "Coconut", "Cashew Nuts"],
              farmSize: "12 acres",
              farmerSize: "medium",
              bio: "Coastal farmer growing traditional crops adapted to the local climate.",
              verified: false,
              rating: 4.2,
              contactInfo: {
                phone: "+254 767 890 123",
                email: "fatuma.hassan@example.com"
              },
              certifications: [],
              type: "local"
            },
            // International farmers
            {
              id: 7,
              name: "Maria Gonzalez",
              avatar: "https://randomuser.me/api/portraits/women/54.jpg",
              location: "Oaxaca, Mexico",
              cropTypes: ["Coffee", "Cacao", "Maize"],
              farmSize: "10 acres",
              farmerSize: "medium",
              bio: "Third-generation coffee farmer using traditional methods with modern sustainable practices.",
              verified: true,
              rating: 4.6,
              contactInfo: {
                phone: "+52 951 234 5678",
                email: "maria.gonzalez@example.com"
              },
              certifications: ["Organic Certified", "Fair Trade"],
              type: "international"
            },
            {
              id: 8,
              name: "Raj Patel Farms",
              avatar: "https://randomuser.me/api/portraits/men/76.jpg",
              location: "Gujarat, India",
              cropTypes: ["Cotton", "Wheat", "Spices"],
              farmSize: "25 acres",
              farmerSize: "medium",
              bio: "Family-owned farm specializing in organic cotton and traditional grain varieties.",
              verified: true,
              rating: 4.4,
              contactInfo: {
                phone: "+91 98765 43210",
                email: "raj.patel@example.com"
              },
              certifications: ["Global Organic Textile Standard"],
              type: "international"
            },
            {
              id: 9,
              name: "Green Valley Cooperative",
              avatar: "https://randomuser.me/api/portraits/lego/2.jpg",
              location: "Amhara Region, Ethiopia",
              cropTypes: ["Coffee", "Teff", "Sorghum"],
              farmSize: "350 acres",
              farmerSize: "large",
              bio: "Cooperative of 250 farmers practicing sustainable farming in the Ethiopian highlands.",
              verified: true,
              rating: 4.9,
              contactInfo: {
                phone: "+251 91 234 5678",
                email: "info@greenvalley.example.com"
              },
              certifications: ["Rainforest Alliance", "Fair Trade"],
              type: "international"
            }
          ];
          setFarmers(mockFarmers);
          setFilteredFarmers(mockFarmers.filter(farmer => farmer.type === "local"));
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching farmers:", error);
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  useEffect(() => {
    // Filter farmers based on active tab (local vs international), search term and filters
    const farmersByType = farmers.filter(farmer => {
      if (activeTab === 'local') return farmer.type === 'local';
      if (activeTab === 'international') return farmer.type === 'international';
      return true; // If tab is 'all', show all farmers
    });
    
    const results = farmersByType.filter(farmer => {
      const matchesSearch = farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           farmer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           farmer.bio.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRegion = filters.region === 'all' || farmer.location.includes(filters.region);
      
      const matchesCropType = filters.cropType === 'all' || 
                             farmer.cropTypes.some(crop => crop === filters.cropType);
      
      const matchesFarmerSize = filters.farmerSize === 'all' || farmer.farmerSize === filters.farmerSize;
      
      return matchesSearch && matchesRegion && matchesCropType && matchesFarmerSize;
    });
    
    setFilteredFarmers(results);
  }, [searchTerm, filters, farmers, activeTab]);

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

  // Extract unique crop types for filter dropdowns
  const cropTypes = [...new Set(farmers.flatMap(farmer => farmer.cropTypes))];

  // Helper function to extract regions from locations based on active tab
  const getRegionsForActiveTab = () => {
    if (activeTab === 'local') {
      return kenyaCounties.map(county => `${county} County`);
    } else {
      // For international, extract countries from locations
      const countries = [...new Set(farmers
        .filter(farmer => farmer.type === 'international')
        .map(farmer => {
          const parts = farmer.location.split(',');
          return parts.length > 1 ? parts[1].trim() : farmer.location.trim();
        })
      )];
      return countries;
    }
  };

  // Helper function to render stars based on rating
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`full-${i}`} className="w-4 h-4 text-yellow-500 fill-yellow-500" />);
    }

    if (halfStar) {
      stars.push(<StarIcon key="half" className="w-4 h-4 text-yellow-500 fill-yellow-500 opacity-50" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarIcon key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return (
      <div className="flex items-center">
        <div className="flex">{stars}</div>
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };
  
  const renderFarmersList = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredFarmers.length > 0 ? (
        filteredFarmers.map(farmer => (
          <div key={farmer.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <div className={`${farmer.type === 'international' ? 'bg-gradient-to-r from-blue-50 to-indigo-50' : 'bg-gradient-to-r from-green-50 to-emerald-50'} pt-6 pb-4 px-6`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col items-center mr-4">
                    <img 
                      src={farmer.avatar} 
                      alt={farmer.name} 
                      className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover" 
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">{farmer.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPinIcon className="w-4 h-4 mr-1 text-gray-500" />
                      <span>{farmer.location}</span>
                    </div>
                    {renderRatingStars(farmer.rating)}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {farmer.verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <CheckCircleIcon className="w-3 h-3 mr-1" />
                        Verified
                      </span>
                    )}
                    {farmer.type === 'international' && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <GlobeIcon className="w-3 h-3 mr-1" />
                        International
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{farmer.farmSize}</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full capitalize">{farmer.farmerSize}</span>
                {farmer.certifications.map((cert, index) => (
                  <span key={index} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">{cert}</span>
                ))}
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <LeafIcon className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm text-gray-700">{farmer.cropTypes.join(', ')}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{farmer.bio}</p>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center text-sm">
                    <PhoneIcon className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-700">{farmer.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MailIcon className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-700">{farmer.contactInfo.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <div className="text-gray-500">No farmers found matching your criteria.</div>
          <button 
            onClick={() => {
              setSearchTerm('');
              setFilters({region: 'all', cropType: 'all', farmerSize: 'all'});
            }}
            className="mt-4 text-emerald-600 hover:text-emerald-800 text-sm font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );

  // Get the appropriate regions based on active tab
  const regions = getRegionsForActiveTab();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Farmers Directory
          </h1>
          
          <div className="w-full md:w-auto">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm hover:bg-gray-50 w-full"
            >
              <FilterIcon className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar with filters */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white p-6 rounded-xl shadow-sm mb-6 md:mb-0`}>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Farmer Type</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('local')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium 
                    ${activeTab === 'local' 
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  Local
                </button>
                <button
                  onClick={() => setActiveTab('international')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium 
                    ${activeTab === 'international' 
                      ? 'bg-blue-100 text-blue-800 border-blue-200' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  International
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Search</h3>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search farmers..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Filters</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                      Region
                    </label>
                    <select
                      id="region"
                      name="region"
                      value={filters.region}
                      onChange={handleFilterChange}
                      className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
                    >
                      <option value="all">All Regions</option>
                      {regions.map((region, index) => (
                        <option key={index} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="cropType" className="block text-sm font-medium text-gray-700 mb-1">
                      Crop Type
                    </label>
                    <select
                      id="cropType"
                      name="cropType"
                      value={filters.cropType}
                      onChange={handleFilterChange}
                      className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
                    >
                      <option value="all">All Crops</option>
                      {cropTypes.map((crop, index) => (
                        <option key={index} value={crop}>{crop}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="farmerSize" className="block text-sm font-medium text-gray-700 mb-1">
                      Farmer Size
                    </label>
                    <select
                      id="farmerSize"
                      name="farmerSize"
                      value={filters.farmerSize}
                      onChange={handleFilterChange}
                      className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
                    >
                      <option value="all">All Sizes</option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilters({
                      region: 'all',
                      cropType: 'all',
                      farmerSize: 'all'
                    });
                  }}
                  className="w-full bg-gray-100 text-gray-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-200"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
              </div>
            ) : (
              <div>
                <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-800">
                      {activeTab === 'local' ? 'Local Farmers' : 'International Farmers'}
                      <span className="ml-2 text-sm font-normal text-gray-500">
                        ({filteredFarmers.length} {filteredFarmers.length === 1 ? 'farmer' : 'farmers'})
                      </span>
                    </h2>
                    <div className="text-sm text-gray-500">
                      Showing {filteredFarmers.length} of {farmers.filter(f => f.type === activeTab).length} farmers
                    </div>
                  </div>
                </div>
                
                {renderFarmersList()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmersPage;