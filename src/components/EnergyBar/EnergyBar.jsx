import './EnergyBar.css';

export const EnergyBar = ({energy, energyBarClassName}) => {
  const handleEnergyClassName = () => {
    
  }
  
  return (
    <header className="header">
      <div className={energyBarClassName}>{energy}</div>
      
    </header>
  )
}
