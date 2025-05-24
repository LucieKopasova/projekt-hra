import React, { useState, useEffect } from 'react';
import './health.css';
import { Exams } from '../shuffler/shuffler';

export const HealthBar = () => {
  const [health, sethealth] = useState('100');

  const handleClick = (id) => {
    sethealth((currentHealth) => currentHealth - Number(id));
  };
  console.log(health);
  return (
    <>
      <div className="healthBar">
        <h2>{health}</h2>
      </div>
      <Exams onExams={handleClick} />
    </>
  );
};
