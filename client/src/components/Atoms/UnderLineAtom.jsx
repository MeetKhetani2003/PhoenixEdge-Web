import { motion } from 'framer-motion';

function UnderlineAtom({ index }) {
  return (
    <motion.span
      className='absolute bottom-0 left-0 w-full h-0.5 bg-orange-500'
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: 0.3,
        delay: index ? index * 0.02 : 0.5,
      }}
    />
  );
}

export default UnderlineAtom;
