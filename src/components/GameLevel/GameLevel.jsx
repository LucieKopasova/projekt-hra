
import '/global.css';
import gameData from '../../data/gameData.json';
import { Gameschuffler } from '../GameSchuffler/GameSchuffler';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';


export const GameLevel = () => {
  return (
    <>

      <img src={gameData[0].actionImage} />

      <Gameschuffler/>


    <GameLevelFooter/>
    
     </>
  )
};