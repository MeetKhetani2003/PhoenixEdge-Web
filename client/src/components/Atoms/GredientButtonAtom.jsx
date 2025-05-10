// src/components/Atoms/GradientButtonAtom.jsx
import { motion } from 'framer-motion';

export default function GradientButtonAtom({
  label,
  className,
  onClick,
  variant = 'default',
}) {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 400 } },
    tap: { scale: 0.95, transition: { type: 'spring', stiffness: 400 } },
  };

  return (
    <motion.div
      variants={buttonVariants}
      initial='initial'
      whileHover='hover'
      whileTap='tap'
      className='relative'
    >
      <button
        onClick={onClick}
        className={`bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full text-base sm:text-lg font-semibold relative overflow-hidden ${className}`}
      >
        <motion.span
          className='absolute inset-0 bg-white opacity-0'
          whileTap={{
            opacity: [0.5, 0],
            scale: [0, 2],
            transition: { duration: 0.3 },
          }}
        />
        {label}
      </button>
    </motion.div>
  );
}
