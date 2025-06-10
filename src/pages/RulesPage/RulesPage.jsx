import { Link } from 'react-router-dom';
import './RulesPage.css';

export const RulesPage = () => {
  return (
    <div className="rulesPage-content">
      <section className="rulesPage-text-container">
        <h2 className="rulesPage-title">Pravidla</h2>
        <div className="rulesPage-text">
          {/*  <p>
            Batoň se vydal na svou první velkou výpravu. Aby došel až do cíle,
            musí si dobře rozvrhnout svou energii. Kolik energie mu zbývá, vidíš
            nahoře na obrazovce.{' '}
          </p>
          <p>
            Na každém políčku tě čeká překážka – její hodnota je zobrazena nad
            Batoněm. Vlevo najdeš nabídku matematických příkladů. Tvým úkolem je
            vybrat takový příklad, jehož výsledek pomůže Batoňovi překážku
            překonat. Příklad vybereš kliknutím na něj. Jeho výsledek se odečte
            od hodnoty překážky, ale hlavně od celkové energie.{' '}
          </p>
          <p>
            <strong>Jak správně vybírat:</strong>
          </p>
          <p>
            <strong>Ideální volba:</strong> Výsledek příkladu se rovná hodnotě
            překážky. Pokračuješ dál a z energie se odečte právě tolik, kolik je
            potřeba.{' '}
          </p>
          <p>
            <strong>Vyšší hodnota:</strong> Můžeš překážku překonat, ale z
            energie se ti odečte víc, než by bylo nutné.{' '}
          </p>
          <p>
            <strong>Nižší hodnota:</strong> Příkladem překážku nepřekonáš. Musíš
            vybrat další, ale <strong>pozor</strong> – v takovém případě se ti
            od energie odečtou všechny hodnoty vybraných příkladů v tomto kole.
          </p>
          <p>
            Přemýšlej strategicky, ať Batoňovi energie vydrží co nejdéle. Cílem
            je dojít až na konec dřív, než se dostane na nulu. Šťastnou cestu!
          </p> */}

          <p>
            Batoň se vydal na svou první výpravu a musí si šetřit energii,
            kterou vidíš nahoře.
          </p>
          <p>
            Každé políčko má překážku s hodnotou. Vlevo jsou příklady, vyber
            ten, který pomůže Batoňovi překážku překonat. Výsledek se odečte z
            překážky i z energie.{' '}
          </p>
          <p>
            <strong>Jak správně vybírat:</strong>
          </p>
          <p>
            <strong>Ideální volba:</strong> Výsledek se rovná hodnotě překážky.
            Pokračuješ dál a z energie se odečte právě tolik, kolik je potřeba.{' '}
          </p>
          <p>
            <strong>Vyšší hodnota:</strong> Můžeš překážku překonat, ale z
            energie se ti odečte víc, než by bylo nutné.{' '}
          </p>
          <p>
            <strong>Nižší hodnota:</strong> Výsledem překážku nepřekonáš. Musíš
            vybrat další, ale <strong>pozor</strong> od energie odečtou všechny
            hodnoty vybraných příkladů v tomto kole.
          </p>

          <p>Cílem je dojít na konec dřív, než energie dojde. Hodně štěstí!</p>
        </div>
      </section>
      <Link to="/pribeh" className="arrow arrow-link">
        <span> Pokračovat</span>
      </Link>
    </div>
  );
};
