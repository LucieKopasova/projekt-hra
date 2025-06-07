import './GameMap.css';
import gameData from '../../data/gameData.json';

export const GameMap = ({onMapClick}) => {
  return (
    <>
    
    <img src="/assets/106_mapa_chata.png"/>
   
    <button 
    className="arrow"
    onClick={onMapClick}
    >Pokračovat</button>
    
     </>
  )
};

