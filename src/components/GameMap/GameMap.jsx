import './GameMap.css';
import gameData from '../../data/gameData.json';

export const GameMap = ({onMapClick, initMapBackground}) => {

  return (
    <>
    
    <img src={initMapBackground}/>
   
    <button 
    className="arrow"
    onClick={onMapClick}
    >Pokračovat</button>
    
     </>
  )
};

