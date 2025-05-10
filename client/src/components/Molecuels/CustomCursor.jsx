/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Detect hover on interactive elements and text
  useEffect(() => {
    const handleMouseOver = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      const isTextElement =
        ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'].includes(
          tagName
        ) && e.target.textContent.trim().length > 0;

      if (
        tagName === 'button' ||
        tagName === 'a' ||
        e.target.closest('[data-hover]') ||
        isTextElement
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // Cursor variants for animation
  const cursorVariants = {
    default: {
      x: mousePos.x - 6, // Center 12px cursor
      y: mousePos.y - 6,
      scale: 1,
      transition: { type: 'tween', duration: 0.01, ease: 'linear' },
    },
    hover: {
      x: mousePos.x - 12, // Center 24px cursor
      y: mousePos.y - 12,
      scale: 2,
      transition: { type: 'spring', stiffness: 600, damping: 15 },
    },
  };

  return (
    <motion.div
      className='fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50'
      style={{
        backgroundColor: '#2563EB',
        border: '2px solid #f97316',
        mixBlendMode: 'difference',
      }}
      variants={cursorVariants}
      animate={isHovering ? 'hover' : 'default'}
    />
  );
}

export default CustomCursor;
