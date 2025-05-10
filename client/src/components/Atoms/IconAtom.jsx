// src/components/Atoms/IconAtom.jsx
export default function IconAtom({
  Icon,
  size = '6', // Smaller default for mobile
  color = 'text-blue-600',
  className = '',
}) {
  return (
    <Icon
      className={`w-${size} h-${size} sm:w-12 sm:h-12 md:w-14 md:h-14 ${color} ${className}`}
    />
  );
}
