import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import DashboardSidebar from './DashboardSidebar';
import DashboardNavbar from './DashboardNavbar';
import DashboardFooter from './DashboardFooter'; // Optional
import UserMetrics from './UserMetrics'; // Assuming you'll move this too

const DashboardLayout = () => {
  const { user: currentUser, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!currentUser) {
        navigate('/login');
      }
      setAuthChecked(true);
    }
  }, [currentUser, navigate, loading, logout]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading || !authChecked) {
    return <DashboardLoadingScreen />;
  }

  if (!currentUser) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar currentUser={currentUser} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardNavbar onLogout={handleLogout} />
        
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <UserMetrics userRole={currentUser?.role || 'user'} />
            <Outlet />
          </div>
        </main>
        
        {/* Optional footer */}
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
          <div className="w-4 h-4 rounded-full bg-green-600 animate-pulse"></div>
          <div className="w-4 h-4 rounded-full bg-green-600 animate-pulse delay-75"></div>
          <div className="w-4 h-4 rounded-full bg-green-600 animate-pulse delay-150"></div>
        </div>
        <p className="text-gray-600">Loading your dashboard...</p>
        <p className="text-sm text-gray-500 mt-2">Please wait while we verify your credentials</p>
      </div>
    </div>
  </div>
);

export default DashboardLayout;