import { TypewriterText } from "../TypewriterText/TypewriterText"


export const GameLevelFooter = ({onGameLevelClick, text}) => {
    return (
        <>
        <footer className="gameLevel-footer">
            <div className='story-container'>
            <p>{/* {text} */}
                <TypewriterText text={text}/>
            </p>
            </div>
            <button 
            className="arrow gameLevel-arrow-position"
            onClick={onGameLevelClick}
            >Pokračovat</button>
        </footer>
        </>
    )
}