import { TypewriterText } from '../TypewriterText/TypewriterText';
import './GameLevelFooter.css';

export const GameLevelFooter = ({ onGameLevelClick, text, blockerTarget }) => {
  return (
    <>
      <footer className="gameLevel-footer">
        <div className="story-container">
          <TypewriterText text={text} />
        </div>
        <button
          className={
            blockerTarget <= 0
              ? 'arrow arrow-position '
              : 'arrow arrow-position gameLevel-arrow-off'
          }
          onClick={onGameLevelClick}
        >
          Pokračovat
        </button>
      </footer>
    </>
  );
};
