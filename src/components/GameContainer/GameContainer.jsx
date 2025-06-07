import { BadEnd } from '../BadEnd/BadEnd';
import { GameLevel } from '../GameLevel/GameLevel';
import { GameMap } from '../GameMap/GameMap';
import { HappyEnd } from '../HappyEnd/HappyEnd';
import { useState } from 'react';

export const GameContainer = ({onCalculation}) => {

  return <GameLevel onCalculation={onCalculation}/> 

};
