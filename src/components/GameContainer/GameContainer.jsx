import { BadEnd } from '../BadEnd/BadEnd';
import { GameLevel } from '../GameLevel/GameLevel';
import { GameMap } from '../GameMap/GameMap';
import { HappyEnd } from '../HappyEnd/HappyEnd';
import { useState, useEffect } from 'react';
import gameData from '../../data/gameData.json';
import Delayed from 'react-delayed';

export const GameContainer = ({
  handleMove,
  buttonRef,
  onCalculation,
  energy,
  onEnergyClassChange,
}) => {
  const [componentNumber, setComponentNumber] = useState(1);
  const [objectId, setObjectId] = useState(101);
  const gameDataObject = gameData.find((item) => objectId === item.id);
  const [showBadEnd, setShowBadEnd] = useState(false);

  const handleMapClick = () => {
    setComponentNumber(2);
  };

  const handleGameLevelClick = () => {
    setComponentNumber(1);
    setObjectId((oldObjectId) => oldObjectId + 1);
  };

  useEffect(() => {
    if (energy < 0) {
      const timeout = setTimeout(() => {
        setShowBadEnd(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [energy]);
  const swithComponent = () => {
    let energyBarClassName = '';

    if (showBadEnd) {
      energyBarClassName = 'score score-none';
      onEnergyClassChange?.(energyBarClassName);
      return <BadEnd />;
    } else if (objectId > 110) {
      energyBarClassName = 'score score-none';
      onEnergyClassChange?.(energyBarClassName);
      return <HappyEnd />;
    } else if (componentNumber === 1) {
      energyBarClassName = 'score';
      onEnergyClassChange?.(energyBarClassName);
      return (
        <GameMap
          onMapClick={handleMapClick}
          initMapBackground={gameDataObject.mapImage}
          objectId={objectId}
        />
      );
    } else if (componentNumber === 2) {
      energyBarClassName = 'score';
      onEnergyClassChange?.(energyBarClassName);
      return (
        <GameLevel
          handleMove={handleMove}
          buttonRef={buttonRef}
          onCalculation={onCalculation}
          onGameLevelClick={handleGameLevelClick}
          initBlockerTarget={gameDataObject.target}
          initBlockerBackground={gameDataObject.actionImage}
          gameDataObject={gameDataObject}
          objectId={objectId}
          energy={energy}
        />
      );
    }
  };
  return swithComponent();
};
