import { Link } from 'react-router-dom';

const DashboardSidebar = ({ currentUser }) => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-amber-800 text-amber-50 shadow-lg">
        {/* Header with subtle texture */}
        <div className="flex items-center justify-center h-16 px-4 border-b border-amber-700 bg-gradient-to-r from-amber-700 to-amber-800">
          <span className="text-xl font-bold tracking-wide">KenyaFarmers</span>
        </div>
        
        {/* Navigation links */}
        <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto bg-amber-800/95">
          <DashboardNavLinks />
        </div>
        
        {/* User profile footer */}
        <div className="px-4 py-4 border-t border-amber-700 bg-amber-900/80">
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-sm font-medium">{currentUser?.name}</p>
              <p className="text-xs text-amber-200 capitalize">
                {currentUser?.role || 'user'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardNavLinks = () => {
  return (
    <nav className="flex-1 space-y-1">
      {/* Dashboard Link */}
      <Link 
        to="/dashboard" 
        className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-amber-700/50 text-amber-50 hover:bg-amber-700 transition-all duration-200 group"
      >
        <DashboardIcon path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        <span className="group-hover:translate-x-1 transition-transform">Dashboard</span>
      </Link>

      {/* Products Section */}
      <div className="px-4 pt-6 pb-1">
        <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
          Products
        </p>
      </div>
      
      <Link 
        to="/dashboard/products" 
        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-amber-100 hover:bg-amber-700/40 hover:text-white transition-colors duration-200 group"
      >
        <DashboardIcon path="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        <span className="group-hover:translate-x-1 transition-transform">Browse Products</span>
      </Link>
      
      <Link 
        to="/dashboard/add-product" 
        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-amber-100 hover:bg-amber-700/40 hover:text-white transition-colors duration-200 group"
      >
        <DashboardIcon path="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <span className="group-hover:translate-x-1 transition-transform">Add Product</span>
      </Link>

      {/* Orders Section */}
      <div className="px-4 pt-6 pb-1">
        <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
          Orders
        </p>
      </div>
      
      <Link 
        to="/dashboard/orders" 
        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-amber-100 hover:bg-amber-700/40 hover:text-white transition-colors duration-200 group"
      >
        <DashboardIcon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        <span className="group-hover:translate-x-1 transition-transform">My Orders</span>
      </Link>
      
      <Link 
        to="/dashboard/cart" 
        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-amber-100 hover:bg-amber-700/40 hover:text-white transition-colors duration-200 group"
      >
        <DashboardIcon path="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        <span className="group-hover:translate-x-1 transition-transform">My Cart</span>
      </Link>

      {/* Transport Section */}
      <div className="px-4 pt-6 pb-1">
        <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
          Transport
        </p>
      </div>
      
      <Link 
        to="/dashboard/transport" 
        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-amber-100 hover:bg-amber-700/40 hover:text-white transition-colors duration-200 group"
      >
        <DashboardIcon path="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        <span className="group-hover:translate-x-1 transition-transform">Transport Services</span>
      </Link>
      
      <Link 
        to="/dashboard/jobs" 
        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-amber-100 hover:bg-amber-700/40 hover:text-white transition-colors duration-200 group"
      >
        <DashboardIcon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        <span className="group-hover:translate-x-1 transition-transform">Available Jobs</span>
      </Link>

      {/* Account Section */}
      <div className="px-4 pt-6 pb-1">
        <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
          Account
        </p>
      </div>
      
      <Link 
        to="/dashboard/profile" 
        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-amber-100 hover:bg-amber-700/40 hover:text-white transition-colors duration-200 group"
      >
        <DashboardIcon path="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        <span className="group-hover:translate-x-1 transition-transform">Profile Settings</span>
      </Link>
      
      <Link 
        to="/dashboard/vehicle" 
        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-amber-100 hover:bg-amber-700/40 hover:text-white transition-colors duration-200 group"
      >
        <DashboardIcon path="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        <span className="group-hover:translate-x-1 transition-transform">Vehicle Info</span>
      </Link>
    </nav>
  );
};

const DashboardIcon = ({ path }) => (
  <svg 
    className="mr-3 h-5 w-5 text-amber-300" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d={path} 
    />
  </svg>
);

export default DashboardSidebar;