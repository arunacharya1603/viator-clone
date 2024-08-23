import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Section2 from '../components/Section2';
import TopDestination from '../components/TopDestination';
import TopAttractions from '../components/TopAttractions';
import TopTours from '../components/TopTours';
import TrustpilotSection from '../components/TrustpilotSection';
import WarmDestination from '../components/WarmDestination';
import PopularAttraction from '../components/PopularAttraction';
import PopularCities from '../components/PopularCities';

function HomePage() {
  return (
    <>
      <HeroSection />
      <Features />
      <Section2/>
      <TopDestination/>
      <TopAttractions/>
      <TopTours/>
      <TrustpilotSection/>
      <WarmDestination/>
      <PopularCities/>
      <PopularAttraction/>
    </>
  );
}

export default HomePage;
