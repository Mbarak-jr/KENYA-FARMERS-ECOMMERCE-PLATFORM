// src/components/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// A reusable card component that can be used for displaying products, farmers, vendors, and transporters
const Card = ({ 
  image, 
  title, 
  subtitle, 
  description, 
  details = [], 
  actionText, 
  actionLink, 
  actionHandler,
  secondaryActionText,
  secondaryActionLink,
  secondaryActionHandler,
  type // 'product', 'farmer', 'vendor', 'transporter'
}) => {
  
  // Different background colors based on the type of card
  const getBgColor = () => {
    switch(type) {
      case 'product': return 'bg-blue-50';
      case 'farmer': return 'bg-green-50';
      case 'vendor': return 'bg-yellow-50';
      case 'transporter': return 'bg-purple-50';
      default: return 'bg-white';
    }
  };

  // Different border colors based on the type of card
  const getBorderColor = () => {
    switch(type) {
      case 'product': return 'border-blue-200';
      case 'farmer': return 'border-green-200';
      case 'vendor': return 'border-yellow-200';
      case 'transporter': return 'border-purple-200';
      default: return 'border-gray-200';
    }
  };

  // Different action button colors based on the type of card
  const getActionColor = () => {
    switch(type) {
      case 'product': return 'bg-blue-600 hover:bg-blue-700';
      case 'farmer': return 'bg-green-600 hover:bg-green-700';
      case 'vendor': return 'bg-yellow-600 hover:bg-yellow-700 text-white';
      case 'transporter': return 'bg-purple-600 hover:bg-purple-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  // Different secondary action button colors
  const getSecondaryActionColor = () => {
    switch(type) {
      case 'product': return 'border-blue-600 text-blue-600 hover:bg-blue-50';
      case 'farmer': return 'border-green-600 text-green-600 hover:bg-green-50';
      case 'vendor': return 'border-yellow-600 text-yellow-600 hover:bg-yellow-50';
      case 'transporter': return 'border-purple-600 text-purple-600 hover:bg-purple-50';
      default: return 'border-gray-600 text-gray-600 hover:bg-gray-50';
    }
  };

  // Render the action button - can be a link or a button with a click handler
  const renderActionButton = () => {
    if (!actionText) return null;
    
    if (actionLink) {
      return (
        <Link 
          to={actionLink} 
          className={`mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${getActionColor()} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
        >
          {actionText}
        </Link>
      );
    }
    
    if (actionHandler) {
      return (
        <button 
          onClick={actionHandler}
          className={`mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${getActionColor()} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
        >
          {actionText}
        </button>
      );
    }
    
    return null;
  };

  // Render the secondary action button
  const renderSecondaryActionButton = () => {
    if (!secondaryActionText) return null;
    
    if (secondaryActionLink) {
      return (
        <Link 
          to={secondaryActionLink} 
          className={`mt-2 ml-2 inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${getSecondaryActionColor()} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
        >
          {secondaryActionText}
        </Link>
      );
    }
    
    if (secondaryActionHandler) {
      return (
        <button 
          onClick={secondaryActionHandler}
          className={`mt-2 ml-2 inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${getSecondaryActionColor()} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
        >
          {secondaryActionText}
        </button>
      );
    }
    
    return null;
  };

  return (
    <div className={`rounded-lg border ${getBorderColor()} ${getBgColor()} overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        
        {description && <p className="mt-2 text-gray-700">{description}</p>}
        
        {details.length > 0 && (
          <div className="mt-3 space-y-1">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 text-gray-500 mr-2">•</div>
                <p className="text-sm text-gray-700">{detail}</p>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-4 flex flex-wrap">
          {renderActionButton()}
          {renderSecondaryActionButton()}
        </div>
      </div>
    </div>
  );
};

export default Card;