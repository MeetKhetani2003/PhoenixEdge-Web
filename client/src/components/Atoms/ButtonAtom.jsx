import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "@/components/ui/button"


function ButtonAtom({ label, onClick,variant="outline", className = 'bg-blue-900 text-amber-50' }) {
  return (
    <Button variant={variant}  className={className} onClick={onClick}>
      {label}
    </Button>
  );
}

ButtonAtom.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.string,
};

ButtonAtom.defaultProps = {
  onClick: () => {},
  className: 'btn-default',
};

export default ButtonAtom;

