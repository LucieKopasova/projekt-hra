import './GameshufflerResult.css';
import { useAnimatedCount } from '../AnimationNumber/animationNumber';

export const GameshufflerResult = ({ resultTarget }) => {
  const startValue = 0;
  const ResultCount = useAnimatedCount(startValue, resultTarget);
  return (
    <>
      <h2>výsledek</h2>
      <div className="gameshufflerResult">
        <p>{ResultCount}</p>
      </div>
    </>
  );
};
