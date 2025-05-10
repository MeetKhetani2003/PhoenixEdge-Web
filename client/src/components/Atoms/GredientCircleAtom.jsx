// src/components/Atoms/GradientCircleAtom.jsx
import { motion } from 'framer-motion';

export default function GradientCircleAtom({
  size = 300,
  gradientId,
  colors = ['#2563EB', '#1E3A8A'],
  opacity = 0.3,
  className,
  variants,
}) {
  return (
    <motion.div className={className} variants={variants} animate='animate'>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.4}
          fill={`url(#${gradientId})`}
          fillOpacity={opacity}
        />
        <defs>
          <linearGradient id={gradientId} x1='30' y1='30' x2='270' y2='270'>
            <stop offset='0%' stopColor={colors[0]} />
            <stop offset='100%' stopColor={colors[1]} />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
