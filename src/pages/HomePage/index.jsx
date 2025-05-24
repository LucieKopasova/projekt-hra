import { HealthBar } from '../../components/health/health';
import { Soundtrack } from '../../components/soundtrack.jsx/soundtrack';
import { TypewriterText } from '../../components/TypewriterText/TypewriterText';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Soundtrack />
      <header>
        <h1>Výprava Batoně</h1>
      </header>
      <main>
        <HealthBar />
        <TypewriterText />
      </main>
      <footer></footer>
    </div>
  );
};
