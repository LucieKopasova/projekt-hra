import { TypewriterText } from "../TypewriterText/TypewriterText"
import './GameLevelFooter.css';


export const GameLevelFooter = ({onGameLevelClick, text, blockerTarget}) => {
    return (
        <>
        <footer className="gameLevel-footer">
            <div className='story-container'>
            <p>{/* {text} */}
                <TypewriterText text={text}/>
            </p>
            </div>
            <button 
            className= {blockerTarget <= 0
                ? "arrow gameLevel-arrow-position"
                : "arrow gameLevel-arrow-position gameLevel-arrow-off"
            }
            onClick={onGameLevelClick}
            >Pokračovat</button>
        </footer>
        </>
    )
}