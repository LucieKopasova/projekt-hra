import { Exams } from '../../components/shuffler/shuffler';
import { TypewriterText } from '../../components/TypewriterText/TypewriterText';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Výprava Batoně</h1>
      </header>
      <main>
        <Exams />
        <TypewriterText/>
      </main>
      <footer></footer>
    </div>
  );
};
