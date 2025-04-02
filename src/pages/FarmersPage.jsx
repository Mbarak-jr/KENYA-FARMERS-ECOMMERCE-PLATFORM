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
  GlobeIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from 'lucide-react';

const FarmersPage = () => {
  const [farmers, setFarmers] = useState([]);
  const [filteredFarmers, setFilteredFarmers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    region: 'all',
    cropType: 'all',
    farmerSize: 'all',
    farmerType: 'local'
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('local');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expandedFarmer, setExpandedFarmer] = useState(null);
  
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
              bio: "Small-scale farmer with 10 years of experience in mixed farming. Specializes in sustainable farming practices and has been certified organic for the past 3 years. Works with local cooperatives to bring high-quality produce to market.",
              verified: true,
              rating: 4.7,
              contactInfo: {
                phone: "+254 712 345 678",
                email: "john.kamau@example.com"
              },
              certifications: ["Organic Certified"],
              type: "local",
              yearsExperience: 10,
              languages: ["English", "Swahili"],
              services: ["Direct sales", "Bulk orders", "Farm visits"]
            },
            {
              id: 2,
              name: "Mary Wangari",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
              location: "Nakuru County, Kenya",
              cropTypes: ["Tea", "Coffee"],
              farmSize: "15 acres",
              farmerSize: "medium",
              bio: "Experienced tea and coffee farmer with sustainable farming practices. Member of the Kenya Tea Development Agency and Fair Trade certified. Our farm employs 25 local workers and provides housing and education support for their families.",
              verified: true,
              rating: 4.9,
              contactInfo: {
                phone: "+254 723 456 789",
                email: "mary.wangari@example.com"
              },
              certifications: ["Fair Trade", "Rainforest Alliance"],
              type: "local",
              yearsExperience: 15,
              languages: ["English", "Swahili", "Kikuyu"],
              services: ["Contract farming", "Export quality", "Processing services"]
            },
            {
              id: 3,
              name: "Kiprono Cooperative Society",
              avatar: "https://randomuser.me/api/portraits/men/42.jpg",
              location: "Kericho County, Kenya",
              cropTypes: ["Tea"],
              farmSize: "250 acres",
              farmerSize: "large",
              bio: "A cooperative of over 500 small-scale tea farmers in the highlands of Kericho. We pool resources to achieve economies of scale while maintaining individual farm ownership. Our tea is sold through the KTDA auction system and direct contracts with international buyers.",
              verified: false,
              rating: 4.3,
              contactInfo: {
                phone: "+254 734 567 890",
                email: "info@kiprono.co.ke"
              },
              certifications: ["Fair Trade"],
              type: "local",
              yearsExperience: 8,
              languages: ["English", "Swahili", "Kalenjin"],
              services: ["Bulk purchasing", "Training programs", "Quality assurance"]
            },
            {
              id: 4,
              name: "Samuel Odhiambo",
              avatar: "https://randomuser.me/api/portraits/men/22.jpg",
              location: "Kisumu County, Kenya",
              cropTypes: ["Rice", "Vegetables"],
              farmSize: "8 acres",
              farmerSize: "small",
              bio: "Rice and vegetable farmer specializing in irrigation farming near Lake Victoria. Uses modern irrigation techniques to achieve year-round production. Supplies local markets and restaurants with fresh produce daily.",
              verified: true,
              rating: 4.5,
              contactInfo: {
                phone: "+254 745 678 901",
                email: "samuel.odhiambo@example.com"
              },
              certifications: [],
              type: "local",
              yearsExperience: 7,
              languages: ["English", "Swahili", "Luo"],
              services: ["Regular deliveries", "Custom orders", "Seasonal contracts"]
            },
            {
              id: 5,
              name: "Kakuzi Plantations Ltd",
              avatar: "https://randomuser.me/api/portraits/lego/5.jpg",
              location: "Murang'a County, Kenya",
              cropTypes: ["Avocado", "Macadamia", "Tea"],
              farmSize: "1200 acres",
              farmerSize: "large",
              bio: "Large-scale commercial farm producing avocados, macadamia nuts, and tea for export markets. We employ over 300 workers and have full processing facilities on-site. Our products meet the highest international standards for food safety and quality.",
              verified: true,
              rating: 4.8,
              contactInfo: {
                phone: "+254 756 789 012",
                email: "info@kakuzi.example.com"
              },
              certifications: ["GlobalGAP", "FSSC 22000", "Organic Certified"],
              type: "local",
              yearsExperience: 25,
              languages: ["English", "Swahili"],
              services: ["Export contracts", "Private label", "Processing"]
            },
            {
              id: 6,
              name: "Fatuma Hassan",
              avatar: "https://randomuser.me/api/portraits/women/26.jpg",
              location: "Mombasa County, Kenya",
              cropTypes: ["Cassava", "Coconut", "Cashew Nuts"],
              farmSize: "12 acres",
              farmerSize: "medium",
              bio: "Coastal farmer growing traditional crops adapted to the local climate. Our farm focuses on drought-resistant varieties and intercropping techniques. We supply local processors and also sell directly to consumers through our farm shop.",
              verified: false,
              rating: 4.2,
              contactInfo: {
                phone: "+254 767 890 123",
                email: "fatuma.hassan@example.com"
              },
              certifications: [],
              type: "local",
              yearsExperience: 12,
              languages: ["English", "Swahili", "Arabic"],
              services: ["Farm gate sales", "Processing", "Agrotourism"]
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
              bio: "Third-generation coffee farmer using traditional methods with modern sustainable practices. Our shade-grown coffee is hand-picked and sun-dried. We work with a cooperative of 50 small farmers to bring our products to international markets.",
              verified: true,
              rating: 4.6,
              contactInfo: {
                phone: "+52 951 234 5678",
                email: "maria.gonzalez@example.com"
              },
              certifications: ["Organic Certified", "Fair Trade"],
              type: "international",
              yearsExperience: 20,
              languages: ["Spanish", "English"],
              services: ["Specialty coffee", "Bulk orders", "Farm tours"]
            },
            {
              id: 8,
              name: "Raj Patel Farms",
              avatar: "https://randomuser.me/api/portraits/men/76.jpg",
              location: "Gujarat, India",
              cropTypes: ["Cotton", "Wheat", "Spices"],
              farmSize: "25 acres",
              farmerSize: "medium",
              bio: "Family-owned farm specializing in organic cotton and traditional grain varieties. We practice natural farming methods and avoid synthetic inputs. Our cotton is processed locally and sold to ethical clothing manufacturers worldwide.",
              verified: true,
              rating: 4.4,
              contactInfo: {
                phone: "+91 98765 43210",
                email: "raj.patel@example.com"
              },
              certifications: ["Global Organic Textile Standard"],
              type: "international",
              yearsExperience: 15,
              languages: ["Hindi", "English", "Gujarati"],
              services: ["Organic cotton", "Spice exports", "Contract farming"]
            },
            {
              id: 9,
              name: "Green Valley Cooperative",
              avatar: "https://randomuser.me/api/portraits/lego/2.jpg",
              location: "Amhara Region, Ethiopia",
              cropTypes: ["Coffee", "Teff", "Sorghum"],
              farmSize: "350 acres",
              farmerSize: "large",
              bio: "Cooperative of 250 farmers practicing sustainable farming in the Ethiopian highlands. We specialize in heirloom coffee varieties and ancient grains. Our members receive training and shared resources to improve yields while maintaining environmental sustainability.",
              verified: true,
              rating: 4.9,
              contactInfo: {
                phone: "+251 91 234 5678",
                email: "info@greenvalley.example.com"
              },
              certifications: ["Rainforest Alliance", "Fair Trade"],
              type: "international",
              yearsExperience: 10,
              languages: ["Amharic", "English"],
              services: ["Fair trade coffee", "Ancient grains", "Bulk exports"]
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
      return true;
    });
    
    const results = farmersByType.filter(farmer => {
      const matchesSearch = farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           farmer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           farmer.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           farmer.cropTypes.some(crop => crop.toLowerCase().includes(searchTerm.toLowerCase()));
      
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

  const toggleFarmerExpansion = (id) => {
    setExpandedFarmer(expandedFarmer === id ? null : id);
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
    <div className="space-y-4">
      {filteredFarmers.length > 0 ? (
        filteredFarmers.map(farmer => (
          <div key={farmer.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className={`${farmer.type === 'international' ? 'bg-gradient-to-r from-blue-50 to-indigo-50' : 'bg-gradient-to-r from-green-50 to-emerald-50'} p-4`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <img 
                    src={farmer.avatar} 
                    alt={farmer.name} 
                    className="w-16 h-16 rounded-full border-4 border-white shadow-sm object-cover" 
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{farmer.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPinIcon className="w-4 h-4 mr-1 text-gray-500" />
                      <span>{farmer.location}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      {renderRatingStars(farmer.rating)}
                      {farmer.verified && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                          <CheckCircleIcon className="w-3 h-3 mr-1" />
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  {farmer.type === 'international' && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full flex items-center mb-2">
                      <GlobeIcon className="w-3 h-3 mr-1" />
                      International
                    </span>
                  )}
                  <button 
                    onClick={() => toggleFarmerExpansion(farmer.id)}
                    className="text-emerald-600 hover:text-emerald-800 flex items-center text-sm"
                  >
                    {expandedFarmer === farmer.id ? (
                      <>
                        <span>Show less</span>
                        <ChevronUpIcon className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        <span>Show more</span>
                        <ChevronDownIcon className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{farmer.farmSize}</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full capitalize">{farmer.farmerSize}</span>
                {farmer.cropTypes.map((crop, index) => (
                  <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{crop}</span>
                ))}
              </div>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {farmer.bio}
              </p>
              
              {expandedFarmer === farmer.id && (
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {farmer.certifications.length > 0 ? (
                        farmer.certifications.map((cert, index) => (
                          <span key={index} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">{cert}</span>
                        ))
                      ) : (
                        <span className="text-xs text-gray-500">No certifications listed</span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {farmer.services.map((service, index) => (
                        <span key={index} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">{service}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 mb-2">Contact Information</h4>
                      <div className="space-y-2">
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
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 mb-2">Details</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <UserCircleIcon className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-gray-700">{farmer.yearsExperience} years experience</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <LeafIcon className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-gray-700">Speaks: {farmer.languages.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-2">
                    <button className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                      Contact Farmer
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                      View Profile
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-10 bg-white rounded-xl shadow-sm">
          <div className="text-gray-500">No farmers found matching your criteria.</div>
          <button 
            onClick={() => {
              setSearchTerm('');
              setFilters({
                region: 'all',
                cropType: 'all',
                farmerSize: 'all',
                farmerType: 'local'
              });
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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Farmers Network</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Connect with trusted farmers and agricultural producers across the region
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Farmers Directory</h1>
            <p className="mt-1 text-sm text-gray-500">
              Connect with {activeTab === 'local' ? 'local' : 'international'} farmers across various regions
            </p>
          </div>
          
          <div className="w-full md:w-auto mt-4 md:mt-0">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm hover:bg-gray-50 w-full md:w-auto"
            >
              <FilterIcon className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar with filters */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white p-4 rounded-lg shadow-sm mb-6 md:mb-0`}>
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">Farmer Type</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('local')}
                  className={`flex-1 py-2 px-3 rounded-md text-xs font-medium 
                    ${activeTab === 'local' 
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'}`}
                >
                  Local
                </button>
                <button
                  onClick={() => setActiveTab('international')}
                  className={`flex-1 py-2 px-3 rounded-md text-xs font-medium 
                    ${activeTab === 'international' 
                      ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'}`}
                >
                  International
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">Search</h3>
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
                <h3 className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">Filters</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="region" className="block text-xs font-medium text-gray-600 mb-1">
                      Region
                    </label>
                    <select
                      id="region"
                      name="region"
                      value={filters.region}
                      onChange={handleFilterChange}
                      className="block w-full pl-3 pr-10 py-2 text-xs border border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 rounded-md"
                    >
                      <option value="all">All Regions</option>
                      {regions.map((region, index) => (
                        <option key={index} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="cropType" className="block text-xs font-medium text-gray-600 mb-1">
                      Crop Type
                    </label>
                    <select
                      id="cropType"
                      name="cropType"
                      value={filters.cropType}
                      onChange={handleFilterChange}
                      className="block w-full pl-3 pr-10 py-2 text-xs border border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 rounded-md"
                    >
                      <option value="all">All Crops</option>
                      {cropTypes.map((crop, index) => (
                        <option key={index} value={crop}>{crop}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="farmerSize" className="block text-xs font-medium text-gray-600 mb-1">
                      Farmer Size
                    </label>
                    <select
                      id="farmerSize"
                      name="farmerSize"
                      value={filters.farmerSize}
                      onChange={handleFilterChange}
                      className="block w-full pl-3 pr-10 py-2 text-xs border border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 rounded-md"
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
                      farmerSize: 'all',
                      farmerType: 'local'
                    });
                  }}
                  className="w-full bg-gray-100 text-gray-600 py-2 px-4 rounded-md text-xs font-medium hover:bg-gray-200"
                >
                  Clear All Filters
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
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      {activeTab === 'local' ? 'Local Farmers' : 'International Farmers'}
                      <span className="ml-2 text-sm font-normal text-gray-500">
                        ({filteredFarmers.length} {filteredFarmers.length === 1 ? 'farmer' : 'farmers'})
                      </span>
                    </h2>
                    <div className="text-xs text-gray-500 mt-1 md:mt-0">
                      Showing {filteredFarmers.length} of {farmers.filter(f => f.type === activeTab).length} {activeTab} farmers
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