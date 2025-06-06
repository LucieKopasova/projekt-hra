
import '/global.css';
import gameData from '../../data/gameData.json';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';

export const BadEnd = () => {
  return (
    <>
    
    <img src={gameData[2].actionImage}/>
   
    <GameLevelFooter/>
    
     </>
  )
};