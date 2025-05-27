import { motion, useInView } from 'framer-motion';
import { Laptop, Paintbrush, Smartphone, Search } from 'lucide-react';
import { useRef, useEffect } from 'react';

import AnimatedHeadingMolecule from '@/components/Molecuels/AnimatedHeadingMolecuel';
import AnimatedParagraphMolecule from '@/components/Molecuels/AnimatedPAragraphMolecule';
import FeatureCardMolecule from '@/components/Molecuels/FeatureCardMolecuel';

function AboutUsOrganism() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, {
    margin: '-150px', // Trigger earlier
    once: true, // Play only once
    amount: 0.2, // Trigger when 20% of the section is visible
  });

  // Debug: Log visibility
  useEffect(() => {
    console.log('isSectionInView:', isSectionInView);
  }, [isSectionInView]);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : {
            duration: 0.7, // Reduced for snappier feel
            ease: [0.25, 0.1, 0.25, 1], // Custom easing
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
      transition: prefersReducedMotion
        ? { duration: 0 }
        : {
            duration: 0.5, // Reduced for snappier feel
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
            // Removed staggerChildren as the effect was minimal
          },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 20, y: 40 }, // Added y for parallax effect
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : {
            duration: 0.6, // Reduced for snappier feel
            delay: i * 0.15, // Reduced stagger delay
            ease: [0.25, 0.1, 0.25, 1],
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
      style={{ willChange: 'transform, opacity' }} // Performance optimization
    >
      {/* Semi-transparent overlay with noise texture (uncomment if needed) */}
      {/* <div
        className='absolute inset-0 bg-white/40 backdrop-blur-lg z-0'
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%239C92AC" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E')`,
        }}
      /> */}

      <AnimatedHeadingMolecule
        text='About Phoenix Edge'
        className='relative z-10 text-2xl sm:text-4xl font-bold text-center mb-6 text-blue-900 font-poppins'
        variants={headingVariants}
        isInView={isSectionInView} // Use single isSectionInView
      />

      <AnimatedParagraphMolecule
        textSegments={paragraphText}
        className='relative z-20 text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed'
        variants={paragraphVariants}
        isInView={isSectionInView} // Use single isSectionInView
      />

      <motion.div
        className='relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16'
        initial='hidden'
        animate={isSectionInView ? 'visible' : 'hidden'}
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
