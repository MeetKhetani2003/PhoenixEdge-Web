import React from 'react';
import { Helmet } from 'react-helmet';

import ServicesPageOrganism from '../Organisms/Service/OurServicesOrganism';

function ServicePage() {
  // Structured Data for JSON-LD (Service Page with Review Schema for Testimonials)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Services',
    provider: {
      '@type': 'Organization',
      name: 'Phoenix Edge',
      url: 'https://www.phoenixedge.com',
      logo: 'https://www.phoenixedge.com/logo.png', // Replace with your logo URL
    },
    description:
      'Phoenix Edge offers premium digital services including web development, graphic design, mobile app development, and SEO & marketing. Discover why customers choose us and read their testimonials.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Website Development' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Graphic Design' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Mobile App Development' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'SEO & Marketing' },
        },
      ],
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Emily Carter' },
        reviewBody:
          'Phoenix Edge transformed our online presence with a stunning website and effective SEO strategies. Highly recommend their services!',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Michael Brown' },
        reviewBody:
          'Their graphic design team created a logo that perfectly captures our brand identity. Amazing work!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '4.8',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Sarah Johnson' },
        reviewBody:
          'The mobile app they developed for us is user-friendly and has significantly improved our customer engagement.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '4.9',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'David Lee' },
        reviewBody:
          'Their SEO services skyrocketed our website traffic in just a few months. Truly impressive results!',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Anna Smith' },
        reviewBody:
          'The website they built for us is fast, responsive, and beautifully designed. Couldn’t ask for more!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '4.7',
          bestRating: '5',
        },
      },
    ],
  };

  return (
    <div>
      {/* SEO Metadata using react-helmet */}
      <Helmet>
        {/* Page Title */}
        <title>
          Our Services | Phoenix Edge - Web Development, Graphic Design, Mobile
          Apps & SEO
        </title>

        {/* Meta Description */}
        <meta
          name='description'
          content='Discover Phoenix Edge’s digital services through our captivating hero section, leading into detailed offerings like web development, graphic design, mobile app development, and SEO & marketing. Learn why customers choose us and read testimonials.'
        />

        {/* Meta Keywords */}
        <meta
          name='keywords'
          content='services, web development, graphic design, mobile app development, SEO services, digital solutions, Phoenix Edge, website design, android apps, iOS apps, search engine optimization, why choose us, customer testimonials'
        />

        {/* Robots Meta Tag */}
        <meta name='robots' content='index, follow' />

        {/* Canonical URL */}
        <link rel='canonical' href='https://www.phoenixedge.com/services' />

        {/* Open Graph Tags for Social Media */}
        <meta
          property='og:title'
          content='Our Services | Phoenix Edge - Digital Solutions'
        />
        <meta
          property='og:description'
          content='Discover Phoenix Edge’s digital services: web development, graphic design, mobile apps, and SEO. Learn why customers choose us and read testimonials.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.phoenixedge.com/services'
        />
        <meta
          property='og:image'
          content='https://www.phoenixedge.com/services-og-image.jpg'
        />
        <meta property='og:image:alt' content='Phoenix Edge Services' />

        {/* Twitter Card Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Our Services | Phoenix Edge - Digital Solutions'
        />
        <meta
          name='twitter:description'
          content='Discover Phoenix Edge’s digital services: web development, graphic design, mobile apps, and SEO. Learn why customers choose us and read testimonials.'
        />
        <meta
          name='twitter:image'
          content='https://www.phoenixedge.com/services-og-image.jpg'
        />

        {/* Structured Data (JSON-LD) */}
        <script type='application/ld+json'>
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Page Content */}
      <ServicesPageOrganism />
    </div>
  );
}

export default ServicePage;
