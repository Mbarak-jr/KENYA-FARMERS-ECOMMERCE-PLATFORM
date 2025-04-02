import React from 'react';
import HeroBanner from '../components/marketplace/HeroBanner';
import Categories from '../components/marketplace/Categories';
import FeaturedProducts from '../components/marketplace/FeaturedProducts';
import TopSellers from '../components/marketplace/TopSellers';
import Testimonials from '../components/marketplace/Testimonials';
import BlogSection from '../components/marketplace/BlogSection';
import CTASection from '../components/marketplace/CTASection';

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Categories />
      <FeaturedProducts />
      <TopSellers /> {/* Display best-performing farmers or sellers */}
      <Testimonials /> {/* Customer reviews and feedback */}
      <BlogSection /> {/* Farming tips, market trends, best practices */}
      <CTASection /> {/* Call-to-action, such as 'Sell Your Products' or 'Join Now' */}
    </div>
  );
};

export default HomePage;
