import { BadEnd } from '../BadEnd/BadEnd';
import { GameLevel } from '../GameLevel/GameLevel';
import { GameMap } from '../GameMap/GameMap';
import { HappyEnd } from '../HappyEnd/HappyEnd';
import { useState } from 'react';
import gameData from '../../data/gameData.json'

export const GameContainer = ({ onCalculation, energy }) => {

  const [componentNumber, setComponentNumber] = useState(1)
 
  const [objectId, setObjectId] = useState(101);

  const gameDataObject = gameData.find((item) => objectId === item.id)

 
  const handleMapClick = () => {
    setComponentNumber(2)

  }

  const handleGameLevelClick = () => {
    setComponentNumber(1)
    setObjectId((oldObjectId) =>
    oldObjectId + 1)
  
    console.log("handleGameLevelClick", gameDataObject)
  }

  const swithComponent = () => {
    if (energy < 0) {
      return <BadEnd /> 
    } else if (componentNumber === 1) {
      return <GameMap 
      onMapClick={handleMapClick} 
      initMapBackground={gameDataObject.mapImage}
      />
    } else if (componentNumber === 2) {
      return <GameLevel
        onCalculation={onCalculation}
        onGameLevelClick={handleGameLevelClick}
        initBlockerTarget={gameDataObject.target}
        initBlockerBackground={gameDataObject.actionImage}
      />
    } else if (componentNumber === 3) {
      return <HappyEnd />
    }  
    


  }
  return swithComponent();
};
