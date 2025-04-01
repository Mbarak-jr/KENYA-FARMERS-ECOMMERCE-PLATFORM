// Example: src/pages/HomePage.jsx
import React from 'react';
import FeaturedProducts from '../components/marketplace/FeaturedProducts';
import HeroBanner from '../components/marketplace/HeroBanner';
import Categories from '../components/marketplace/Categories';

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;