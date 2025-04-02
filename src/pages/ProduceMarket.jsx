import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge, Tabs, Tab } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt, FaLeaf, FaUserCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FarmersPage = () => {
  const [farmers, setFarmers] = useState([]);
  const [filteredFarmers, setFilteredFarmers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    region: 'all',
    cropType: 'all',
    farmerSize: 'all'
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('farmers');

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
              avatar: "https://via.placeholder.com/150",
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
              certifications: ["Organic Certified"]
            },
            {
              id: 2,
              name: "Mary Wangari",
              avatar: "https://via.placeholder.com/150",
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
              certifications: ["Fair Trade", "Rainforest Alliance"]
            },
            {
              id: 3,
              name: "Kiprono Cooperative Society",
              avatar: "https://via.placeholder.com/150",
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
              certifications: ["Fair Trade"]
            },
            {
              id: 4,
              name: "Samuel Odhiambo",
              avatar: "https://via.placeholder.com/150",
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
              certifications: []
            },
            {
              id: 5,
              name: "Kakuzi Plantations Ltd",
              avatar: "https://via.placeholder.com/150",
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
              certifications: ["GlobalGAP", "FSSC 22000", "Organic Certified"]
            },
            {
              id: 6,
              name: "Fatuma Hassan",
              avatar: "https://via.placeholder.com/150",
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
              certifications: []
            }
          ];
          setFarmers(mockFarmers);
          setFilteredFarmers(mockFarmers);
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
    // Filter farmers based on search term and filters
    const results = farmers.filter(farmer => {
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
  }, [searchTerm, filters, farmers]);

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

  // Extract unique regions and crop types for filter dropdowns
  const regions = [...new Set(farmers.map(farmer => {
    const county = farmer.location.split(',')[0].trim();
    return county;
  }))];
  
  const cropTypes = [...new Set(farmers.flatMap(farmer => farmer.cropTypes))];
  
  const renderFarmersList = () => (
    <Row>
      {filteredFarmers.length > 0 ? (
        filteredFarmers.map(farmer => (
          <Col key={farmer.id} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <div className="position-relative">
                {farmer.verified && (
                  <Badge 
                    bg="success" 
                    className="position-absolute top-0 end-0 m-2"
                    pill
                  >
                    Verified
                  </Badge>
                )}
                <div className="text-center p-3">
                  <img 
                    src={farmer.avatar} 
                    alt={farmer.name} 
                    className="img-fluid rounded-circle" 
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <Card.Body>
                <Card.Title>{farmer.name}</Card.Title>
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-1">
                    <FaMapMarkerAlt className="text-secondary me-2" />
                    <small>{farmer.location}</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaLeaf className="text-success me-2" />
                    <small>{farmer.cropTypes.join(', ')}</small>
                  </div>
                </div>
                <Card.Text className="small mb-3">
                  {farmer.bio}
                </Card.Text>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  <Badge bg="primary" className="me-1">Farm Size: {farmer.farmSize}</Badge>
                  {farmer.certifications.map((cert, index) => (
                    <Badge key={index} bg="info" className="me-1">{cert}</Badge>
                  ))}
                </div>
                <div className="farmer-contact mt-3 small">
                  <div className="d-flex align-items-center mb-1">
                    <FaPhone className="text-secondary me-2" />
                    <span>{farmer.contactInfo.phone}</span>
                  </div>
                            <div className="d-flex align-items-center">
                    <FaEnvelope className="text-secondary me-2" />
                    <span>{farmer.contactInfo.email}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <Col>
          <p className="text-center">No farmers found.</p>
        </Col>
      )}
    </Row>
  );

  return (
    <Container className="py-4">
      <h2 className="mb-4">Farmers Directory</h2>
      
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search farmers by name, location, or bio..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button variant="outline-secondary">
          <FaSearch />
        </Button>
      </InputGroup>
      
      <Row className="mb-3">
        <Col md={4}>
          <Form.Select name="region" onChange={handleFilterChange}>
            <option value="all">All Regions</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select name="cropType" onChange={handleFilterChange}>
            <option value="all">All Crop Types</option>
            {cropTypes.map(crop => (
              <option key={crop} value={crop}>{crop}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select name="farmerSize" onChange={handleFilterChange}>
            <option value="all">All Farmer Sizes</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </Form.Select>
        </Col>
      </Row>
      
      <Tabs
        activeKey={activeTab}
        onSelect={(tab) => setActiveTab(tab)}
        className="mb-3"
      >
        <Tab eventKey="farmers" title="Farmers List">
          {loading ? <p>Loading farmers...</p> : renderFarmersList()}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default FarmersPage;
