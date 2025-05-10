import React from 'react';

import HeroOrganism from '@/components/Organisms/Home/HeroOrganism';

import AboutUsOrganism from '../Organisms/Home/AboutUsOrganism';
import OurServicesOrganism from '../Organisms/Home/OurServicesOrganism';

function HomePage() {
  return (
    <>
      <HeroOrganism />
      <AboutUsOrganism />
      <OurServicesOrganism />
    </>
  );
}

export default HomePage;
