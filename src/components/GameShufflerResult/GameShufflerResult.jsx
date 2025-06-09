import './GameShufflerResult.css';
import { useAnimatedCount } from '../AnimationNumber/AnimationNumber';

export const GameshufflerResult = ({ buttonRef, resultTarget }) => {
  const startValue = 0;
  const resultCount = useAnimatedCount(startValue, resultTarget);
  return (
    <>
      <div ref={buttonRef} className="result-exams">
        <p>{resultTarget === 0 ? '?' : resultCount}</p>
      </div>
    </>
  );
};
