import gameData from '../../data/gameData.json';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage-content">
      <h1 className="game-title">Výprava Batoně</h1>

      <div className="homepage-buttons">
        <button className="homepage-btn-start">Hrát</button>
        <button className="homepage-btn-rules">Pravidla</button>
      </div>
    </div>
  );
};
