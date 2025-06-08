import { Link } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage-content">
      <h1 className="game-title">Výprava Batoně</h1>

      <div className="homepage-buttons">
        <Link to="/pribeh" className="homepage-btn-start">
          <span>Hrát</span>
        </Link>
        <Link to="/pravidla" className="homepage-btn-rules">
          <span>Pravidla</span>
        </Link>
      </div>
    </div>
  );
};
