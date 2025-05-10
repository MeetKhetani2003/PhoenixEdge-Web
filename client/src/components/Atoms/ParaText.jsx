import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function TextAtom({
  char,
  isStrong = false,
  index,
  className = '',
  variants = letterVariants,
}) {
  // Debug: Log character rendering
  console.log(
    `Rendering TextAtom: char=${char}, isStrong=${isStrong}, index=${index}`
  );

  return (
    <motion.span
      className={`${
        isStrong ? 'font-semibold text-orange-500 relative' : ''
      } ${className}`}
      variants={variants}
      initial='hidden'
      animate='visible'
    >
      {char}
      {isStrong && char !== ' ' && <UnderlineAtom index={index} />}
    </motion.span>
  );
}
