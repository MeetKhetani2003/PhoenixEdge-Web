import { motion, useInView } from 'framer-motion';
import { Laptop, Paintbrush, Smartphone, Search } from 'lucide-react';
import { useRef } from 'react';

import { android, graphics, seo, web } from '@/assets/assets';
import AnimatedHeadingMolecule from '@/components/Molecuels/AnimatedHeadingMolecuel';
import AnimatedParagraphMolecule from '@/components/Molecuels/AnimatedParagraphMolecule';
import ServiceCardMolecule from '@/components/Molecuels/ServiceCardMolecuel';

function OurServicesOrganism() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, {
    margin: '-50px',
    once: false,
  });

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
    }),
  };

  const paragraphText = [
    { text: 'Explore our ', isStrong: false },
    { text: 'premium digital services', isStrong: true },
    { text: ' designed to elevate your business. From ', isStrong: false },
    { text: 'website development', isStrong: true },
    { text: ' and ', isStrong: false },
    { text: 'graphic design', isStrong: true },
    { text: ' to ', isStrong: false },
    { text: 'mobile apps', isStrong: true },
    { text: ' and ', isStrong: false },
    { text: 'SEO', isStrong: true },
    { text: ', we deliver ', isStrong: false },
    { text: 'tailored solutions', isStrong: true },
    { text: '.', isStrong: false },
  ];

  return (
    <section
      ref={sectionRef}
      className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 font-inter bg-white'
    >
      <AnimatedHeadingMolecule
        text='Our Services'
        className='text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-900 font-poppins'
        variants={headingVariants}
        isInView={isSectionInView}
      />

      <AnimatedParagraphMolecule
        textSegments={paragraphText}
        className='text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed'
        variants={paragraphVariants}
        isInView={isSectionInView}
      />

      <motion.div
        className='grid grid-cols-1 gap-6 sm:gap-8'
        initial='hidden'
        animate={isSectionInView ? 'visible' : 'hidden'}
      >
        {[
          {
            Icon: Laptop,
            title: 'Website Development',
            description:
              'Responsive, fast websites tailored to your business — from corporate to e-commerce platforms. Our SEO-optimized designs ensure higher search engine rankings and increased organic traffic.',
            images: [web],
            imageOnLeft: true,
          },
          {
            Icon: Paintbrush,
            title: 'Graphic Design',
            description:
              'Captivating logos, branding, and visual content that boost your brand identity. We incorporate SEO-friendly image optimization to enhance visibility and engagement on search engines.',
            images: [graphics],
            imageOnLeft: false,
          },
          {
            Icon: Smartphone,
            title: 'Mobile App Development',
            description:
              'Sleek Android apps that enhance customer experience and extend your reach. Built with SEO considerations to improve app store discoverability and user acquisition.',
            images: [android],
            imageOnLeft: true,
          },
          {
            Icon: Search,
            title: 'SEO & Marketing',
            description:
              'Boost visibility and rankings with expert SEO strategies, keyword research, and analytics. Our comprehensive marketing solutions drive traffic and maximize ROI across digital platforms.',
            images: [seo],
            imageOnLeft: false,
          },
        ].map((service, index) => (
          <ServiceCardMolecule
            key={index}
            icon={service.Icon}
            title={service.title}
            description={service.description}
            images={service.images}
            variants={cardVariants}
            custom={index}
            imageOnLeft={service.imageOnLeft}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default OurServicesOrganism;
