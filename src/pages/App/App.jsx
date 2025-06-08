import { Outlet } from 'react-router-dom';
import './App.css'
import {SoundOnIcon} from '../../components/SoundOnIcon/SoundOnIcon';
import {SoundOffIcon} from '../../components/SoundOffIcon/SoundOffIcon';
import { HomeIcon } from '../../components/HomeIcon/HomeIcon';

export const App = () => {
  return (
    <div className="container">
      <div className="app-icons">
        <button className="icon-soundSwitch">
          <SoundOnIcon/>
        </button>
        <button className="icon-homeButton">
          <HomeIcon/>
        </button>
      </div>

      <Outlet />
    </div>
  );
};
