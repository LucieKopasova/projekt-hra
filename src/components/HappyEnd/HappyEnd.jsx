
import '/global.css';
import gameData from '../../data/gameData.json';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';

export const HappyEnd = () => {
  return (
    <>
    
    <img src={gameData[0].actionImage}/>
   
    <div className="gamelevel-game">

     

       <div className="result-exams">3</div>
            <div className="result-blocker">2</div>
         

          <div className="examples">
            <button className="example-button">1 + 1</button>
            <button className="example-button">2 + 0</button>
            <button className="example-button">3 - 1</button>
          </div>
      

        <section className="blocker"></section>
    </div>

    <GameLevelFooter/>
    
     </>
  )
};