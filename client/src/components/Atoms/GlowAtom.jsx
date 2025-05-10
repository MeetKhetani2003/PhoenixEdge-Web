import { motion } from 'framer-motion';

function GlowAtom() {
  return (
    <motion.div
      className='absolute inset-0 rounded-2xl pointer-events-none'
      initial={{ boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.3)' }}
      whileHover={{
        boxShadow: '0 0 20px 5px rgba(249, 115, 22, 0.5)',
        transition: { duration: 0.4, repeat: Infinity, repeatType: 'reverse' },
      }} // Micro-interaction: Pulsing glow on hover
    />
  );
}

export default GlowAtom;
