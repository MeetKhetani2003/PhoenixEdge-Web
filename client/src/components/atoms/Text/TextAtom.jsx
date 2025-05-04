import React from 'react'
import PropTypes from 'prop-types'

function TextAtom({text='hello world!', className='text-base text-gray-500'}) {
  return (
    <p className={className}>{text}</p>
  )
}

TextAtom.propTypes = {
    text: PropTypes.string.isRequired,
}

export default TextAtom
