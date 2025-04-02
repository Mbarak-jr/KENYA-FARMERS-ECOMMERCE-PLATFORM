import { useNavigate } from 'react-router-dom';

const DashboardNavbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="bg-amber-50 shadow-sm z-10 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            <button className="md:hidden p-2 rounded-md text-amber-700 hover:text-amber-900 hover:bg-amber-100 transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h1 className="ml-2 text-xl font-bold text-amber-800">Agri<span className="text-amber-600">Connect</span></h1>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Notification */}
            <div className="relative">
              <button className="p-2 rounded-full text-amber-700 hover:text-amber-900 hover:bg-amber-100 transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-amber-500 ring-2 ring-amber-50"></span>
            </div>

            {/* User avatar */}
            <div className="h-8 w-8 rounded-full bg-amber-200 flex items-center justify-center border border-amber-300">
              <span className="text-amber-700 font-medium">U</span>
            </div>

            {/* Logout button - Earthy brown color */}
            <button
              onClick={handleLogout}
              className="group relative px-4 py-2 text-sm font-medium text-white bg-amber-700 rounded-md hover:bg-amber-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span className="absolute inset-0 rounded-md bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <div className="flex items-center">
                <svg 
                  className="w-5 h-5 mr-2 text-amber-100" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;