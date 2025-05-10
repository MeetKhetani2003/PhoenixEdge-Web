// src/components/Atoms/IconAtom.jsx
export default function IconAtom({
  Icon,
  size = '12',
  color = 'text-blue-600',
  className,
}) {
  return <Icon className={`w-${size} h-${size} ${color} ${className}`} />;
}
