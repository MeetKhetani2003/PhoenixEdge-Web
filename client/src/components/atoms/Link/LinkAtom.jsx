import React from 'react';
import PropTypes from 'prop-types';

function LinkAtom({ label, href = '#', className = 'mr-5 hover:text-gray-600' }) {
  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}

LinkAtom.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default LinkAtom;