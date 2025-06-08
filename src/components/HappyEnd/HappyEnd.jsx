import '/global.css';
import gameData from '../../data/gameData.json';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';
import { Link } from 'react-router-dom';
import { TypewriterText } from '../TypewriterText/TypewriterText';

export const HappyEnd = () => {
  return (
    <>
      <img src={gameData[10].actionImage} />

         <footer className="gameLevel-footer">
                  <div className='story-container'>
                  
                      <TypewriterText text="Hurá! Batoň dorazil až do cíle. Celou cestu šetřil síly, překonal překážky a došel až na konec. Bez tebe by to nezvládl. Skvělá práce!"/>
                  
                  </div>
                  <Link 
                  to="/"
                  className="arrow"
                  > Hrát znovu
                  </Link>
              </footer>
              </>
  );
};
