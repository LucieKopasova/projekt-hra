import React, { useState, useEffect } from 'react';
import './health.css';
import { Exams } from '../shuffler/shuffler';
import { GameshufflerResult } from '../GameShufflerResult/GameShufflerResult';

export const HealthBar = () => {
  const [health, sethealth] = useState('100');
  const [resultTarget, setresultTarget] = useState('0');

  const handleClick = (id) => {
    setresultTarget(id);
    sethealth((currentHealth) => currentHealth - Number(id));
  };
  console.log(health);
  return (
    <>
      <div className="healthBar">
        <h2>{health}</h2>
      </div>
      <GameshufflerResult resultTarget={resultTarget} />
      <Exams onExams={handleClick} />
    </>
  );
};
