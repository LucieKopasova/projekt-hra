
import { FooterGameLevel } from '../FooterGameLevel/FooterGameLevel';
import '/global.css';

export const GameLevel = () => {
  return (
    <>
    
    <img src="/../assets/12_klada.png" />
   
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

    <FooterGameLevel/>
    
     </>
  )
};