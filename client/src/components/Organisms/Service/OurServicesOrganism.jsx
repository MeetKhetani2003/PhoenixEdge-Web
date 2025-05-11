import {
  Laptop,
  Paintbrush,
  Smartphone,
  Search,
  ArrowRight,
  CheckCircle,
  Users,
  Rocket,
  Award,
  Sparkles,
  Check,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router for dynamic routing

function ServicesPageOrganism() {
  const heroRef = useRef(null);
  const sectionRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const testimonialRef = useRef(null);

  const isHeroInView = useInView(heroRef, { margin: '-50px', once: false });
  const isSectionInView = useInView(sectionRef, {
    margin: '-50px',
    once: false,
  });
  const isWhyChooseUsInView = useInView(whyChooseUsRef, {
    margin: '-50px',
    once: false,
  });
  const isTestimonialInView = useInView(testimonialRef, {
    margin: '-50px',
    once: false,
  });

  // Animation Variants for Hero Section
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const orbitVariants = {
    animate: (i) => ({
      rotate: 360,
      transition: {
        duration: 15 + i * 5,
        repeat: Infinity,
        ease: 'linear',
      },
    }),
  };

  // Animation Variants for Services Section
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
    }),
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3, delay: 0.15, ease: 'easeOut' },
    },
    hover: {
      scale: 1.15,
      rotate: 10,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const iconScaleVariants = {
    hover: {
      scale: [1, 1.25, 1],
      rotate: [0, 15, -15, 0],
      transition: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: i * 0.05, ease: 'easeOut' },
    }),
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: 64, // w-16 = 64px
      transition: { duration: 0.3, delay: 0.15, ease: 'easeOut' },
    },
  };

  const featureVariants = {
    hover: {
      x: 10,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  const buttonScaleVariants = {
    hover: {
      scale: 1.12,
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  // Animation Variants for Other Sections
  const whyChooseUsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
    }),
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
    }),
  };

  // Service Data for Services Section with Added Features
  const services = [
    {
      icon: Laptop,
      title: 'Website Development',
      description:
        'We create responsive, fast, and SEO-optimized websites tailored to your business needs, from corporate sites to e-commerce platforms.',
      features: [
        'Custom responsive design',
        'SEO optimization',
        'Fast load times',
        'E-commerce integration',
      ],
      slug: 'website-development',
    },
    {
      icon: Paintbrush,
      title: 'Graphic Design',
      description:
        'Our team designs captivating logos, branding, and visual content to enhance your brand identity with SEO-friendly optimization.',
      features: [
        'Logo and branding design',
        'Social media graphics',
        'Print and digital assets',
        'SEO-friendly visuals',
      ],
      slug: 'graphic-design',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'We develop sleek Android and iOS apps to improve customer engagement, with SEO considerations for better app store visibility.',
      features: [
        'Cross-platform apps',
        'User-friendly interfaces',
        'App store optimization',
        'Push notifications',
      ],
      slug: 'mobile-app-development',
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description:
        'Boost your online presence with expert search engine optimization (SEO) strategies, keyword research, and analytics-driven marketing.',
      features: [
        'Keyword research',
        'On-page SEO',
        'Content marketing',
        'Analytics tracking',
      ],
      slug: 'seo-marketing',
    },
  ];

  // Why Choose Us Data
  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description:
        'Our team has years of experience delivering high-quality digital solutions across industries.',
    },
    {
      icon: Users,
      title: 'Customer-Centric Approach',
      description:
        'We prioritize your needs, ensuring every project aligns with your business goals.',
    },
    {
      icon: Rocket,
      title: 'Innovative Solutions',
      description:
        'We leverage the latest technologies to provide cutting-edge services that drive growth.',
    },
    {
      icon: CheckCircle,
      title: 'Reliable Support',
      description:
        'Our dedicated support team is always here to assist you, even after project completion.',
    },
  ];

  // Testimonial Data
  const testimonials = [
    {
      name: 'Emily Carter',
      quote:
        'Phoenix Edge transformed our online presence with a stunning website and effective SEO strategies. Highly recommend their services!',
      rating: 5,
    },
    {
      name: 'Michael Brown',
      quote:
        'Their graphic design team created a logo that perfectly captures our brand identity. Amazing work!',
      rating: 4.8,
    },
    {
      name: 'Sarah Johnson',
      quote:
        'The mobile app they developed for us is user-friendly and has significantly improved our customer engagement.',
      rating: 4.9,
    },
    {
      name: 'David Lee',
      quote:
        'Their SEO services skyrocketed our website traffic in just a few months. Truly impressive results!',
      rating: 5,
    },
    {
      name: 'Anna Smith',
      quote:
        'The website they built for us is fast, responsive, and beautifully designed. Couldn’t ask for more!',
      rating: 4.7,
    },
  ];

  // Orbiting Icons for Hero Background Animation
  const orbitIcons = [
    { icon: Laptop, top: '20%', left: '15%', size: 30 },
    { icon: Paintbrush, top: '70%', left: '10%', size: 25 },
    { icon: Smartphone, top: '15%', right: '20%', size: 28 },
    { icon: Search, top: '65%', right: '15%', size: 26 },
  ];

  return (
    <div className='font-inter bg-white'>
      {/* Hero Section (Unchanged) */}
      <motion.section
        ref={heroRef}
        className='relative min-h-[75vh] flex items-center justify-center bg-gradient-to-br from-blue-100 to-orange-50 text-blue-900 overflow-hidden'
        initial='hidden'
        animate={isHeroInView ? 'visible' : 'hidden'}
      >
        <div className='absolute inset-0 z-0'>
          {orbitIcons.map((item, index) => (
            <motion.div
              key={index}
              className='absolute'
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                width: item.size,
                height: item.size,
              }}
              variants={orbitVariants}
              custom={index}
              animate='animate'
            >
              <item.icon className='w-full h-full text-blue-600/30' />
            </motion.div>
          ))}
        </div>

        <div className='container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center'>
          <motion.div
            className='flex justify-center mb-8'
            variants={iconVariants}
            animate='animate'
          >
            <Sparkles className='w-16 h-16 text-orange-500' />
          </motion.div>
          <motion.h1
            className='text-4xl sm:text-5xl font-bold mb-4 font-poppins'
            variants={heroVariants}
          >
            Unlock Your Business Potential with{' '}
            <span className='text-orange-500'>Our Services</span>
          </motion.h1>
          <motion.p
            className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed'
            variants={paragraphVariants}
          >
            At Phoenix Edge, we provide innovative digital solutions to help
            your business grow, from stunning designs to powerful marketing
            strategies.
          </motion.p>
          <motion.div variants={buttonVariants}>
            <Link to='#services'>
              <button className='px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 font-poppins'>
                Discover Our Services
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Updated Services Section with Larger Service Cards */}
      <section
        id='services'
        ref={sectionRef}
        className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'
      >
        <motion.h2
          className='text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-900 font-poppins'
          variants={headingVariants}
          initial='hidden'
          animate={isSectionInView ? 'visible' : 'hidden'}
        >
          Our Services
        </motion.h2>

        <motion.p
          className='text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed'
          variants={paragraphVariants}
          initial='hidden'
          animate={isSectionInView ? 'visible' : 'hidden'}
        >
          Discover our{' '}
          <span className='font-semibold'>premium digital solutions</span>{' '}
          designed to elevate your business. We offer tailored services in web
          development, graphic design, mobile apps, and SEO.
        </motion.p>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-10'
          initial='hidden'
          animate={isSectionInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className='relative flex flex-col items-center bg-white/20 backdrop-blur-xl border border-blue-200/30 rounded-2xl p-6 shadow-md transition-all duration-500 ease-out group max-h-[600px]'
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                borderColor: '#2563eb', // blue-600
              }}
              variants={cardVariants}
              custom={index}
              whileHover={{
                scale: 1.04,
                y: -5,
                boxShadow: '0 16px 32px rgba(0, 0, 0, 0.2)',
                borderColor: '#f97316', // orange-500
              }}
            >
              {/* Section Number Badge */}
              <motion.div
                className='absolute top-6 right-6 bg-blue-600 text-white font-bold text-base w-10 h-10 flex items-center justify-center rounded-full shadow-lg'
                variants={badgeVariants}
                initial='hidden'
                animate='visible'
                whileHover='hover'
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>

              {/* Icon */}
              <motion.div
                className='p-5 rounded-full bg-blue-600 shadow-xl mb-6'
                whileHover='hover'
                variants={iconScaleVariants}
              >
                <service.icon className='w-14 h-14 text-white' />
              </motion.div>

              {/* Content */}
              <div className='flex-1 text-center'>
                <motion.h3
                  className='text-2xl font-extrabold text-blue-900 font-unbounded mb-1 tracking-tight'
                  variants={contentVariants}
                  custom={0}
                  initial='hidden'
                  animate='visible'
                  whileHover={{
                    y: -4,
                    color: '#f97316', // orange-500
                    transition: { duration: 0.2, ease: 'easeInOut' },
                  }}
                >
                  {service.title}
                </motion.h3>
                <motion.div
                  className='w-16 h-0.5 bg-orange-500 mb-1 mx-auto'
                  variants={underlineVariants}
                  initial='hidden'
                  animate='visible'
                />
                <motion.p
                  className='text-base text-gray-700 font-poppins leading-relaxed mb-2 px-6'
                  variants={contentVariants}
                  custom={1}
                  initial='hidden'
                  animate='visible'
                >
                  {service.description}
                </motion.p>
                <motion.ul
                  className='list-none space-y-4 text-gray-700 font-poppins mb-5'
                  variants={contentVariants}
                  custom={2}
                  initial='hidden'
                  animate='visible'
                >
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className='flex items-center justify-center gap-2 text-base'
                      whileHover='hover'
                      variants={featureVariants}
                    >
                      <Check className='w-5 h-3 text-blue-600 group-hover:text-orange-500 transition-colors duration-300' />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  variants={contentVariants}
                  custom={3}
                  initial='hidden'
                  animate='visible'
                >
                  <Link to={`/services/${service.slug}`}>
                    <motion.button
                      className='flex items-center gap-3 px-8 py-3 bg-orange-500 text-white rounded-lg font-poppins shadow-lg hover:bg-orange-600 transition-colors duration-300 mx-auto text-base'
                      whileHover='hover'
                      variants={buttonScaleVariants}
                    >
                      Explore More
                      <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us Section (Unchanged) */}
      <section
        ref={whyChooseUsRef}
        className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-blue-50'
      >
        <motion.h2
          className='text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-900 font-poppins'
          variants={headingVariants}
          initial='hidden'
          animate={isWhyChooseUsInView ? 'visible' : 'hidden'}
        >
          Why Choose Us
        </motion.h2>

        <motion.p
          className='text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed'
          variants={paragraphVariants}
          initial='hidden'
          animate={isWhyChooseUsInView ? 'visible' : 'hidden'}
        >
          At Phoenix Edge, we’re committed to delivering exceptional digital
          solutions that drive results. Here’s why our clients trust us.
        </motion.p>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'
          initial='hidden'
          animate={isWhyChooseUsInView ? 'visible' : 'hidden'}
        >
          {whyChooseUs.map((reason, index) => (
            <motion.div
              key={index}
              className='bg-white/10 backdrop-blur-md border border-blue-200/40 rounded-xl p-6 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/20'
              variants={whyChooseUsVariants}
              custom={index}
            >
              <div className='flex flex-col items-center text-center gap-4'>
                <reason.icon className='w-10 h-10 text-blue-600' />
                <h3 className='text-lg font-semibold text-blue-900 font-unbounded'>
                  {reason.title}
                </h3>
                <p className='text-gray-600 text-sm sm:text-base font-poppins leading-relaxed'>
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonial Section (Unchanged) */}
      <section
        ref={testimonialRef}
        className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'
      >
        <motion.h2
          className='text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-900 font-poppins'
          variants={headingVariants}
          initial='hidden'
          animate={isTestimonialInView ? 'visible' : 'hidden'}
        >
          What Our Customers Say
        </motion.h2>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
          initial='hidden'
          animate={isTestimonialInView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className='bg-white/10 backdrop-blur-md border border-blue-200/40 rounded-xl p-6 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/20'
              variants={testimonialVariants}
              custom={index}
            >
              <p className='text-gray-600 text-sm sm:text-base font-poppins leading-relaxed mb-4'>
                "{testimonial.quote}"
              </p>
              <div className='flex items-center gap-3'>
                <div>
                  <h4 className='text-blue-900 font-semibold font-unbounded'>
                    {testimonial.name}
                  </h4>
                  <p className='text-gray-500 text-sm'>
                    {testimonial.rating} / 5 ★
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default ServicesPageOrganism;
