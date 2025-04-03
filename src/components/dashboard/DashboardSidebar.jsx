import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const DashboardSidebar = ({ currentUser, isOpen, onClose }) => {
  const location = useLocation();
  
  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path || 
           (path !== '/dashboard' && location.pathname.startsWith(path));
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar container */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col`}>
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-white">
          <Link to="/dashboard" className="flex items-center">
            <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-800">Agri<span className="text-green-600">Connect</span></span>
          </Link>
          <button 
            className="lg:hidden p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Navigation links */}
        <div className="flex-1 px-4 py-4 overflow-y-auto">
          <nav className="space-y-1">
            {/* Dashboard Link */}
            <Link 
              to="/dashboard" 
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${isActive('/dashboard') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200 group`}
            >
              <svg className={`mr-3 h-5 w-5 ${isActive('/dashboard') ? 'text-green-600' : 'text-gray-500 group-hover:text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Dashboard</span>
              {isActive('/dashboard') && (
                <span className="ml-auto h-2 w-2 rounded-full bg-green-600"></span>
              )}
            </Link>

            {/* Products Section */}
            <div className="px-4 pt-6 pb-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Products
              </p>
            </div>
            
            <Link 
              to="/dashboard/products" 
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/products') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200 group`}
            >
              <svg className={`mr-3 h-5 w-5 ${isActive('/dashboard/products') ? 'text-green-600' : 'text-gray-500 group-hover:text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>Browse Products</span>
              {isActive('/dashboard/products') && (
                <span className="ml-auto h-2 w-2 rounded-full bg-green-600"></span>
              )}
            </Link>
            
            <Link 
              to="/dashboard/add-product" 
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/add-product') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200 group`}
            >
              <svg className={`mr-3 h-5 w-5 ${isActive('/dashboard/add-product') ? 'text-green-600' : 'text-gray-500 group-hover:text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add Product</span>
              {isActive('/dashboard/add-product') && (
                <span className="ml-auto h-2 w-2 rounded-full bg-green-600"></span>
              )}
            </Link>

            {/* Orders Section */}
            <div className="px-4 pt-6 pb-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Orders
              </p>
            </div>
            
            <Link 
              to="/dashboard/orders" 
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/orders') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200 group`}
            >
              <svg className={`mr-3 h-5 w-5 ${isActive('/dashboard/orders') ? 'text-green-600' : 'text-gray-500 group-hover:text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>My Orders</span>
              {isActive('/dashboard/orders') && (
                <span className="ml-auto h-2 w-2 rounded-full bg-green-600"></span>
              )}
            </Link>
            
            <Link 
              to="/dashboard/cart" 
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/cart') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200 group`}
            >
              <svg className={`mr-3 h-5 w-5 ${isActive('/dashboard/cart') ? 'text-green-600' : 'text-gray-500 group-hover:text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>My Cart</span>
              {isActive('/dashboard/cart') && (
                <span className="ml-auto h-2 w-2 rounded-full bg-green-600"></span>
              )}
            </Link>

            {/* Transport Section */}
            <div className="px-4 pt-6 pb-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Transport
              </p>
            </div>
            
            <Link 
              to="/dashboard/transport" 
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/transport') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200 group`}
            >
              <svg className={`mr-3 h-5 w-5 ${isActive('/dashboard/transport') ? 'text-green-600' : 'text-gray-500 group-hover:text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <span>Transport Services</span>
              {isActive('/dashboard/transport') && (
                <span className="ml-auto h-2 w-2 rounded-full bg-green-600"></span>
              )}
            </Link>
            
            <Link 
              to="/dashboard/jobs" 
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/jobs') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200 group`}
            >
              <svg className={`mr-3 h-5 w-5 ${isActive('/dashboard/jobs') ? 'text-green-600' : 'text-gray-500 group-hover:text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Available Jobs</span>
              {isActive('/dashboard/jobs') && (
                <span className="ml-auto h-2 w-2 rounded-full bg-green-600"></span>
              )}
            </Link>

            {/* Account Section */}
            <div className="px-4 pt-6 pb-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Account
              </p>
            </div>
            
            <Link 
              to="/dashboard/profile" 
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/profile') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200 group`}
            >
              <svg className={`mr-3 h-5 w-5 ${isActive('/dashboard/profile') ? 'text-green-600' : 'text-gray-500 group-hover:text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Profile Settings</span>
              {isActive('/dashboard/profile') && (
                <span className="ml-auto h-2 w-2 rounded-full bg-green-600"></span>
              )}
            </Link>
            
            <Link 
              to="/dashboard/vehicle" 
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/vehicle') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-200 group`}
            >
              <svg className={`mr-3 h-5 w-5 ${isActive('/dashboard/vehicle') ? 'text-green-600' : 'text-gray-500 group-hover:text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <span>Vehicle Info</span>
              {isActive('/dashboard/vehicle') && (
                <span className="ml-auto h-2 w-2 rounded-full bg-green-600"></span>
              )}
            </Link>
          </nav>
        </div>
        
        {/* User profile footer */}
        <div className="px-4 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium">
              {currentUser?.name?.charAt(0) || currentUser?.email?.charAt(0)}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{currentUser?.name || currentUser?.email}</p>
              <p className="text-xs text-gray-500 capitalize">
                {currentUser?.role || 'user'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;