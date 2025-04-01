import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setShowSuccess(true);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">KenyaFarmers.com</h3>
            <p className="text-gray-300">
              Connecting farmers, buyers, transporters, and agricultural suppliers
              across Kenya for a more efficient agricultural ecosystem.
            </p>
            <div className="mt-6">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Subscribe to newsletter"
                  className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && showSuccess && (
                <div className="mt-2 text-green-400 transition-all duration-300">
                  Thanks for subscribing!
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Marketplaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace/produce" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Produce Marketplace
                </Link>
              </li>
              <li>
                <Link to="/marketplace/agri-inputs" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Agri-Inputs Marketplace
                </Link>
              </li>
              <li>
                <Link to="/transport" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Transport Services
                </Link>
              </li>
              <li>
                <Link to="/marketplace/equipment" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Farm Equipment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/weather" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Weather Forecasts
                </Link>
              </li>
              <li>
                <Link to="/resources/crop-advice" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Crop Advice
                </Link>
              </li>
              <li>
                <Link to="/resources/market-trends" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Market Trends
                </Link>
              </li>
              <li>
                <Link to="/resources/tutorials" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Platform Tutorials
                </Link>
              </li>
              <li>
                <Link to="/resources/financing" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Financing Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@kenyafarmers.com
              </li>
              <li className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +254 700 123 456
              </li>
              <li className="flex items-center text-gray-300 mt-4">
                <a href="https://wa.me/254700123456" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01c0 .01-.01.03-.02.03H5.26m13.49 0H16v2h4.17m0 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
                WhatsApp Support
              </li>
              <li className="flex items-center text-gray-300 mt-4">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Nairobi, Kenya
                </a>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.905 3.517 9.027 8.29 9.876V15.76h-2.49v-3.76h2.49v-2.77c0-3.32 2.18-5.16 5.314-5.16 1.553 0 3.09.116 3.435.167v3.61h-2.07c-2.075 0-2.656 1.265-2.656 2.556v3.07h4.226l-.68 3.76h-3.546v6.116c4.773-.849 8.29-4.971 8.29-9.876z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.643 4.937c-.883.39-1.83.654-2.828.776 1.015-.607 1.794-1.56 2.163-2.697-.951.56-2.003.98-3.127 1.206-1.019-.942-2.459-1.523-4.003-1.523-3.028 0-5.476 2.448-5.476 5.476 0 .428.045.846.13 1.247-4.549-.228-8.589-2.409-11.285-5.722-.471.81-.741 1.752-.741 2.753 0 1.9 1.03 3.574 2.592 4.547-.952-.03-1.85-.291-2.635-.73v.07c0 2.654 1.89 4.868 4.396 5.373-.46.124-.947.19-1.441.19-.35 0-.69-.034-1.025-.098.694 2.167 2.712 3.748 5.089 3.79-1.868 1.463-4.22 2.335-6.777 2.335-.44 0-.88-.027-1.315-.078 2.441 1.56 5.347 2.467 8.466 2.467 10.155 0 15.735-8.414 15.735-15.676 0-.24-.006-.48-.017-.72-.015.001-.031.003-.046.004z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400">
            &copy; {currentYear} KenyaFarmers.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
