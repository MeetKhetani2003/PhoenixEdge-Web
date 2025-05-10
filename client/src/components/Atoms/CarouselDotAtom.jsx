// src/components/Atoms/CarouselDotAtom.jsx
import { motion } from 'framer-motion';

export default function CarouselDotAtom({ isActive, onClick, className }) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full p-0 ${
        isActive ? 'bg-orange-500' : 'bg-blue-300'
      } ${className}`}
      aria-label='Carousel navigation dot'
      whileHover={{
        scale: 1.6,
        rotate: 90,
        backgroundColor: '#f97316',
      }}
      whileTap={{ scale: 0.8 }}
      animate={{ scale: isActive ? 1.4 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    />
  );
}
