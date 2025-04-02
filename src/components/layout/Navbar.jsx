import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <nav className="bg-white shadow-xl relative border-b border-gray-200">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-green-50 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=5')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Golden top accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
      
      {/* Floating leaves decoration */}
      <div className="hidden lg:block absolute -right-10 -top-4 opacity-20">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="text-green-600">
          <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.522 4.82 3.889 6.115-1.422 1.952-2.889 3.857-2.889 5.77 0 1.414 1.343 2 3 2 4.97 0 9-3.186 9-7.116 0-2.556-1.522-4.82-3.889-6.115 1.422-1.952 2.889-3.857 2.889-5.77 0-1.414-1.343-2-3-2z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="relative mr-3">
                <img
                  className="h-10 w-10 rounded-full shadow-lg border-2 border-white group-hover:border-amber-300 transition-all duration-300"
                  src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Kenya Farmers App"
                />
                <div className="absolute inset-0 rounded-full border-2 border-amber-300 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className="ml-1 text-xl font-bold bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">
                KenyaFarmers
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-2">
              {[
                { path: '/', name: 'Home' },
                { path: '/vendors', name: 'Vendors' },
                { path: '/products', name: 'Products' },
                { path: '/farmers', name: 'Farmers' },
                { path: '/transporters', name: 'Transporters' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    isActiveRoute(item.path) 
                      ? 'text-green-700 bg-amber-50 shadow-inner' 
                      : 'text-gray-700 hover:text-green-700 hover:bg-amber-50'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-green-500 transition-all duration-300 ${
                    isActiveRoute(item.path) ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                  }`}></span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center ml-6">
              <div className="flex bg-gradient-to-r from-amber-500 to-green-600 rounded-lg overflow-hidden shadow-lg">
                <Link 
                  to="/login" 
                  className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActiveRoute('/login') 
                      ? 'bg-white/20 text-white' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Login
                </Link>
                <div className="w-px bg-white/30 my-2"></div>
                <Link 
                  to="/register" 
                  className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActiveRoute('/register') 
                      ? 'bg-white/20 text-white' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden relative z-20">
          <div className="px-2 pt-2 pb-4 space-y-2 bg-white shadow-xl rounded-b-lg border-t border-gray-200">
            {[
              { path: '/', name: 'Home' },
              { path: '/vendors', name: 'Vendors' },
              { path: '/products', name: 'Products' },
              { path: '/farmers', name: 'Farmers' },
              { path: '/transporters', name: 'Transporters' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-3 rounded-lg text-base font-medium ${
                  isActiveRoute(item.path) 
                  ? 'bg-amber-50 text-green-700' 
                  : 'text-gray-700 hover:bg-amber-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-2">
              <div className="flex bg-gradient-to-r from-amber-500 to-green-600 rounded-lg overflow-hidden shadow">
                <Link
                  to="/login"
                  className={`flex-1 text-center px-4 py-3 text-base font-medium ${
                    isActiveRoute('/login') 
                    ? 'bg-white/20 text-white' 
                    : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <div className="w-px bg-white/30 my-2"></div>
                <Link
                  to="/register"
                  className={`flex-1 text-center px-4 py-3 text-base font-medium ${
                    isActiveRoute('/register') 
                    ? 'bg-white/20 text-white' 
                    : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;