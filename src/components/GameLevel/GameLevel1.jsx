import './GameLevel1.css';
import '/global.css';

export const GameLevel1 = () => {
  return (
    <div
      className="GameLevel-container Gamelevel-background"
      style={{ backgroundImage: "url('/../assets/12_klada.png')" }}
    >
      <div className="GameLevel-area-container1">
        <header className="GameLevel-header">
          <div className="Game-level-score">
            <img src="#" />
            <span>100</span>
          </div>
        </header>

        <div className=" GameLevel-result GameLevel-result-exams">3</div>
        <div className="GameLevel-result GameLevel-result-blocker">2</div>

        <section className="GameLevel-main-exams">
          <div className="">
            <button className="GameLevel-exams-btn">1 + 1</button>
            <button className="GameLevel-exams-btn">2 + 0</button>
            <button className="GameLevel-exams-btn">3 - 1</button>
          </div>
        </section>
        <section className="GameLevel-main-blocker"></section>

        <footer className="GameLevel-footer">
          <div className="GameLevel-story-container">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              voluptatem sed saepe corrupti placeat expedita omnis nobis quidem
              eum, earum maiores cumque non, neque explicabo, obcaecati tempora!
              Rerum, quia repudiandae.
            </p>
            <button className="GameLevel-story-btn">Pokračovat</button>
          </div>
        </footer>
      </div>
    </div>
  );
};
