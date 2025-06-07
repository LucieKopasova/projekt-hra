
import '/global.css';
import gameData from '../../data/gameData.json';
import { Gameschuffler } from '../GameSchuffler/GameSchuffler';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';
import { GameshufflerResult } from '../GameShufflerResult/GameShufflerResult';
import { useState } from 'react';
import { GameBlocker } from '../GameBlocker/GameBlocker';


export const GameLevel = ({onCalculation}) => {

  const [resultTarget, setResultTarget] = useState('0');
  const [blockerTarget, setBlockerTarget] = useState('10')

  const handleClick = (exampleValue) => {
    setResultTarget(exampleValue);
    onCalculation(exampleValue)

    setBlockerTarget((oldBlockerTarget) => oldBlockerTarget - Number(exampleValue))
    
  };
console.log(blockerTarget)
  return (
    <>

      <img src={gameData[0].actionImage} />

      <div className="gamelevel-game">

        <GameshufflerResult resultTarget={resultTarget}/>
        
        {/* <div className="result-blocker">{blockerTarget}</div> */}
        <GameBlocker blockerTarget={blockerTarget}/>

        <Gameschuffler onExams={handleClick}/>
        <section className="blocker"></section>

        </div>

        <GameLevelFooter />

      </>
      )
};