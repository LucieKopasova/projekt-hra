import './EnergyBar.css';

export const EnergyBar = ({ chargeRef, energy, energyBarClassName }) => {
  const handleEnergyClassName = () => {};

  return (
    <header ref={chargeRef} className="header">
      <div className={energyBarClassName}>{energy}</div>
    </header>
  );
};
