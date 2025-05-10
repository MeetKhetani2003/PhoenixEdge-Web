import PropTypes from 'prop-types';
import React from 'react';

function LinkAtom({
  label,
  href = '#',
  className = 'mr-5 hover:text-gray-600',
  onClick,
}) {
  return (
    <a href={href} className={className} onClick={onClick}>
      {label}
    </a>
  );
}

LinkAtom.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

LinkAtom.defaultProps = {
  onClick: () => {},
};

export default LinkAtom;
