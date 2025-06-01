import './GameLevel2.css';
import '/global.css';
import bgImage from '/assets/13_potok.png'; // uprav dle projektu

export const GameLevel2 = () => {
  return (
    <div className="page-wrapper"
 
    >
        <img src="/../assets/12_klada.png" />
     
      <div className="game-container">
        <header className="header">
          <div className="score">100</div>
          <div className="header-buttons">
            <button className="header-button">zvuk</button>
            <button className="header-button">domů</button>
          </div>
        </header>

        
         
            <div className="result-exams">3</div>
            <div className="result-blocker">2</div>
         

          <div className="examples">
            <button className="example-button">1 + 1</button>
            <button className="example-button">2 + 0</button>
            <button className="example-button">3 - 1</button>
          </div>
      

        <section className="blocker"></section>

        <footer className="footer">
            <div className='story-wrapper'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sapiente quasi ratione alias cupiditate! Molestiae dolores minima ratione beatae dolorem.</p>
            <button className="continue-button">Pokračovat</button>
            </div>
        </footer>

      </div>
      </div>
   
  );
};