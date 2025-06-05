import './GameMap.css';
import gameData from '../../data/gameData.json';

export const GameMap = () => {
  return (
    <>
    
    <img src={gameData[0].mapImage}/>
   
    <button className="continue-btn continue-btn--map">Pokračovat</button>
    
     </>
  )
};

