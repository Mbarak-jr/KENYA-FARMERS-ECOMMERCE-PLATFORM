// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to check if the current path matches a given route
  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <nav className="bg-gradient-to-r from-green-800 to-green-600 shadow-lg relative">
      {/* Updated Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-400"></div>
      <div className="hidden lg:block absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-green-900 opacity-10"></div>
      <div className="hidden lg:block absolute -right-2 top-2 w-6 h-6 rounded-full bg-yellow-400 opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="relative">
                <img
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full shadow-md border border-green-300"
                  src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Kenya Farmers App"
                />
                <div className="absolute inset-0 rounded-full border border-yellow-300 animate-pulse opacity-30"></div>
              </div>
              <span className="ml-2 text-base sm:text-xl font-bold text-white">KenyaFarmers</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1 lg:space-x-4">
              <Link 
                to="/" 
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  isActiveRoute('/') 
                    ? 'bg-green-800 text-white' 
                    : 'text-white hover:bg-green-600 hover:text-white'
                }`}
              >
                Home
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-300 group-hover:w-4/5 transition-all duration-300"></span>
              </Link>
              <Link 
                to="/vendors" 
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  isActiveRoute('/vendors') 
                    ? 'bg-green-800 text-white' 
                    : 'text-white hover:bg-green-600 hover:text-white'
                }`}
              >
                Vendors
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-300 group-hover:w-4/5 transition-all duration-300"></span>
              </Link>
              <Link 
                to="/products" 
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  isActiveRoute('/products') 
                    ? 'bg-green-800 text-white' 
                    : 'text-white hover:bg-green-600 hover:text-white'
                }`}
              >
                Products
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-300 group-hover:w-4/5 transition-all duration-300"></span>
              </Link>
              <Link 
                to="/farmers" 
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  isActiveRoute('/farmers') 
                    ? 'bg-green-800 text-white' 
                    : 'text-white hover:bg-green-600 hover:text-white'
                }`}
              >
                Farmers
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-300 group-hover:w-4/5 transition-all duration-300"></span>
              </Link>
              <Link 
                to="/transporters" 
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  isActiveRoute('/transporters') 
                    ? 'bg-green-800 text-white' 
                    : 'text-white hover:bg-green-600 hover:text-white'
                }`}
              >
                Transporters
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-300 group-hover:w-4/5 transition-all duration-300"></span>
              </Link>
            </div>
            <div className="flex items-center ml-4 lg:ml-6">
              <Link 
                to="/login" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActiveRoute('/login') 
                    ? 'bg-yellow-600 text-white shadow-md transform scale-105' 
                    : 'text-white bg-yellow-600 hover:bg-yellow-500 hover:shadow-md hover:transform hover:scale-105'
                }`}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className={`ml-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActiveRoute('/register') 
                    ? 'bg-yellow-600 text-white shadow-md transform scale-105' 
                    : 'text-white bg-yellow-600 hover:bg-yellow-500 hover:shadow-md hover:transform hover:scale-105'
                }`}
              >
                Signup
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveRoute('/') 
                ? 'bg-green-800 text-white' 
                : 'text-white hover:bg-green-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/vendors"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveRoute('/vendors') 
                ? 'bg-green-800 text-white' 
                : 'text-white hover:bg-green-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Vendors
            </Link>
            <Link
              to="/products"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveRoute('/products') 
                ? 'bg-green-800 text-white' 
                : 'text-white hover:bg-green-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/farmers"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveRoute('/farmers') 
                ? 'bg-green-800 text-white' 
                : 'text-white hover:bg-green-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Farmers
            </Link>
            <Link
              to="/transporters"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveRoute('/transporters') 
                ? 'bg-green-800 text-white' 
                : 'text-white hover:bg-green-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Transporters
            </Link>
            <div className="flex flex-col sm:flex-row sm:space-x-2 pt-2">
              <Link
                to="/login"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActiveRoute('/login') 
                  ? 'bg-yellow-600 text-white shadow-md' 
                  : 'text-white bg-yellow-600 hover:bg-yellow-500 hover:shadow-md'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={`block px-3 py-2 mt-2 sm:mt-0 rounded-md text-base font-medium transition-all duration-300 ${
                  isActiveRoute('/register') 
                  ? 'bg-yellow-600 text-white shadow-md' 
                  : 'text-white bg-yellow-600 hover:bg-yellow-500 hover:shadow-md'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;