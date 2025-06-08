import { Link } from 'react-router-dom';

export const StoryPage = () => {
  return (
    <div className="storyPage-content">
      <section className="storyPage-text-container">
        <h2 className="storyPage-title">Tohle je Batoň.</h2>
        <div className="storyPage-text">
          <p>
            Jednoho dne se podíval z okna, zhluboka se nadechl a řekl si: „Dnes
            je ten den.“ Už dlouho snil o tom, že jednou vyrazí na pořádnou
            výpravu. A teď je to tady. Batoň se chystá na svou první velkou
            cestu přes kopce, lesy i louky, daleko od domova. Chce spát pod
            hvězdami, přebrodit potoky, zdolat opravdový kopec a zažít opravdové
            dobrodružství. Zabalil si batoh, obul pevné boty… a vyrazil.
          </p>
        </div>
      </section>
      <Link to="/hra" className="arrow">
        Pokračovat
      </Link>
    </div>
  );
};
