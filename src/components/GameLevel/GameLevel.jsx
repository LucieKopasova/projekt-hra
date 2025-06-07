
import '/global.css';
import gameData from '../../data/gameData.json';
import { Gameschuffler } from '../GameSchuffler/GameSchuffler';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';
import { GameshufflerResult } from '../GameShufflerResult/GameShufflerResult';
import { useEffect, useState } from 'react';
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
    text = ''
  } else if (resultTarget > initBlockerTarget) {
    text = 'přehnal jsi to'
  } else if (resultTarget === initBlockerTarget) {
    text = 'super'
  } else {
    text = 'špatný'
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

      <GameLevelFooter text={text} onGameLevelClick={onGameLevelClick} />

    </>
  )
};