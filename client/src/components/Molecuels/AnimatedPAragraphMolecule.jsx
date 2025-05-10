import { motion } from 'framer-motion';

import TextAtom from '../Atoms/ParaText';

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Reduced for faster visibility
      delay: 0.1, // Reduced delay
      ease: 'easeOut',
      staggerChildren: 0.01, // Slightly faster stagger
    },
  },
};

function AnimatedParagraphMolecule({
  textSegments,
  className,
  ref,
  variants = paragraphVariants,
}) {
  // Debug: Log text segments
  console.log('Rendering AnimatedParagraphMolecule:', textSegments);

  return (
    <motion.p
      ref={ref}
      className={`${className} min-h-[40px]`} // Added min-height
      variants={variants}
      initial='hidden'
      animate='visible'
    >
      {textSegments.map((segment, segmentIndex) =>
        segment.text
          .split('')
          .map((char, charIndex) => (
            <TextAtom
              key={`${segmentIndex}-${charIndex}`}
              char={char}
              isStrong={segment.isStrong}
              index={segmentIndex + charIndex}
            />
          ))
      )}
    </motion.p>
  );
}

export default AnimatedParagraphMolecule;
