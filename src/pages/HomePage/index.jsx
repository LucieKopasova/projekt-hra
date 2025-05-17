import { Exams } from '../../components/shuffler/shuffler';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Výprava Batoně</h1>
      </header>
      <main>
        <Exams />
      </main>
      <footer></footer>
    </div>
  );
};
