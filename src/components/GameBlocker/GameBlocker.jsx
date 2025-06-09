import './GameBlocker.css';
import { useState, useEffect, useRef } from 'react';
import { useAnimatedCount } from '../AnimationNumber/AnimationNumber';

export const GameBlocker = ({ blockerTarget }) => {
  const previousValueRef = useRef(blockerTarget);
  const [fromValue, setFromValue] = useState(blockerTarget);

  useEffect(() => {
    if (blockerTarget !== previousValueRef.current) {
      setFromValue(previousValueRef.current);
      previousValueRef.current = blockerTarget;
    }
  }, [blockerTarget]);

  const animatedCount = useAnimatedCount(fromValue, blockerTarget);
  const shouldAnimate = blockerTarget !== fromValue;
  const resultCount = shouldAnimate ? animatedCount : blockerTarget;

  return (
    <div
      className={
        blockerTarget === 0
          ? 'result-blocker result-blocker--zero'
          : blockerTarget < 0
          ? 'result-blocker result-blocker--negative'
          : 'result-blocker result-blocker'
      }
    >
      {resultCount}
    </div>
  );
};
