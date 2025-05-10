import { motion, useInView } from 'framer-motion';
import { Laptop, Paintbrush, Smartphone, Search } from 'lucide-react';
import { useRef, useEffect } from 'react';

import AnimatedHeadingMolecule from '@/components/Molecuels/AnimatedHeadingMolecuel';
import AnimatedParagraphMolecule from '@/components/Molecuels/AnimatedPAragraphMolecule';
import FeatureCardMolecule from '@/components/Molecuels/FeatureCardMolecuel';

function AboutUsOrganism() {
  // Refs for scroll-based animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardsRef = useRef(null);

  // Detect when elements are in view
  const isSectionInView = useInView(sectionRef, { margin: '-50px' });
  const isHeadingInView = useInView(headingRef, { margin: '-50px' });
  const isParagraphInView = useInView(paragraphRef, { margin: '-50px' });
  const isCardsInView = useInView(cardsRef, { margin: '-50px' });

  // Debug: Log paragraph visibility
  useEffect(() => {
    console.log('isParagraphInView:', isParagraphInView);
  }, [isParagraphInView]);

  // Animation variants
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

  // Paragraph text with animated <strong> tags
  const paragraphText = [
    { text: 'Phoenix Edge is a ', isStrong: false },
    { text: 'leading digital solutions company', isStrong: true },
    { text: ' offering premium services in ', isStrong: false },
    { text: 'website development', isStrong: true },
    { text: ', ', isStrong: false },
    { text: 'graphic design', isStrong: true },
    { text: ', ', isStrong: false },
    { text: 'mobile app development', isStrong: true },
    { text: ', and ', isStrong: false },
    { text: 'SEO services', isStrong: true },
    { text: '. We empower businesses to succeed with ', isStrong: false },
    { text: 'innovative, tailored solutions', isStrong: true },
    { text: '.', isStrong: false },
  ];

  return (
    <div
      ref={sectionRef}
      className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-inter bg-white overflow-hidden'
    >
      {/* Semi-transparent overlay with noise texture (uncommented for debugging) */}
      {/* <div
        className='absolute inset-0 bg-white/40 backdrop-blur-lg z-0'
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%239C92AC" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E')`,
        }}
      /> */}

      <AnimatedHeadingMolecule
        text='About Phoenix Edge'
        className='relative z-10 text-2xl sm:text-4xl font-bold text-center mb-6 text-blue-900 font-poppins'
        ref={headingRef}
        variants={headingVariants}
      />

      <AnimatedParagraphMolecule
        textSegments={paragraphText}
        className='relative z-20 text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed'
        ref={paragraphRef}
        variants={paragraphVariants}
      />

      <motion.div
        ref={cardsRef}
        className='relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16'
        initial='hidden'
        animate={isCardsInView ? 'visible' : 'hidden'}
      >
        {[
          {
            Icon: Laptop,
            title: 'Website Development',
            desc: 'Responsive, fast websites tailored to your business — from corporate to e-commerce platforms.',
          },
          {
            Icon: Paintbrush,
            title: 'Graphic Design',
            desc: 'Captivating logos, branding, and visual content that boost your brand identity.',
          },
          {
            Icon: Smartphone,
            title: 'Mobile App Development',
            desc: 'Sleek Android apps that enhance customer experience and extend your reach.',
          },
          {
            Icon: Search,
            title: 'SEO & Marketing',
            desc: 'Boost visibility and rankings with expert SEO strategies and analytics.',
          },
        ].map((feature, index) => (
          <FeatureCardMolecule
            key={index}
            Icon={feature.Icon}
            title={feature.title}
            desc={feature.desc}
            variants={cardVariants}
            custom={index}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default AboutUsOrganism;
