// src/components/Molecules/ParallaxIconsMolecule.jsx
import {
  Globe,
  Palette,
  Smartphone,
  Server,
  Search,
  Cloud,
  PenTool,
  BarChart,
  Layout,
} from 'lucide-react';
import { FaAndroid, FaApple, FaReact, FaBullseye } from 'react-icons/fa';

import IconTrailMolecule from './IconTrailMolecuel';

export default function ParallaxIconsMolecule({
  mousePos,
  iconVariants,
  trailVariants,
}) {
  const icons = [
    { Icon: FaAndroid, position: 'top-10 left-10', delay: 0 }, // Android Development
    { Icon: FaApple, position: 'bottom-20 left-10', delay: 0.4 }, // iOS Development
    { Icon: FaReact, position: 'top-20 right-20', delay: 0.2 }, // React Native Development
    { Icon: Cloud, position: 'bottom-30 right-40', delay: 1.2 }, // Online Software Development
    { Icon: Layout, position: 'bottom-80 right-80', delay: 2.8 }, // Web Development (secondary)
    { Icon: Globe, position: 'top-40 left-40', delay: 0.8 }, // Web Development
    { Icon: Palette, position: 'top-60 left-60', delay: 1.6 }, // Graphic Designing
    { Icon: Server, position: 'top-80 left-80', delay: 2.4 }, // Online Software Development (secondary)
    { Icon: Search, position: 'bottom-60 right-60', delay: 2 }, // SEO Optimization
  ];

  return (
    <div className='absolute inset-0 z-0'>
      {icons.map(({ Icon, position, delay }, index) => (
        <IconTrailMolecule
          key={index}
          Icon={Icon}
          position={position}
          delay={delay}
          iconVariants={iconVariants}
          trailVariants={trailVariants}
        />
      ))}
    </div>
  );
}
