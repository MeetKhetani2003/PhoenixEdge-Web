import { motion } from 'framer-motion';

import GlowAtom from '../Atoms/GlowAtom';
import IconAtom from '../Atoms/IconAtom';
import TextAtom from '../Atoms/TextAtom';

function FeatureCardMolecule({ Icon, title, desc, variants, custom }) {
  return (
    <motion.div
      className='relative bg-white/10 backdrop-blur-lg border border-blue-200/50 rounded-2xl p-4 sm:p-6 text-center transition-all duration-500 ease-in-out group hover:shadow-2xl hover:shadow-orange-500/30 hover:border-orange-500/50'
      variants={variants}
      custom={custom}
      whileTap={{ scale: 0.98 }} // Micro-interaction: Scale on click
    >
      <div className='flex justify-center mb-4'>
        <IconAtom
          Icon={Icon}
          size='6'
          color='text-blue-600 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300'
          custom={custom}
        />
      </div>
      <TextAtom
        tag='h3'
        className='text-lg sm:text-xl font-semibold mb-2 text-blue-900 font-poppins relative'
      >
        {title}
        <motion.span
          className='absolute bottom-0 left-0 w-full h-0.5 bg-orange-500'
          initial={{ scaleX: 0 }}
          whileHover={{
            scaleX: 1,
            transition: { duration: 0.3, type: 'spring', bounce: 0.2 },
          }} // Micro-interaction: Underline bounce
        />
      </TextAtom>
      <TextAtom
        tag='p'
        className='text-gray-600 text-sm sm:text-base font-inter'
      >
        {desc}
      </TextAtom>
      <GlowAtom />
    </motion.div>
  );
}

export default FeatureCardMolecule;
