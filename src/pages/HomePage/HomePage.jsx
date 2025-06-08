import { Link } from 'react-router-dom';
import "./Homepage.css";

export const HomePage = () => {
  return (
    <div className="homepage-content">
      <h1 className="game-title">Výprava Batoně</h1>

      <div className="homepage-buttons">
        <Link to="/pribeh" className="homepage-btn-start">
          Hrát
        </Link>
        <Link to="/pravidla" className="homepage-btn-rules">
          Pravidla
        </Link>
      </div>
    </div>
  );
};
