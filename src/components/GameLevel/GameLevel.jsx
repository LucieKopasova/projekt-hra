import '/global.css';
import './GameLevel.css';
import { Gameshuffler } from '../GameShuffler/GameShuffler';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';
import { GameshufflerResult } from '../GameShufflerResult/GameShufflerResult';
import { useState, useEffect } from 'react';
import { GameBlocker } from '../GameBlocker/GameBlocker';

export const GameLevel = ({
  handleMove,
  buttonRef,
  onCalculation,
  onGameLevelClick,
  initBlockerTarget,
  initBlockerBackground,
  gameDataObject,
}) => {
  const [resultTarget, setResultTarget] = useState(0);
  const [blockerTarget, setBlockerTarget] = useState(initBlockerTarget);
  const [delayedBlockerTarget, setDelayedBlockerTarget] =
    useState(initBlockerTarget);
  const [delayedArrow, setDelayedArrow] = useState(initBlockerTarget);

  const handleClick = (exampleValue) => {
    setResultTarget(exampleValue);
    onCalculation(exampleValue);

    setBlockerTarget(
      (oldBlockerTarget) => oldBlockerTarget - Number(exampleValue),
    );
  };

  let text = '';
  if (resultTarget === 0) {
    text = gameDataObject.story;
  } else if (resultTarget > initBlockerTarget) {
    text = gameDataObject.fail;
  } else if (resultTarget === initBlockerTarget) {
    text = gameDataObject.success;
  } else {
    text = gameDataObject.again;
  }

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setDelayedBlockerTarget(blockerTarget);
    }, 1300);

    const timeout2 = setTimeout(() => {
      setDelayedArrow(blockerTarget);
    }, 2500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [blockerTarget]);

  return (
    <>
      <img src={initBlockerBackground} />

      <div className="gamelevel-game">
        <GameshufflerResult buttonRef={buttonRef} resultTarget={resultTarget} />

        <GameBlocker
          blockerTarget={delayedBlockerTarget}
          startValueBlocker={initBlockerTarget}
        />

        <Gameshuffler
          handleMove={handleMove}
          onExams={handleClick}
          initBlockerTarget={initBlockerTarget}
          blockerTarget={blockerTarget}
        />
        <section className="blocker"></section>
      </div>

      <GameLevelFooter
        text={text}
        onGameLevelClick={onGameLevelClick}
        blockerTarget={delayedArrow}
      />
    </>
  );
};
