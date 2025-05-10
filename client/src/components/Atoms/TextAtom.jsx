// src/components/Atoms/TextAtom.jsx
import { motion } from 'framer-motion';

export default function TextAtom({ children, tag = 'p', className, variants }) {
  const Tag = motion[tag] || motion.p;
  return (
    <Tag
      className={className}
      variants={variants}
      initial='initial'
      animate='animate'
      transition={variants ? undefined : { type: 'spring', stiffness: 150 }}
    >
      {children}
    </Tag>
  );
}
