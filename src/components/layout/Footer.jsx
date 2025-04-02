import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-green-900 to-green-800 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 rounded-full mix-blend-screen opacity-20 transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-300 rounded-full mix-blend-screen opacity-10 transform -translate-x-20 translate-y-20"></div>
      </div>
      
      {/* Grain texture overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=5')] bg-cover opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo and about section */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <div className="relative">
                <img
                  className="h-12 w-12 rounded-full shadow-lg border-2 border-amber-300"
                  src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Kenya Farmers App"
                />
                <div className="absolute inset-0 rounded-full border-2 border-amber-300 animate-pulse opacity-30"></div>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-amber-300 to-green-300 bg-clip-text text-transparent">
                KenyaFarmers
              </span>
            </div>
            <p className="text-green-100 leading-relaxed">
              Empowering Kenya's agricultural community with innovative solutions that connect farmers, buyers, and transporters across the nation.
            </p>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-amber-300 uppercase tracking-wider mb-2">
                Subscribe to our newsletter
              </h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-300 text-gray-800"
                />
                <button className="bg-amber-400 hover:bg-amber-300 text-green-900 px-4 py-2 rounded-r-lg font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-green-700/50 text-amber-200">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Vendors', 'Products', 'Farmers', 'Transporters'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-green-100 hover:text-amber-300 transition-colors flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact us section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-green-700/50 text-amber-200">
              Contact Us
            </h3>
            <ul className="space-y-4 text-green-100">
              <li className="flex items-start">
                <div className="bg-green-800/50 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>support@kenyafarmers.co.ke</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-800/50 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-800/50 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Social and download section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-green-700/50 text-amber-200">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-8">
              {[
                { icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', 
                  name: 'Twitter' },
                { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                  name: 'Instagram' },
                { icon: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z',
                  name: 'Facebook' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className="bg-green-800/50 hover:bg-amber-400/20 p-3 rounded-full transition-colors group"
                  aria-label={social.name}
                >
                  <svg className="h-5 w-5 text-amber-300 group-hover:text-amber-200" viewBox="0 0 24 24">
                    <path fill="currentColor" d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
            
            <h4 className="text-sm font-semibold text-amber-300 uppercase tracking-wider mb-4">
              Download Our App
            </h4>
            <div className="flex flex-col space-y-3">
              <a 
                href="#" 
                className="flex items-center justify-center px-4 py-3 bg-black/70 hover:bg-black/90 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                </svg>
                <span className="text-white">Google Play</span>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center px-4 py-3 bg-black/70 hover:bg-black/90 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-white">App Store</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom copyright */}
        <div className="mt-16 pt-8 border-t border-green-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-green-200/80">
              &copy; {new Date().getFullYear()} KenyaFarmers. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {['Privacy Policy', 'Terms of Service', 'FAQ'].map((item) => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-sm text-green-200/80 hover:text-amber-300 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;