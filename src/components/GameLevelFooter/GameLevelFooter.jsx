

export const GameLevelFooter = ({onGameLevelClick}) => {
    return (
        <>
        <footer className="gameLevel-footer">
            <div className='story-container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sapiente quasi ratione alias cupiditate! Molestiae dolores minima ratione beatae dolorem.</p>
            </div>
            <button 
            className="arrow gameLevel-arrow-position"
            onClick={onGameLevelClick}
            >Pokračovat</button>
        </footer>
        </>
    )
}