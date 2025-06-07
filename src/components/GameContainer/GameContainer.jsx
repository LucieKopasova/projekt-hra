import { BadEnd } from '../BadEnd/BadEnd';
import { GameLevel } from '../GameLevel/GameLevel';
import { GameMap } from '../GameMap/GameMap';
import { HappyEnd } from '../HappyEnd/HappyEnd';
import { useState } from 'react';
import gameData from '../../data/gameData.json'

export const GameContainer = ({onCalculation}) => {

  const [componentNumber, setComponentNumber] = useState(1)
  const [backgroundId, setBackgroundId] = useState(101)
  
 
  const gameDatas = gameData.find((item) => backgroundId === item.id)
 
  console.log(gameDatas)


  const handleMapClick = () => {
    setComponentNumber(2)
    
  }

  const handleGameLevelClick = () => {
    setComponentNumber(1)
    console.log(funguju)
  }


    const swithComponent = () => {
      if (componentNumber === 1) {
        return <GameMap onMapClick={handleMapClick}/>
      } else if (componentNumber === 2) {
         return <GameLevel 
         onCalculation={onCalculation}
         onGameLevelClick={handleGameLevelClick}
         /> 
      }  else if (componentNumber === 3) {
         return <HappyEnd/> 
      } else if (componentNumber === 4) {
         return <BadEnd/> 
      } 


    }
    return swithComponent();
};
