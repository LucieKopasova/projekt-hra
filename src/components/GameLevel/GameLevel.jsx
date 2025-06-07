
import '/global.css';
import gameData from '../../data/gameData.json';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';
import { Gameschuffler } from '../GameSchuffler/GameSchuffler';

export const GameLevel = () => {
  return (
    <>

      <img src={gameData[0].actionImage} />

      <Gameschuffler/>

    <GameLevelFooter/>
    
     </>
  )
};