import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar"; // Import Navbar component
import Footer from "../layout/Footer"; // Import Footer component

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar /> {/* Navbar component in the header */}
      </header>
      <main className="flex-grow mt-15 w-full"> {/* Ensure full width */}
        <Outlet /> {/* The content of the child routes will be rendered here */}
      </main>
      <footer className="w-full">
        <Footer /> {/* Footer component */}
      </footer>
    </div>
  );
};

export default Layout;
