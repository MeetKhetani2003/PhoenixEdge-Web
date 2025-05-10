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
  const isInView = useInView(cardRef, { margin: '-100px', once: false });

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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05,
      },
    },
  };

  // Animation variants for individual content elements
  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // Combine card-level and content-level variants
  const combinedVariants = {
    hidden: { ...variants.hidden, opacity: 0, y: 30, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        type: 'spring',
        damping: 20,
        stiffness: 100,
        delay: i * 0.15,
      },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      className='relative bg-white/10 backdrop-blur-lg border border-blue-200/50 rounded-2xl p-6 sm:p-8 transition-all duration-500 ease-in-out group hover:shadow-2xl hover:shadow-orange-500/30 hover:border-orange-500/50 flex flex-col sm:flex-row items-center gap-6'
      variants={combinedVariants}
      custom={custom}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Section */}
      {images.length > 0 && (
        <motion.div
          className={`w-full sm:w-1/2 ${imageOnLeft ? 'order-1' : 'order-2'}`}
          onClick={handleImageClick}
          variants={childVariants}
        >
          <motion.img
            src={images[currentImageIndex]}
            alt={title}
            className='w-full h-48 sm:h-64 object-cover rounded-lg border border-blue-200/30'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            key={currentImageIndex}
          />
        </motion.div>
      )}

      {/* Content Section */}
      <motion.div
        className={`w-full sm:w-1/2 flex flex-col items-start text-left ${
          imageOnLeft ? 'order-2' : 'order-1'
        }`}
        variants={contentVariants}
      >
        {images.length === 0 && (
          <motion.div variants={childVariants}>
            <IconAtom
              Icon={Icon}
              size='6'
              color='text-blue-600 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300'
              custom={custom}
            />
          </motion.div>
        )}
        <motion.div variants={childVariants}>
          <TextAtom
            tag='h3'
            className='text-xl sm:text-2xl font-semibold mb-3 text-blue-900  relative font-unbounded'
          >
            {title}
            <motion.span
              className='absolute bottom-0 left-0 w-full h-0.5 bg-orange-500'
              initial={{ scaleX: 0 }}
              whileHover={{
                scaleX: 1,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
              }}
            />
          </TextAtom>
        </motion.div>
        <motion.div variants={childVariants}>
          <TextAtom
            tag='p'
            className='text-gray-600 text-sm font-poppins sm:text-base font-inter leading-relaxed mb-4'
          >
            {description}
          </TextAtom>
        </motion.div>
        <motion.div variants={childVariants}>
          <motion.button
            className='flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300'
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Service
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </motion.div>
      <GlowAtom />
    </motion.div>
  );
}

export default ServiceCardMolecule;
