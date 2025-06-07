
import '/global.css';
import gameData from '../../data/gameData.json';
import { Gameschuffler } from '../GameSchuffler/GameSchuffler';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';


export const GameLevel = () => {
  return (
    <>

      <img src={gameData[0].actionImage} />

      <div className="gamelevel-game">

        <div className="result-exams">3</div>
        <div className="result-blocker">5</div>

        <Gameschuffler />
        <section className="blocker"></section>

        </div>

        <GameLevelFooter />

      </>
      )
};