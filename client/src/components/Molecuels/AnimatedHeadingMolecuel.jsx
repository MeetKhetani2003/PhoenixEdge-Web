import TextAtom from '../atoms/TextAtom';
import UnderlineAtom from '../atoms/UnderlineAtom';

function AnimatedHeadingMolecule({ text, className, ref, variants }) {
  return (
    <TextAtom tag='h1' className={className} variants={variants} ref={ref}>
      {text}
      {/* <UnderlineAtom /> */}
    </TextAtom>
  );
}

export default AnimatedHeadingMolecule;
