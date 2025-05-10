import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

import GlowAtom from '../Atoms/GlowAtom';
import IconAtom from '../Atoms/IconAtom';
import TextAtom from '../Atoms/TextAtom';

function ServiceCardMolecule({
  icon: Icon,
  title,
  description,
  images = [],
  variants,
  custom,
  imageOnLeft,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: '-50px', once: false });

  // Cycle through images every 3 seconds, pause on hover
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images, isHovered]);

  // Handle click to manually cycle images
  const handleImageClick = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  // Animation variants for content section
  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for individual content elements
  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className='relative bg-white/10 backdrop-blur-md border border-blue-200/40 rounded-xl p-6 sm:p-8 transition-all duration-300 ease-out group hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-500/50 flex flex-col sm:flex-row items-center gap-6 w-full h-[480px] sm:h-[360px]'
      variants={variants}
      custom={custom}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Section */}
      {images.length > 0 && (
        <motion.div
          className={`w-full sm:w-1/2 ${
            imageOnLeft ? 'order-first' : 'order-last'
          } relative rounded-lg overflow-hidden h-full`}
          onClick={handleImageClick}
          variants={imageVariants}
        >
          <motion.img
            src={images[currentImageIndex]}
            alt={title}
            className='w-full h-full object-cover rounded-lg border border-blue-200/30'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            key={currentImageIndex}
          />
        </motion.div>
      )}

      {/* Content Section */}
      <motion.div
        className={`w-full sm:w-1/2 flex flex-col justify-center items-start text-left gap-4 ${
          imageOnLeft ? 'order-last' : 'order-first'
        }`}
        variants={contentVariants}
      >
        {images.length === 0 && (
          <motion.div variants={childVariants}>
            <IconAtom
              Icon={Icon}
              size='6'
              color='text-blue-600 group-hover:text-orange-500 transition-colors duration-300'
              custom={custom}
            />
          </motion.div>
        )}
        <motion.div variants={childVariants}>
          <TextAtom
            tag='h3'
            className='text-xl sm:text-2xl font-semibold text-blue-900 font-unbounded relative'
            style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}
          >
            {title}
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </TextAtom>
        </motion.div>
        <motion.div variants={childVariants}>
          <TextAtom
            tag='p'
            className='text-gray-600 text-sm sm:text-base font-poppins leading-relaxed opacity-85'
          >
            {description}
          </TextAtom>
        </motion.div>
        <motion.div variants={childVariants}>
          <motion.button
            className='flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Service
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </motion.div>
      <GlowAtom className='opacity-30 group-hover:opacity-60 transition-opacity duration-300' />
    </motion.div>
  );
}

export default ServiceCardMolecule;
