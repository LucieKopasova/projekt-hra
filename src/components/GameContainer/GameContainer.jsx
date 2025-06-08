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
  

  }

  const swithComponent = () => {
    if (energy < 0) {
      return <BadEnd /> 
    } else if ( objectId > 110) {
      return <HappyEnd />
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
        gameDataObject={gameDataObject}
        objectId={objectId}
      />
    } 
    


  }
  return swithComponent();
};
