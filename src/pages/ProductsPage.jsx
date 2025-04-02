import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge } from 'react-bootstrap';
import { FaSearch, FaFilter, FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    vendor: 'all'
  });
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('popularity');

  useEffect(() => {
    // Mock data - replace with actual API call
    const fetchProducts = async () => {
      try {
        // Simulating API call
        setTimeout(() => {
          const mockProducts = [
            {
              id: 1,
              name: "Organic Tomato Seeds",
              price: 8.99,
              discount: 0,
              image: "https://via.placeholder.com/200",
              category: "Seeds",
              vendor: "Green Seeds Ltd",
              rating: 4.5,
              reviews: 128,
              inStock: true,
              description: "High-yield organic tomato seeds for your garden."
            },
            {
              id: 2,
              name: "NPK Fertilizer 10kg",
              price: 29.99,
              discount: 10,
              image: "https://via.placeholder.com/200",
              category: "Fertilizer",
              vendor: "Fertilizer Plus",
              rating: 4.2,
              reviews: 74,
              inStock: true,
              description: "Balanced NPK formula for all crops."
            },
            {
              id: 3,
              name: "Hand Tractor",
              price: 599.99,
              discount: 0,
              image: "https://via.placeholder.com/200",
              category: "Equipment",
              vendor: "Farm Supplies Co.",
              rating: 4.8,
              reviews: 42,
              inStock: false,
              description: "Small hand tractor for efficient field preparation."
            },
            {
              id: 4,
              name: "Irrigation Drip System Kit",
              price: 129.99,
              discount: 15,
              image: "https://via.placeholder.com/200",
              category: "Equipment",
              vendor: "AgriTech Solutions",
              rating: 4.6,
              reviews: 96,
              inStock: true,
              description: "Complete drip irrigation system for up to 1/4 acre."
            },
            {
              id: 5,
              name: "Pesticide Sprayer 5L",
              price: 45.99,
              discount: 0,
              image: "https://via.placeholder.com/200",
              category: "Equipment",
              vendor: "Farm Supplies Co.",
              rating: 4.3,
              reviews: 58,
              inStock: true,
              description: "Manual pressure sprayer for pesticides and herbicides."
            },
            {
              id: 6,
              name: "Maize Hybrid Seeds 1kg",
              price: 14.99,
              discount: 5,
              image: "https://via.placeholder.com/200",
              category: "Seeds",
              vendor: "Green Seeds Ltd",
              rating: 4.7,
              reviews: 112,
              inStock: true,
              description: "High-yield drought-resistant maize hybrid seeds."
            },
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
    // Filter products based on search term and filters
    let results = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
      const matchesVendor = filters.vendor === 'all' || product.vendor === filters.vendor;
      
      let matchesPrice = true;
      if (filters.priceRange === 'under10') {
        matchesPrice = product.price < 10;
      } else if (filters.priceRange === '10to50') {
        matchesPrice = product.price >= 10 && product.price <= 50;
      } else if (filters.priceRange === '50to100') {
        matchesPrice = product.price > 50 && product.price <= 100;
      } else if (filters.priceRange === 'over100') {
        matchesPrice = product.price > 100;
      }
      
      return matchesSearch && matchesCategory && matchesVendor && matchesPrice;
    });
    
    // Sort results
    if (sortBy === 'priceLow') {
      results = [...results].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHigh') {
      results = [...results].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      results = [...results].sort((a, b) => b.rating - a.rating);
    } else {
      results = [...results].sort((a, b) => b.reviews - a.reviews); // default: popularity
    }
    
    setFilteredProducts(results);
  }, [searchTerm, filters, sortBy, products]);

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

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Extract unique vendors for filter dropdown
  const vendors = [...new Set(products.map(product => product.vendor))];

  return (
    <Container className="py-5">
      <h1 className="mb-4">Agricultural Products</h1>
      <p className="text-muted mb-4">
        Browse our extensive catalog of agricultural inputs, equipment, and supplies.
      </p>

      <Row className="mb-4">
        <Col md={6}>
          <InputGroup>
            <Form.Control
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button variant="primary">
              <FaSearch />
            </Button>
          </InputGroup>
        </Col>
        <Col md={3}>
          <Form.Select 
            name="category" 
            value={filters.category} 
            onChange={handleFilterChange}
            aria-label="Filter by category"
          >
            <option value="all">All Categories</option>
            <option value="Seeds">Seeds</option>
            <option value="Fertilizer">Fertilizer</option>
            <option value="Equipment">Equipment</option>
            <option value="Pesticides">Pesticides</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select 
            name="sortBy" 
            value={sortBy} 
            onChange={handleSortChange}
            aria-label="Sort products"
          >
            <option value="popularity">Popularity</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4}>
          <Form.Select 
            name="vendor" 
            value={filters.vendor} 
            onChange={handleFilterChange}
            aria-label="Filter by vendor"
          >
            <option value="all">All Vendors</option>
            {vendors.map(vendor => (
              <option key={vendor} value={vendor}>{vendor}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select 
            name="priceRange" 
            value={filters.priceRange} 
            onChange={handleFilterChange}
            aria-label="Filter by price range"
          >
            <option value="all">All Prices</option>
            <option value="under10">Under $10</option>
            <option value="10to50">$10 - $50</option>
            <option value="50to100">$50 - $100</option>
            <option value="over100">Over $100</option>
          </Form.Select>
        </Col>
        <Col md={4} className="d-flex justify-content-end align-items-center">
          <span className="me-2">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </span>
        </Col>
      </Row>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading products...</p>
        </div>
      ) : (
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Col key={product.id} md={6} lg={4} className="mb-4">
                <Card className="h-100 product-card shadow-sm">
                  {product.discount > 0 && (
                    <div className="position-absolute top-0 end-0 p-2">
                      <Badge bg="danger">-{product.discount}%</Badge>
                    </div>
                  )}
                  <div className="text-center p-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="img-fluid product-image" 
                      style={{ height: '160px', objectFit: 'contain' }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="product-title">{product.name}</Card.Title>
                    <div className="mb-2">
                      <Badge bg="secondary" className="me-2">{product.category}</Badge>
                      <Badge bg="info">{product.vendor}</Badge>
                    </div>
                    <Card.Text className="product-description text-truncate">
                      {product.description}
                    </Card.Text>
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-warning me-2">
                        <FaStar />
                      </div>
                      <span>{product.rating} ({product.reviews} reviews)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        {product.discount > 0 ? (
                          <>
                            <span className="text-muted text-decoration-line-through me-2">
                              ${product.price.toFixed(2)}
                            </span>
                            <span className="fw-bold text-danger">
                              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="fw-bold">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <Badge bg={product.inStock ? "success" : "danger"}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-top-0">
                    <div className="d-flex gap-2">
                      <Link to={`/products/${product.id}`} className="btn btn-outline-primary flex-grow-1">
                        View Details
                      </Link>
                      <Button 
                        variant="primary" 
                        className="btn-icon"
                        disabled={!product.inStock}
                      >
                        <FaShoppingCart />
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <div className="text-center py-5">
                <h3>No products found</h3>
                <p>Try adjusting your search criteria</p>
              </div>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

export default ProductsPage;