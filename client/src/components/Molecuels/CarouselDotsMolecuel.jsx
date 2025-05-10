import CarouselDotAtom from '../Atoms/CarouselDotAtom';

// src/components/Molecules/CarouselDotsMolecule.jsx
export default function CarouselDotsMolecule({
  count,
  activeIndex,
  onDotClick,
}) {
  return (
    <div className='flex justify-center mt-6 sm:mt-8 space-x-4 sm:space-x-3'>
      {Array.from({ length: count }).map((_, index) => (
        <CarouselDotAtom
          key={index}
          isActive={index === activeIndex}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
}
