
import '/global.css';
import gameData from '../../data/gameData.json';
import { Gameschuffler } from '../GameSchuffler/GameSchuffler';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';
import { GameshufflerResult } from '../GameShufflerResult/GameShufflerResult';
import { useState } from 'react';


export const GameLevel = ({onCalculation}) => {

  const [resultTarget, setResultTarget] = useState('0');

  const handleClick = (exampleValue) => {
    setResultTarget(exampleValue);
    console.log(exampleValue)
    onCalculation(exampleValue)
  };

  return (
    <>

      <img src={gameData[0].actionImage} />

      <div className="gamelevel-game">

        <GameshufflerResult resultTarget={resultTarget}/>
        
        <div className="result-blocker">5</div>

        <Gameschuffler onExams={handleClick}/>
        <section className="blocker"></section>

        </div>

        <GameLevelFooter />

      </>
      )
};