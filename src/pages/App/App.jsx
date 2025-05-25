import { Outlet } from 'react-router-dom';
import { HealthBar } from '../../components/health/health';
import { Soundtrack } from '../../components/soundtrack.jsx/soundtrack';
import { TypewriterText } from '../../components/TypewriterText/TypewriterText';
import './style.css';

export const App = () => {
  return (
    <div className="container">
     
        <h1>Výprava Batoně</h1>
     <Outlet/>
    </div>
  );
};
