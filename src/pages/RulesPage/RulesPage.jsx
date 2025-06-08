import { Link } from 'react-router-dom';
import './RulesPage.css';

export const RulesPage = () => {
  return (
    <div className="rulesPage-content">
      <section className="rulesPage-text-container">
        <h2 className="rulesPage-title">Pravidla</h2>
        <div className="rulesPage-text">
          <p>
          ​​Batoň se vydal na velkou výpravu! Je plný síly a má spoustu
          energie, kterou uvidíš v horní části obrazovky. Na každém políčku
          uvidíš, kolik energie Batoň potřebuje na splnění úkolu (například 5).
          Tvým úkolem je vybrat takový příklad (například 2 + 3), který dává
          správné číslo. </p>
          <p>
          Když vybereš správně, Batoň může pokračovat dál.</p>
          <p> Když
          vybereš menší číslo, musíš to zkusit znovu.</p>
          <p> Když vybereš větší číslo,
          Batoň sice pokračuje, ale ztratí víc energie, než by musel. </p>
          <p> Hodnota z
          každého vybraného příkladu se odečte od skóre. Vyhraješ, když Batoň
          dojde až do cíle dřív, než mu dojde energie.</p>
        </div>
      </section>
      <Link to="/hra" className="arrow arrow-link">
        <span> Pokračovat</span>
      </Link>
    </div>
  );
};
