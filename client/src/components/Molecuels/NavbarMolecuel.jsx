import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ButtonAtom from '@/components/Atoms/ButtonAtom';
import LinkAtom from '@/components/Atoms/LinkAtom';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/service', label: 'Service' },
  { href: '/team', label: 'Team' },
];

function NavbarMolecule() {
  console.log('NavbarMolecule rendered');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  // Button and icon glow effect
  const glowVariants = {
    hover: {
      boxShadow: '0 0 15px rgba(249, 115, 22, 0.7)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      className='sticky top-0 left-0 w-full bg-white/95 text-blue-900 py-2 px-3 sm:py-4 sm:px-6 md:py-5 md:px-12 lg:px-16 backdrop-blur-md shadow-lg z-50'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className='container mx-auto relative z-10'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center flex-shrink-0'>
            <Link to='/' className='flex items-center'>
              <motion.span
                className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-blue-900'
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                  delay: 0.1,
                }}
              >
                Phoenix <span className='text-orange-500'>Edge</span>
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center flex-grow justify-center'>
            <div className='flex items-center space-x-5 md:space-x-8'>
              {navLinks.map((link) => (
                <div key={link.label} className='relative group flex-shrink-0'>
                  <LinkAtom
                    label={link.label}
                    href={link.href}
                    className={`text-sm  font-semibold font-poppins   transition-colors duration-200 ${
                      activeLink === link.href
                        ? 'text-orange-500'
                        : 'text-blue-950 font-poppins hover:text-orange-500'
                    }`}
                    onClick={() => setActiveLink(link.href)}
                  />
                  <motion.div
                    className='absolute -bottom-1 left-0 w-full h-[3px] bg-orange-500 rounded-full'
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: activeLink === link.href ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className='flex items-center space-x-1.5 sm:space-x-6 md:space-x-8 lg:space-x-10'>
            <motion.button
              className='hidden sm:block text-blue-950 hover:text-orange-500 transition-colors duration-200'
              variants={glowVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap='tap'
            >
              <Search className='h-6 w-6' />
            </motion.button>
            <motion.div
              variants={glowVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <ButtonAtom
                label='Get Started'
                variant='default'
                className='bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 rounded-full shadow-md transition-all duration-300'
              />
            </motion.div>
            <motion.button
              className='md:hidden text-blue-950 hover:text-orange-500 transition-colors duration-200'
              onClick={toggleMobileMenu}
              variants={glowVariants}
              whileHover={{ scale: 1.2 }}
              whileTap='tap'
            >
              {isMobileMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className='md:hidden mt-3 bg-white/80 backdrop-blur-xl rounded-2xl p-3 sm:p-5 shadow-lg border border-white/20'
              variants={mobileMenuVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  className={`block py-3 px-4 sm:py-3.5 sm:px-5 text-blue-950 font-semibold text-sm sm:text-base rounded-lg transition-all duration-200 ${
                    activeLink === link.href
                      ? 'bg-orange-100 text-orange-500 shadow-sm border-b-2 border-orange-500'
                      : 'hover:bg-orange-50 hover:text-orange-500 hover:shadow-md hover:border-b-2 border-orange-500'
                  }`}
                  variants={mobileLinkVariants}
                >
                  <Link
                    to={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className='block w-full'
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default NavbarMolecule;
