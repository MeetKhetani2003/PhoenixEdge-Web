import React from 'react';
import { Helmet } from 'react-helmet';

import HeroOrganism from '@/components/Organisms/Home/HeroOrganism';

import AboutUsOrganism from '../Organisms/Home/AboutUsOrganism';
import OurServicesOrganism from '../Organisms/Home/OurServicesOrganism';

function HomePage() {
  // Structured Data for JSON-LD (Organization Schema for Phoenix Edge)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Phoenix Edge',
    url: 'https://www.phoenixedge.com', // Replace with your actual domain
    logo: 'https://www.phoenixedge.com/logo.png', // Replace with your logo URL
    description:
      'Phoenix Edge offers premium digital solutions including web development, graphic design, mobile app development, and SEO services to elevate your business.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Digital Avenue',
      addressLocality: 'Tech City',
      addressRegion: 'TC',
      postalCode: '12345',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'Customer Service',
      contactOption: 'TollFree',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.facebook.com/phoenixedge',
      'https://www.twitter.com/phoenixedge',
      'https://www.linkedin.com/company/phoenixedge',
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Phoenix Edge | Web Development, Graphic Design, Mobile Apps & SEO
          Services
        </title>

        <meta
          name='description'
          content='Phoenix Edge offers innovative web development, graphic design, mobile app development, and SEO services to boost your business growth. Ignite your digital success today!'
        />

        <meta
          name='keywords'
          content='web development, graphic design, mobile app development, SEO services, digital solutions, Phoenix Edge, website design, android apps, iOS apps, search engine optimization'
        />

        <meta name='robots' content='index, follow' />

        <link rel='canonical' href='https://www.phoenixedge.com' />

        <meta
          property='og:title'
          content='Phoenix Edge | Digital Solutions for Your Business'
        />
        <meta
          property='og:description'
          content='Discover top-tier web development, graphic design, mobile apps, and SEO services at Phoenix Edge. Elevate your business with tailored digital solutions.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.phoenixedge.com' />
        <meta
          property='og:image'
          content='https://www.phoenixedge.com/og-image.jpg'
        />
        <meta
          property='og:image:alt'
          content='Phoenix Edge Digital Solutions'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Phoenix Edge | Digital Solutions for Your Business'
        />
        <meta
          name='twitter:description'
          content='Discover top-tier web development, graphic design, mobile apps, and SEO services at Phoenix Edge. Elevate your business with tailored digital solutions.'
        />
        <meta
          name='twitter:image'
          content='https://www.phoenixedge.com/og-image.jpg'
        />

        <script type='application/ld+json'>
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <HeroOrganism />
      <AboutUsOrganism />
      <OurServicesOrganism />
    </>
  );
}

export default HomePage;
