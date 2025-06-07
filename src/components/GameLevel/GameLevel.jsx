
import '/global.css';
import gameData from '../../data/gameData.json';
import { Gameschuffler } from '../GameSchuffler/GameSchuffler';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';
import { GameshufflerResult } from '../GameShufflerResult/GameShufflerResult';
import { useEffect, useState } from 'react';
import { GameBlocker } from '../GameBlocker/GameBlocker';


export const GameLevel = ({onCalculation, onGameLevelClick, initBlockerTarget, initBlockerBackground}) => {

  const [resultTarget, setResultTarget] = useState('0');
  const [blockerTarget, setBlockerTarget] = useState(initBlockerTarget);

  const handleClick = (exampleValue) => {
    setResultTarget(exampleValue);
    onCalculation(exampleValue)

    setBlockerTarget((oldBlockerTarget) => oldBlockerTarget - Number(exampleValue))
    
  };

  
  return (
    <>

      <img src={initBlockerBackground} />

      <div className="gamelevel-game">

        <GameshufflerResult resultTarget={resultTarget}/>
        
        <GameBlocker blockerTarget={blockerTarget}/>

        <Gameschuffler onExams={handleClick}/>
        <section className="blocker"></section>

        </div>

        <GameLevelFooter onGameLevelClick={onGameLevelClick} />

      </>
      )
};