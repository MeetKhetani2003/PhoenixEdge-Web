import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import { Button } from '@/components/ui/button';

function ButtonAtom({ label, onClick, variant = 'default', className = '' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <Button
        variant={variant}
        className={`px-4 py-2 rounded-full font-semibold ${className}`}
        onClick={onClick}
      >
        {label}
      </Button>
    </motion.div>
  );
}

ButtonAtom.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  className: PropTypes.string,
};

ButtonAtom.defaultProps = {
  onClick: () => {},
  variant: 'default',
  className: '',
};

export default ButtonAtom;
