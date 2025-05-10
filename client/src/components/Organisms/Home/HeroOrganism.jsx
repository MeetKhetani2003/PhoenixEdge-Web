// src/components/Organisms/HeroOrganism.jsx
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import CarouselDotsMolecule from '@/components/Molecuels/CarouselDotsMolecuel';
import CarouselSlideMolecule from '@/components/Molecuels/CarouselSlideMolecuel';
import GradientCircleAtom from '@/components/Atoms/GredientCircleAtom';
import ParallaxIconsMolecule from '@/components/Molecuels/ParrellaxIconsMolecuel';

function HeroOrganism() {
  const carouselItems = [
    {
      title: (
        <>
          Welcome to <span className='text-orange-500'>Phoenix Edge</span>
        </>
      ),
      subtitle: 'Ignite Your Digital Success',
      description:
        'We empower your business with innovative web development, app development, graphic design, software solutions, and SEO strategies.',
      buttonLabel: 'Explore Our Services',
    },
    {
      title: (
        <>
          Stunning <span className='text-orange-500'>Graphic Design</span>
        </>
      ),
      subtitle: 'Visuals That Captivate',
      description:
        'Elevate your brand with stunning logos, eye-catching brochures, and creative visual content that leaves a lasting impression.',
      buttonLabel: 'Discover Design Services',
    },
    {
      title: (
        <>
          Expert <span className='text-orange-500'>Web Development</span>
        </>
      ),
      subtitle: 'Websites That Engage',
      description:
        'We build responsive, user-friendly websites that engage visitors and drive business growth with seamless functionality.',
      buttonLabel: 'Explore Web Development',
    },
    {
      title: (
        <>
          Custom <span className='text-orange-500'>Android & iOS Apps</span>
        </>
      ),
      subtitle: 'Innovate on Mobile',
      description:
        'Bring your ideas to life with custom Android and iOS apps designed for performance, scalability, and user experience.',
      buttonLabel: 'Start Your App Journey',
    },
    {
      title: (
        <>
          Robust <span className='text-orange-500'>Software Solutions</span>
        </>
      ),
      subtitle: 'Engineered for Excellence',
      description:
        'Streamline your operations with custom software solutions tailored to meet your business challenges and goals.',
      buttonLabel: 'Build Your Software',
    },
    {
      title: (
        <>
          Skyrocket with <span className='text-orange-500'>SEO</span>
        </>
      ),
      subtitle: 'Dominate Search Rankings',
      description:
        'Boost your online visibility and attract more customers with our expert SEO strategies.',
      buttonLabel: 'Upgrade Your SEO',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveIndex((prev) => (prev + 1) % carouselItems.length),
    onSwipedRight: () =>
      setActiveIndex((prev) =>
        prev === 0 ? carouselItems.length - 1 : prev - 1
      ),
    trackMouse: true,
  });
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Text variants for carousel
  const textVariants = {
    enter: { opacity: 0, y: 50, scale: 0.95 },
    center: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.95 },
  };

  // Icon variants with parallax
  const iconVariants = (delay) => ({
    animate: {
      y: [-5 + mousePos.y * 0.3, 5 + mousePos.y * 0.3, -5 + mousePos.y * 0.3],
      x: mousePos.x * 0.3,
      rotate: [-2, 2, -2],
      scale: [1, 1.03, 1],
      opacity: [0.6, 0.8, 0.6],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      },
    },
  });

  const trailVariants = {
    animate: {
      scale: [0.8, 1, 0.8],
      opacity: [0.15, 0.3, 0.15],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.5,
      },
    },
  };

  // Gradient circle variants
  const circleVariants = (delay) => ({
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      },
    },
  });

  // Section variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className='relative min-h-[80vh] flex items-center justify-center bg-white text-blue-900 overflow-hidden'
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
    >
      {/* Background Animated Icons */}
      <ParallaxIconsMolecule
        mousePos={mousePos}
        iconVariants={iconVariants}
        trailVariants={trailVariants}
      />

      {/* Centered Content - Carousel with Gradient Circles */}
      <div
        className='container mx-auto px-6 md:px-12 lg:px-20 relative z-10'
        {...handlers}
      >
        <div className='flex flex-col items-center text-center relative'>
          {/* Gradient Circles */}
          <GradientCircleAtom
            gradientId='blue-grad-1'
            colors={['#2563EB', '#1E3A8A']}
            opacity={0.2}
            size={200}
            className='absolute -top-10 -left-10 sm:-top-20 sm:-left-20 z-5'
            variants={circleVariants(0)}
          />
          <GradientCircleAtom
            gradientId='orange-grad'
            colors={['#f97316', '#c2410c']}
            opacity={0.2}
            size={200}
            className='absolute -bottom-10 -right-10 sm:-bottom-10 sm:-right-10 z-5'
            variants={circleVariants(0.5)}
          />
          <GradientCircleAtom
            gradientId='blue-grad-2'
            colors={['#2563EB', '#1E3A8A']}
            opacity={0.15}
            size={150}
            className='absolute top-10 left-10 sm:top-10 sm:left-10 z-5'
            variants={circleVariants(1.0)}
          />

          {/* Carousel Content */}
          <AnimatePresence mode='wait'>
            <CarouselSlideMolecule
              key={activeIndex}
              title={carouselItems[activeIndex].title}
              subtitle={carouselItems[activeIndex].subtitle}
              description={carouselItems[activeIndex].description}
              buttonLabel={carouselItems[activeIndex].buttonLabel}
              active={activeIndex}
              textVariants={textVariants}
            />
          </AnimatePresence>

          {/* Carousel Navigation Dots */}
          <CarouselDotsMolecule
            count={carouselItems.length}
            activeIndex={activeIndex}
            onDotClick={goToSlide}
          />
        </div>
      </div>
    </motion.section>
  );
}

export default HeroOrganism;
