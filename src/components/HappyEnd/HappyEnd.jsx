import '/global.css';
import gameData from '../../data/gameData.json';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';

export const HappyEnd = () => {
  return (
    <>
      <img src={gameData[10].actionImage} />

      <GameLevelFooter />
    </>
  );
};
