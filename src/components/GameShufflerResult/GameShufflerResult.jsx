import './GameShufflerResult.css';
import { useAnimatedCount } from '../AnimationNumber/animationNumber';

export const GameshufflerResult = ({ resultTarget }) => {
  const startValue = 0;
  const resultCount = useAnimatedCount(startValue, resultTarget);
  return (
    <>
      <div className="result-exams">
        <p>{resultCount}</p>
      </div>
    </>
  );
};
