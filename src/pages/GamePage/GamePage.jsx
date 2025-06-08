import "/global.css";
import "./GamePage.css";
import { GameContainer } from '../../components/GameContainer/GameContainer';
import { EnergyBar } from "../../components/EnergyBar/EnergyBar";
import { useState } from "react";

export const GamePage = () => {

   const [energy, setEnergy] = useState(100);
  
      const handleCalcualiton = (exampleValue) => {
        setEnergy((oldEnergy) => oldEnergy - Number(exampleValue))
      
          
        }
      


  return (
    <div className="page-wrapper">


      <EnergyBar energy={energy}/>





      <GameContainer 
      onCalculation={handleCalcualiton}
      energy={energy}/>






      

    </div>

  );



};

