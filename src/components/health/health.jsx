import React, { useState, useEffect } from 'react';
import './health.css';

import { GameshufflerResult } from '../GameShufflerResult/GameShufflerResult';
import { GameMap } from '../GameMap/GameMap';

export const HealthBar = () => {
  const [energy, setEnergy] = useState('100');

    const handleClick = (id) => {
      setEnergy((currentEnergy) => {
        setEnergy(currentEnergy) - Number(id)
      })
    }

  const contentGame = () => {
    if (health < 60) {
      return (
        <>
          <div className="healthBar">
            <h2>{health}</h2>
          </div>
          <GameMap />
        </>
      );
    }
    return (
      <>
        <div className="header">
          <div className="score" >{health}</div>
        </div>
       
      </>
    );
  };
};
