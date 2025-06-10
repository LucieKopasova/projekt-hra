import '/global.css';
import './GamePage.css';
import { GameContainer } from '../../components/GameContainer/GameContainer';
import { EnergyBar } from '../../components/EnergyBar/EnergyBar';
import { useState } from 'react';
import { useEnergyAnimation } from '../../components/AnimationEnergyBar/AnimationEnegryBar';

export const GamePage = () => {
  const [energy, setEnergy] = useState(10);
  const [energyBarClassName, setEnergyBarClassName] = useState('');

  const { particlesRef, chargeRef, buttonRef, handleMove } =
    useEnergyAnimation();

  const handleCalcualiton = (exampleValue) => {
    setEnergy((oldEnergy) => oldEnergy - Number(exampleValue));
  };

  return (
    <>
      <div
        ref={particlesRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />

      <div className="page-wrapper">
        <EnergyBar
          chargeRef={chargeRef}
          energy={energy}
          energyBarClassName={energyBarClassName}
        />

        <GameContainer
          handleMove={handleMove}
          buttonRef={buttonRef}
          onCalculation={handleCalcualiton}
          onEnergyClassChange={setEnergyBarClassName}
          energy={energy}
        />
      </div>
    </>
  );
};
