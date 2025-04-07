import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import Features from '../components/Features';
// import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturedProducts />
      <CategorySection />
      {/* <Testimonials /> */}
      <Newsletter />
    </div>
  );
};

export default HomePage;