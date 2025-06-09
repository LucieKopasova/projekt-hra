import './GameMap.css';
import gameData from '../../data/gameData.json';
import { useState } from 'react';
import { object } from 'framer-motion/m';

export const GameMap = ({onMapClick, initMapBackground, objectId}) => {

   let imgClassName = '';

  if (objectId === 101 || objectId === 102 ) {
    imgClassName = 'background-map--position20vs80'
  } 
  else if (objectId === 103) {
    imgClassName = 'background-map--position30vs70'
  } 
  else if (objectId === 104 ) {
    imgClassName = 'background-map--center'
  }
   else if (objectId === 105 ) {
    imgClassName = 'background-map--position60vs40'
  }
  else if ( objectId === 106 || objectId === 110) {
    imgClassName = 'background-map--position90vs10'
  }
  else if (objectId === 107 || objectId === 109) {
    imgClassName = 'background-map--position80vs20'
  }
  else if (objectId === 108 ) {
    imgClassName = 'background-map--position75vs25'
  }

  return (
    <>
    
    <img className={imgClassName}  src={initMapBackground}/>
   
    <button 
    className="arrow"
    onClick={onMapClick}
    >Pokračovat</button>
    
     </>
  )
};

