import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import soundtrackSong from '../../sounds/dragons.mp3';
import './soundtrack.css';

export const Soundtrack = () => {
  const [play, { stop }] = useSound(soundtrackSong);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    play();
    /* const handleMusicClick = () => {
    
     setIsPlaying(true);
      document.removeEventListener('click', handleMusicClick);
    };
    document.addEventListener('click', handleMusicClick); */
  }, []);

  const toggleSound = () => {
    if (isPlaying === true) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button className="music--button" onClick={toggleSound}>
      {isPlaying ? 'Zastavit zvuk' : 'Přehrát zvuk'}{' '}
    </button>
  );
};
