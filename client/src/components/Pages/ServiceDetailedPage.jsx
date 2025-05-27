import {
  Sparkles,
  CheckCircle,
  Code,
  Palette,
  Smartphone,
  BarChart,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

// Reusable Atoms
const ServiceTitle = ({ level = 'h2', children, className }) => {
  const Tag = level;
  return <Tag className={className}>{children}</Tag>;
};

const ServiceText = ({ children, className }) => (
  <p className={className}>{children}</p>
);

const ServiceIcon = ({ icon: Icon, className, size }) => (
  <Icon className={className} size={size} />
);

// Service Data (unchanged)
const services = [
  {
    slug: 'website-development',
    title: 'Website Development',
    description: 'Responsive, fast, SEO-optimized websites for your business.',
    detailedDescription:
      'We build high-performance, user-friendly websites optimized for engagement and SEO.',
    workflow: [
      {
        step: 'Discovery',
        description:
          'We gather requirements and understand your business goals.',
        icon: CheckCircle,
        sideIcon: Code,
      },
      {
        step: 'Design',
        description:
          'Our team creates wireframes and designs tailored to your brand.',
        icon: CheckCircle,
        sideIcon: Palette,
      },
      {
        step: 'Development',
        description:
          'We build a responsive, SEO-optimized website with modern tech.',
        icon: CheckCircle,
        sideIcon: Code,
      },
      {
        step: 'Testing',
        description:
          'Rigorous testing ensures functionality across devices and browsers.',
        icon: CheckCircle,
        sideIcon: CheckCircle,
      },
      {
        step: 'Launch & Support',
        description: 'We launch your site and provide ongoing support.',
        icon: CheckCircle,
        sideIcon: Sparkles,
      },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    description: 'Captivating logos and visuals to elevate your brand.',
    detailedDescription:
      'Our designs create stunning visuals that strengthen your brand identity.',
    workflow: [
      {
        step: 'Consultation',
        description: 'We discuss your vision and branding needs.',
        icon: CheckCircle,
        sideIcon: Palette,
      },
      {
        step: 'Concept Creation',
        description: 'Our designers brainstorm and sketch initial concepts.',
        icon: CheckCircle,
        sideIcon: Palette,
      },
      {
        step: 'Design Development',
        description: 'We refine concepts into polished visuals.',
        icon: CheckCircle,
        sideIcon: Palette,
      },
      {
        step: 'Feedback',
        description: 'You provide feedback, and we make necessary revisions.',
        icon: CheckCircle,
        sideIcon: CheckCircle,
      },
      {
        step: 'Delivery',
        description: 'Final designs are delivered in all required formats.',
        icon: CheckCircle,
        sideIcon: Sparkles,
      },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Sleek Android and iOS apps for customer engagement.',
    detailedDescription:
      'We develop intuitive, high-performance apps with user-centric design.',
    workflow: [
      {
        step: 'Ideation',
        description: 'We define the app’s purpose and features with you.',
        icon: CheckCircle,
        sideIcon: Smartphone,
      },
      {
        step: 'Prototyping',
        description: 'We create prototypes to visualize the app’s flow.',
        icon: CheckCircle,
        sideIcon: Palette,
      },
      {
        step: 'Development',
        description: 'Our team builds the app for both Android and iOS.',
        icon: CheckCircle,
        sideIcon: Code,
      },
      {
        step: 'Testing',
        description: 'We test the app for performance and usability.',
        icon: CheckCircle,
        sideIcon: CheckCircle,
      },
      {
        step: 'Launch & Updates',
        description: 'We launch the app and provide regular updates.',
        icon: CheckCircle,
        sideIcon: Sparkles,
      },
    ],
  },
  {
    slug: 'seo-marketing',
    title: 'SEO & Marketing',
    description: 'Expert SEO and marketing to boost your online presence.',
    detailedDescription:
      'We enhance your search rankings with keyword research and data-driven strategies.',
    workflow: [
      {
        step: 'Analysis',
        description: 'We analyze your current online presence and competitors.',
        icon: CheckCircle,
        sideIcon: BarChart,
      },
      {
        step: 'Strategy',
        description: 'We develop a tailored SEO and marketing strategy.',
        icon: CheckCircle,
        sideIcon: Palette,
      },
      {
        step: 'Implementation',
        description: 'We execute on-page and off-page SEO techniques.',
        icon: CheckCircle,
        sideIcon: Code,
      },
      {
        step: 'Monitoring',
        description: 'We track performance with analytics tools.',
        icon: CheckCircle,
        sideIcon: BarChart,
      },
      {
        step: 'Optimization',
        description: 'We refine strategies based on data insights.',
        icon: CheckCircle,
        sideIcon: Sparkles,
      },
    ],
  },
];

// Animation Variants
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const workflowCardVariants = {
  hidden: { opacity: 0, scale: 0.95, x: (i) => (i % 2 === 0 ? -50 : 50) },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.6, // Increased delay for clearer sequence
      ease: [0.4, 0, 0.2, 1],
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.02,
    boxShadow: '0 10px 20px rgba(30, 58, 138, 0.15)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.6 + 0.2,
      type: 'spring',
      bounce: 0.5,
    },
  }),
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.5, ease: 'easeInOut', delay: 0.5 },
  },
};

const tooltipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.1 },
  },
};

const sideIconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 0.3,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.6 + 0.3,
      ease: 'easeOut',
    },
  }),
  hover: {
    opacity: 0.5,
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};

const ServiceDetailedPage = () => {
  const { service } = useParams();
  const heroRef = useRef(null);
  const workflowRef = useRef(null);
  const isHeroInView = useInView(heroRef, { margin: '-100px', once: true });
  const isWorkflowInView = useInView(workflowRef, {
    margin: '-100px',
    once: true,
  });

  const selectedService = services.find((s) => s.slug === service) || {
    title: 'Service Not Found',
    description: 'The requested service could not be found.',
    detailedDescription: '',
    workflow: [],
  };

  // Group workflow steps into pairs for two cards per row
  const workflowPairs = [];
  for (let i = 0; i < selectedService.workflow.length; i += 2) {
    workflowPairs.push(selectedService.workflow.slice(i, i + 2));
  }

  return (
    <div className='font-inter bg-white'>
      {/* Hero Section (Unchanged) */}
      <motion.section
        ref={heroRef}
        className='relative py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden'
        initial='hidden'
        animate={isHeroInView ? 'visible' : 'hidden'}
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Background Shapes */}
        <div className='absolute inset-0'>
          <svg
            className='absolute top-0 left-0 w-48 h-48 opacity-10'
            viewBox='0 0 200 200'
            fill='none'
          >
            <circle
              cx='100'
              cy='100'
              r='80'
              stroke='#1E3A8A'
              strokeWidth='20'
            />
          </svg>
          <svg
            className='absolute bottom-0 right-0 w-64 h-64 opacity-10'
            viewBox='0 0 200 200'
            fill='none'
          >
            <path
              d='M50 50 L150 50 L100 150 Z'
              stroke='#F97316'
              strokeWidth='20'
            />
          </svg>
        </div>

        <div className='container mx-auto px-6 md:px-12 lg:px-16 relative z-10'>
          <motion.div
            className='flex justify-center mb-6'
            variants={contentVariants}
            custom={0}
          >
            <ServiceIcon
              icon={Sparkles}
              className='w-12 h-12'
              style={{ color: '#F97316' }}
            />
          </motion.div>
          <motion.div
            variants={heroVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            <ServiceTitle
              level='h1'
              className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 font-poppins tracking-tight'
            >
              <span className='relative' style={{ color: '#1E3A8A' }}>
                {selectedService.title}
                <span
                  className='absolute -bottom-2 left-0 w-full h-1 rounded-full'
                  style={{ backgroundColor: '#F97316' }}
                />
              </span>
            </ServiceTitle>
          </motion.div>
          <motion.div variants={contentVariants} custom={1}>
            <ServiceText className='text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 leading-relaxed font-poppins'>
              {selectedService.description}
            </ServiceText>
          </motion.div>
          <motion.div variants={contentVariants} custom={2}>
            <ServiceText
              className='text-base sm:text-lg font-poppins leading-relaxed max-w-2xl mx-auto text-center'
              style={{ color: '#1E3A8A' }}
            >
              {selectedService.detailedDescription}
            </ServiceText>
          </motion.div>
        </div>
      </motion.section>

      {/* Workflow Section (Two Columns) */}
      <motion.section
        ref={workflowRef}
        className='relative py-20 bg-white'
        style={{ color: '#1E3A8A' }}
        initial='hidden'
        animate={isWorkflowInView ? 'visible' : 'hidden'}
      >
        <div className='container mx-auto px-6 md:px-12 lg:px-16 relative z-10'>
          <motion.div variants={contentVariants} custom={0}>
            <ServiceTitle
              level='h2'
              className='text-3xl sm:text-4xl font-bold text-center mb-20 font-poppins tracking-tight'
              style={{ color: '#1E3A8A' }}
            >
              Our Workflow
            </ServiceTitle>
          </motion.div>

          <div className='max-w-5xl mx-auto relative'>
            {/* Timeline Background */}
            <div
              className='absolute left-1/2 -translate-x-1/2 top-0 w-2 h-full rounded-full'
              style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)' }}
            />
            {/* Timeline Path */}
            <svg
              className='absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full'
              style={{ overflow: 'visible' }}
              viewBox='0 0 100 1000'
              preserveAspectRatio='none'
            >
              <motion.path
                d='M50,0 V1000'
                fill='none'
                stroke='#1E3A8A'
                strokeWidth='4'
                strokeDasharray='8,4'
                variants={pathVariants}
                initial='hidden'
                animate={isWorkflowInView ? 'visible' : 'hidden'}
              />
            </svg>

            {workflowPairs.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16 relative'
              >
                {/* Side Icons for the Row */}
                <motion.div
                  className='absolute hidden md:block left-0 top-1/2 -translate-y-1/2'
                  variants={sideIconVariants}
                  custom={pairIndex * 2}
                  initial='hidden'
                  animate={isWorkflowInView ? 'visible' : 'hidden'}
                  whileHover='hover'
                >
                  <ServiceIcon
                    icon={pair[0].sideIcon}
                    className='w-16 h-16'
                    style={{ color: '#1E3A8A' }}
                  />
                </motion.div>
                {pair.length > 1 && (
                  <motion.div
                    className='absolute hidden md:block right-0 top-1/2 -translate-y-1/2'
                    variants={sideIconVariants}
                    custom={pairIndex * 2 + 1}
                    initial='hidden'
                    animate={isWorkflowInView ? 'visible' : 'hidden'}
                    whileHover='hover'
                  >
                    <ServiceIcon
                      icon={pair[1].sideIcon}
                      className='w-16 h-16'
                      style={{ color: '#1E3A8A' }}
                    />
                  </motion.div>
                )}

                {pair.map((step, index) => {
                  const globalIndex = pairIndex * 2 + index;
                  return (
                    <div key={globalIndex} className='relative'>
                      <motion.div
                        className='p-6 bg-white rounded-lg border border-gray-200 shadow-sm group transition-all duration-300'
                        variants={workflowCardVariants}
                        custom={globalIndex}
                        whileHover='hover'
                        initial='hidden'
                        animate={isWorkflowInView ? 'visible' : 'hidden'}
                      >
                        {/* Step Number */}
                        <div
                          className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full text-white font-bold text-lg ${
                            index === 0
                              ? 'right-[-20px] md:right-[-20px]'
                              : 'left-[-20px] md:left-[-20px]'
                          }`}
                          style={{
                            backgroundColor: '#F97316',
                          }}
                        >
                          {globalIndex + 1}
                        </div>

                        {/* Step Icon */}
                        <motion.div
                          className='flex-shrink-0 relative mb-4'
                          variants={iconVariants}
                          custom={globalIndex}
                          whileHover='hover'
                          initial='hidden'
                          animate={isWorkflowInView ? 'visible' : 'hidden'}
                        >
                          <div
                            className='w-12 h-12 flex items-center justify-center rounded-full text-white'
                            style={{ backgroundColor: '#1E3A8A' }}
                          >
                            <ServiceIcon
                              icon={step.icon}
                              size={24}
                              className='relative z-10'
                            />
                          </div>
                        </motion.div>

                        {/* Step Content */}
                        <div>
                          <ServiceTitle
                            level='h3'
                            className='text-lg font-semibold font-poppins mb-2'
                            style={{ color: '#1E3A8A' }}
                          >
                            {step.step}
                          </ServiceTitle>
                          <ServiceText className='text-gray-600 font-poppins leading-relaxed text-sm sm:text-base'>
                            {step.description}
                          </ServiceText>
                          {/* Tooltip on Hover */}
                          <motion.div
                            className='absolute hidden group-hover:block text-white text-sm rounded-lg p-3 w-52 shadow-lg -top-12 left-1/2 -translate-x-1/2 z-20'
                            style={{ backgroundColor: '#1E3A8A' }}
                            variants={tooltipVariants}
                            initial='hidden'
                            animate='visible'
                          >
                            {step.description}
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServiceDetailedPage;
