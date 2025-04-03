import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import DashboardSidebar from './DashboardSidebar';
import DashboardNavbar from './DashboardNavbar';
import DashboardFooter from './DashboardFooter';
import UserMetrics from './UserMetrics';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardLayout = () => {
  const { user: currentUser, logout, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [authChecked, setAuthChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!currentUser) {
        navigate('/login', { state: { from: location.pathname }, replace: true });
      }
      setAuthChecked(true);
    }
  }, [currentUser, navigate, loading, location]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading || !authChecked) {
    return <DashboardLoadingScreen />;
  }

  if (!currentUser) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Toast Container for notifications */}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      {/* Sidebar - now with responsive behavior */}
      <DashboardSidebar 
        currentUser={currentUser} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
      />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar with toggle button for mobile */}
        <DashboardNavbar 
          onLogout={handleLogout} 
          onToggleSidebar={toggleSidebar} 
          user={currentUser}
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Only show UserMetrics on dashboard home */}
            {location.pathname === '/dashboard' && (
              <UserMetrics userRole={currentUser?.role || 'user'} />
            )}
            <Outlet context={{ currentUser }} />
          </div>
        </main>
        
        {/* Footer */}
        <DashboardFooter />
      </div>
    </div>
  );
};

const DashboardLoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="p-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <div className="flex space-x-2 mb-4">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-4 h-4 rounded-full bg-green-600 animate-pulse"
              style={{ animationDelay: `${i * 75}ms` }}
            />
          ))}
        </div>
        <p className="text-gray-600">Loading your dashboard...</p>
        <p className="text-sm text-gray-500 mt-2">Please wait while we verify your credentials</p>
      </div>
    </div>
  </div>
);

export default DashboardLayout;