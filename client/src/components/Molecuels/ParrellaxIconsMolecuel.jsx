// src/components/Molecules/ParallaxIconsMolecule.jsx
import {
  Code,
  Palette,
  Smartphone,
  Server,
  Search,
  Cloud,
  Brain,
  Shield,
  Layout,
} from 'lucide-react';
import { FaBullseye } from 'react-icons/fa';

import IconTrailMolecule from './IconTrailMolecuel';

export default function ParallaxIconsMolecule({
  mousePos,
  iconVariants,
  trailVariants,
}) {
  const icons = [
    { Icon: Code, position: 'top-10 left-10', delay: 0 },
    { Icon: Palette, position: 'top-20 right-20', delay: 0.2 },
    { Icon: Smartphone, position: 'bottom-20 left-20', delay: 0.4 },
    { Icon: Search, position: 'top-40 left-40', delay: 0.8 },
    { Icon: Brain, position: 'bottom-40 right-40', delay: 1.2 },
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
