import '/global.css';
import gameData from '../../data/gameData.json';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';
import { Link } from 'react-router-dom';
import { TypewriterText } from '../TypewriterText/TypewriterText';
import "./HappyEnd.css"

export const HappyEnd = () => {
  return (
    <>
      <img className="backgroundImage-center" src="/images/301_vyhra.png" />

      <footer className="gameLevel-footer">
        <div className="story-container">
          <TypewriterText text="Hurá! Batoň dorazil až do cíle. Celou cestu šetřil síly, překonal překážky a došel až na konec. Bez tebe by to nezvládl. Skvělá práce!" />
        </div>
        <div>
          <Link to="/" className="arrow arrow-position arrow-link">
            {' '}
            <span> Hrát znovu </span>
          </Link>
        </div>
      </footer>
    </>
  );
};
