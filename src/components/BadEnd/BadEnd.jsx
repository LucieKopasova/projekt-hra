import '/global.css';
import gameData from '../../data/gameData.json';
import { GameLevelFooter } from '../GameLevelFooter/GameLevelFooter';
import { TypewriterText } from '../TypewriterText/TypewriterText';
import { Link } from 'react-router-dom';

export const BadEnd = () => {
  return (
    <>
      <img src="/images/302_prohra.png" />

      <footer className="gameLevel-footer">
                  <div className='story-container'>
                  
                      <TypewriterText text="Batoň se snažil, ale tentokrát mu síly došly těsně před cílem. Nevadí! Příště to určitě zvládne líp. Jsi připravený zkusit to znovu?"/>
                  
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
