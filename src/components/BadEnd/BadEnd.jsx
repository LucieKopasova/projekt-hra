import '/global.css';
import gameData from '../../data/gameData.json';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';
import { TypewriterText } from '../TypewriterText/TypewriterText';
import { Link } from 'react-router-dom';
import "./BadEnd.css"

export const BadEnd = () => {
  return (
    <>
      <img className="backgroundImage-center" src="/images/302_prohra.png" />

      <footer className="gameLevel-footer">
        <div className="story-container">
          <TypewriterText text="Batoň se snažil, ale tentokrát mu síly došly těsně před cílem. Nevadí! Příště to určitě zvládne líp. Jsi připravený zkusit to znovu?" />
        </div>
        <Link to="/" className="arrow arrow-position arrow-link">
          <span>Hrát znovu</span>
        </Link>
      </footer>
    </>
  );
};
