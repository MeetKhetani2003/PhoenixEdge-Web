// src/components/Molecules/IconTrailMolecule.jsx
import { motion } from 'framer-motion';

import IconAtom from '../Atoms/IconAtom';

export default function IconTrailMolecule({
  Icon,
  size = '8 sm:12',
  color = 'text-blue-600',
  trailColor = 'text-orange-500',
  position,
  delay,
  iconVariants,
  trailVariants,
}) {
  return (
    <motion.div
      className={`absolute ${position}`}
      variants={iconVariants(delay)}
      animate='animate'
    >
      <motion.div
        className='absolute'
        variants={trailVariants}
        animate='animate'
      >
        <IconAtom Icon={Icon} size={size} color={trailColor} />
      </motion.div>
      <IconAtom Icon={Icon} size={size} color={color} />
    </motion.div>
  );
}
