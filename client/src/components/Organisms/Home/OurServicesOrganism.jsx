import { motion, useInView } from 'framer-motion';
import { Laptop, Paintbrush, Smartphone, Search } from 'lucide-react';
import { useRef, useEffect } from 'react';

import { android, graphics, seo, web } from '@/assets/assets';
import AnimatedHeadingMolecule from '@/components/Molecuels/AnimatedHeadingMolecuel';
import AnimatedParagraphMolecule from '@/components/Molecuels/AnimatedPAragraphMolecule';
import ServiceCardMolecule from '@/components/Molecuels/ServiceCardMolecuel';

function OurServicesOrganism() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardsRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { margin: '-50px' });
  const isHeadingInView = useInView(headingRef, { margin: '-50px' });
  const isParagraphInView = useInView(paragraphRef, { margin: '-50px' });
  const isCardsInView = useInView(cardsRef, { margin: '-50px' });

  useEffect(() => {
    console.log('isParagraphInView:', isParagraphInView);
  }, [isParagraphInView]);

  const headingVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
        type: 'spring',
        bounce: 0.4,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
        ease: 'easeOut',
        staggerChildren: 0.01,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.7, rotateY: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: 'easeOut',
        type: 'spring',
        bounce: 0.3,
      },
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
    { text: '. ', isStrong: false },
  ];

  return (
    <div
      ref={sectionRef}
      className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-inter bg-white overflow-hidden'
    >
      {/* <div
        className='absolute inset-0 bg-white/40 backdrop-blur-lg z-0'
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%239C92AC" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E')`,
        }}
      /> */}

      <AnimatedHeadingMolecule
        text='Our Services'
        className='relative z-10 text-2xl sm:text-4xl font-bold text-center mb-6 text-blue-900 font-poppins'
        ref={headingRef}
        variants={headingVariants}
      />

      <AnimatedParagraphMolecule
        textSegments={paragraphText}
        className='relative z-20 text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed min-h-[40px]'
        ref={paragraphRef}
        variants={paragraphVariants}
      />

      <motion.div
        ref={cardsRef}
        className='relative z-10 flex flex-col gap-6 mb-16'
        initial='hidden'
        animate={isCardsInView ? 'visible' : 'hidden'}
      >
        {[
          {
            Icon: Laptop,
            title: 'Website Development',
            description:
              'Responsive, fast websites tailored to your business — from corporate to e-commerce platforms. Our SEO-optimized designs ensure higher search engine rankings and increased organic traffic.',
            images: [web, web, web],
          },
          {
            Icon: Paintbrush,
            title: 'Graphic Design',
            description:
              'Captivating logos, branding, and visual content that boost your brand identity. We incorporate SEO-friendly image optimization to enhance visibility and engagement on search engines.',
            images: [graphics, graphics, graphics],
          },
          {
            Icon: Smartphone,
            title: 'Mobile App Development',
            description:
              'Sleek Android apps that enhance customer experience and extend your reach. Built with SEO considerations to improve app store discoverability and user acquisition.',
            images: [android, android, android],
          },
          {
            Icon: Search,
            title: 'SEO & Marketing',
            description:
              'Boost visibility and rankings with expert SEO strategies, keyword research, and analytics. Our comprehensive marketing solutions drive traffic and maximize ROI across digital platforms.',
            images: [seo, seo, seo],
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
            imageOnLeft={index % 2 === 0} // Alternate image position
          />
        ))}
      </motion.div>
    </div>
  );
}

export default OurServicesOrganism;
