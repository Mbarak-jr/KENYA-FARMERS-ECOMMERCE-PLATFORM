import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaChartBar, FaSignOutAlt, FaBoxes } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white min-h-screen p-5">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/dashboard" className="flex items-center gap-2 p-3 bg-blue-700 rounded-md">
            <FaChartBar /> Dashboard
          </Link>
          <Link to="/users" className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded-md">
            <FaUser /> Users
          </Link>
          <Link to="/products" className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded-md">
            <FaBoxes /> Products
          </Link>
          <Link to="/orders" className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded-md">
            <FaShoppingCart /> Orders
          </Link>
          <button className="flex items-center gap-2 p-3 mt-6 bg-red-600 hover:bg-red-700 rounded-md w-full">
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-md p-5 rounded-lg text-center">
            <FaUser className="text-blue-500 text-3xl mx-auto" />
            <h2 className="text-xl font-semibold mt-2">Total Users</h2>
            <p className="text-gray-600 text-lg">1,245</p>
          </div>

          <div className="bg-white shadow-md p-5 rounded-lg text-center">
            <FaBoxes className="text-green-500 text-3xl mx-auto" />
            <h2 className="text-xl font-semibold mt-2">Products</h2>
            <p className="text-gray-600 text-lg">250</p>
          </div>

          <div className="bg-white shadow-md p-5 rounded-lg text-center">
            <FaShoppingCart className="text-red-500 text-3xl mx-auto" />
            <h2 className="text-xl font-semibold mt-2">Orders</h2>
            <p className="text-gray-600 text-lg">500</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700">Recent Activity</h2>
          <div className="bg-white shadow-md p-5 rounded-lg mt-4">
            <ul className="space-y-3">
              <li className="border-b pb-2">John Doe purchased "Organic Apples" - 5 mins ago</li>
              <li className="border-b pb-2">New user registered - 10 mins ago</li>
              <li className="border-b pb-2">Product "Fresh Milk" updated - 30 mins ago</li>
              <li>Order #2545 delivered successfully - 1 hour ago</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
