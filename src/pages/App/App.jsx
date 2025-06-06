import { Outlet } from 'react-router-dom';
import './style.css';

export const App = () => {
  return (
    <div className="container">
      <div className="app-icons">
        <button className="icon-soundSwitch"></button>
        <button className="icon-homeButton"></button>
      </div>

      <Outlet />
    </div>
  );
};
