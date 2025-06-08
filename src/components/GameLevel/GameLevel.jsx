
import '/global.css';
import './GameLevel.css';
import gameData from '../../data/gameData.json';
import { Gameschuffler } from '../GameSchuffler/GameSchuffler';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';
import { GameshufflerResult } from '../GameShufflerResult/GameShufflerResult';
import { useState } from 'react';
import { GameBlocker } from '../GameBlocker/GameBlocker';
import { text } from 'framer-motion/client';


export const GameLevel = ({ onCalculation, onGameLevelClick, initBlockerTarget, initBlockerBackground, gameDataObject }) => {

  const [resultTarget, setResultTarget] = useState(0);
  const [blockerTarget, setBlockerTarget] = useState(initBlockerTarget);

  const handleClick = (exampleValue) => {
    setResultTarget(exampleValue);
    onCalculation(exampleValue)

    setBlockerTarget((oldBlockerTarget) => oldBlockerTarget - Number(exampleValue))


  };

   console.log(initBlockerTarget)
  console.log(resultTarget)


  let text ='' 
  if (resultTarget === 0) {
    text = gameDataObject.story
  } else if (resultTarget > initBlockerTarget) {
    text = gameDataObject.fail
  } else if (resultTarget === initBlockerTarget) {
    text = gameDataObject.success
  } else {
    text = gameDataObject.again
  }


  return (
    <>

      <img src={initBlockerBackground} />

      <div className="gamelevel-game">

        <GameshufflerResult resultTarget={resultTarget} />

        <GameBlocker blockerTarget={blockerTarget} />

        <Gameschuffler
          onExams={handleClick}
          initBlockerTarget={initBlockerTarget}
          blockerTarget={blockerTarget}
        />
        <section className="blocker"></section>

      </div>

      <GameLevelFooter 
      text={text} 
      onGameLevelClick={onGameLevelClick}
      blockerTarget = {blockerTarget}
      />

    </>
  )
};