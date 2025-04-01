import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user, role } = useSelector((state) => state.auth);
  const { totalItems } = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const getNavLinks = () => {
    if (!isAuthenticated) {
      return [
        { name: 'Home', path: '/' },
        { name: 'Produce Market', path: '/marketplace/produce' },
        { name: 'Agri Inputs', path: '/marketplace/agri-inputs' },
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' },
      ];
    }

    const commonLinks = [
      { name: 'Home', path: '/' },
      { name: 'Produce Market', path: '/marketplace/produce' },
      { name: 'Agri Inputs', path: '/marketplace/agri-inputs' },
    ];

    switch (role) {
      case 'farmer':
        return [
          ...commonLinks,
          { name: 'My Produce', path: '/dashboard/my-produce' },
          { name: 'My Orders', path: '/dashboard/orders' },
          { name: 'Find Transport', path: '/transport' },
        ];
      case 'buyer':
        return [
          ...commonLinks,
          { name: 'My Orders', path: '/dashboard/orders' },
        ];
      case 'transporter':
        return [
          ...commonLinks,
          { name: 'Transport Requests', path: '/dashboard/transport' },
        ];
      case 'vendor':
        return [
          ...commonLinks,
          { name: 'My Products', path: '/dashboard/my-products' },
          { name: 'Orders', path: '/dashboard/orders' },
        ];
      default:
        return commonLinks;
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-800 shadow-xl' : 'bg-gray-800 bg-opacity-95'
      }`}
    >
      <div className="border-b border-green-400 border-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Decorative elements */}
          <div className="absolute left-0 top-0 w-16 h-16 bg-green-500 bg-opacity-20 rounded-br-full"></div>
          <div className="absolute right-0 bottom-0 w-16 h-16 bg-green-500 bg-opacity-20 rounded-tl-full"></div>
          
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center group">
                <div className="relative p-1">
                  <div className="absolute inset-0 bg-green-400 rounded-full transform transition-all duration-300 group-hover:scale-110 opacity-20"></div>
                  <img
                    className="h-10 w-auto relative z-10"
                    src="/logo.svg"
                    alt="KenyaFarmers.com"
                  />
                </div>
                <div className="ml-2 overflow-hidden">
                  <span className="text-xl font-bold text-white relative inline-block">
                    Kenya
                    <span className="text-green-400">Farmers</span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 transform transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {getNavLinks().map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 text-gray-200 relative overflow-hidden group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform transition-all duration-300 -translate-x-full group-hover:translate-x-0"></span>
                  <span className="absolute inset-0 bg-green-600 rounded-md transform transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 opacity-0 group-hover:opacity-20"></span>
                </Link>
              ))}
              {isAuthenticated && (
                <>
                  <Link to="/cart" className="px-3 py-2 rounded-md text-sm font-medium relative transition-all duration-300 text-gray-200 hover:text-white group">
                    <span className="sr-only">Cart</span>
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-green-500 transform transition-transform duration-300 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-20"></span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full">
                          {totalItems}
                        </span>
                      )}
                    </div>
                  </Link>
                  <div className="relative ml-3">
                    <div>
                      <button
                        type="button"
                        className="flex text-sm rounded-full focus:outline-none transition-all duration-300 group"
                        id="user-menu-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        <span className="sr-only">Open user menu</span>
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-green-400/50">
                          {user?.name?.charAt(0) || 'U'}
                        </div>
                      </button>
                    </div>
                    {isMenuOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-700 ring-1 ring-green-500 ring-opacity-20 z-50 transition-all duration-200 transform opacity-100 border border-green-400 border-opacity-20">
                        <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 transition-colors duration-200">
                          Dashboard
                        </Link>
                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 transition-colors duration-200">
                          Your Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 transition-colors duration-200"
                        >
                          Sign out
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              {isAuthenticated && (
                <Link to="/cart" className="px-3 py-2 rounded-md text-sm font-medium relative mr-2 transition-all duration-300 text-gray-200 hover:text-white">
                  <span className="sr-only">Cart</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full">
                      {totalItems}
                    </span>
                  )}
                </Link>
              )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none transition-all duration-300"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700 border-l border-r border-b border-green-400 border-opacity-20 rounded-b-lg shadow-xl">
          {getNavLinks().map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated && (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-300"
            >
              Sign out
            </button>
          )}
          <div className="pt-4 pb-2">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-20"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;