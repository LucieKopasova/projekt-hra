import './GameShufflerResult.css';
import { useAnimatedCount } from '../AnimationNumber/AnimationNumber';

export const GameshufflerResult = ({ resultTarget }) => {
  const startValue = 0;
  const resultCount = useAnimatedCount(startValue, resultTarget);
  return (
    <>
      <div className="result-exams">
        <p>{resultTarget === 0 ? '?' : resultCount}</p>
      </div>
    </>
  );
};
