import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedCollections from '../components/home/FeaturedCollections';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <FeaturedCollections />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
