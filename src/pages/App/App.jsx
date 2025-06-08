import { Outlet } from 'react-router-dom';
import './App.css';
import { SoundOnIcon } from '../../components/SoundOnIcon/SoundOnIcon';
import { SoundOffIcon } from '../../components/SoundOffIcon/SoundOffIcon';
import { HomeIcon } from '../../components/HomeIcon/HomeIcon';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import soundtrackSong from '../../sounds/soundForest.mp3';

let isSoundOn = true;
export const setSoundOn = (value) => {
  isSoundOn = value;
};
export const getSoundOn = () => isSoundOn;

export const App = () => {
  const [play, { stop }] = useSound(soundtrackSong, { volume: 0.5 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(getSoundOn());

  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    setSoundOn(newState);

    if (newState) {
      play();
      setIsPlaying(true);
    } else {
      stop();
      setIsPlaying(false);
    }
  };
  return (
    <div className="container">
      <div className="app-icons">
        <button onClick={toggleSound} className="icon-soundSwitch">
          {isPlaying ? <SoundOnIcon /> : <SoundOffIcon />}
        </button>
        <Link to="/" className="icon-homeButton">
          <HomeIcon />
        </Link>
      </div>

      <Outlet />
    </div>
  );
};
