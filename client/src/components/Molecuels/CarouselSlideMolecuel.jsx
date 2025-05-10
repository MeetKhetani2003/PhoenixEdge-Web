// src/components/Molecules/CarouselSlideMolecule.jsx
import { motion } from 'framer-motion';

import GradientButtonAtom from '../Atoms/GredientButtonAtom';
import TextAtom from '../Atoms/TextAtom';

export default function CarouselSlideMolecule({
  title,
  subtitle,
  description,
  buttonLabel,
  active,
  textVariants,
}) {
  const isMobile = () => window.innerWidth <= 640; // Tailwind's 'sm' breakpoint
  const hoverVariants = isMobile()
    ? { center: { scale: 1 } } // No scaling on mobile
    : { center: { scale: 1.02, transition: { duration: 1 } } };
  return (
    <motion.div
      key={active}
      variants={textVariants}
      initial='enter'
      animate='center'
      exit='exit'
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className='relative'
      whileHover={hoverVariants.center}
    >
      <TextAtom
        tag='h1'
        className='text-3xl sm:text-5xl  font-semibold my-4 sm:my-6 md:my-8 leading-tight text-blue-900'
        variants={{
          initial: { scale: 0.9 },
          animate: { scale: 1 },
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        {title}
      </TextAtom>
      <TextAtom
        tag='h2'
        className='text-xl font-inter sm:text-2xl font-semibold text-blue-900 my-4 sm:my-6 md:my-8'
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
      >
        {subtitle}
      </TextAtom>
      <TextAtom
        tag='p'
        className='text-base font-poppins text-blue-950 my-4 sm:my-6 md:my-8 max-w-md mx-auto'
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 150 }}
      >
        {description}
      </TextAtom>
      <GradientButtonAtom label={buttonLabel} />
    </motion.div>
  );
}
