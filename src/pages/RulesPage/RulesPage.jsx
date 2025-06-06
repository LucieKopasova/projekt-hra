export const RulesPage = () => {
  return (
    <div className="rulesPage-content">
      <section className="rulesPage-text-container">
        <h2 className="rulesPage-title">Pravidla</h2>
        <p className="rulesPage-text">
          ​​Batoň se vydal na velkou výpravu! Je plný síly a má spoustu
          energie,kterou uvidíš v horní části obrazovky. Na každém políčku
          uvidíš, kolik energie Batoň potřebuje na splnění úkolu (například 5).
          Tvým úkolem je vybrat takový příklad (například 2 + 3), který dává
          správné číslo. Když vybereš správně, Batoň může pokračovat dál. Když
          vybereš menší číslo, musíš to zkusit znovu. Když vybereš větší číslo,
          Batoň sice pokračuje, ale ztratí víc energie, než by musel. Hodnota z
          každého vybraného příkladu se odečte od skóre. Vyhraješ, když Batoň
          dojde až do cíle dřív, než mu dojde energie.
        </p>
      </section>
      <section className="arrow-container"><button className="arrow">Pokračovat</button></section>
      
    </div>
  );
};
