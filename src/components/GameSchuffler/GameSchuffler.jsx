
import examples from '../../data/examples.json';
import useSound from 'use-sound';
import soundclik from '../../sounds/mouse-click.mp3';

// hodnota přkážky
const blocker = 3;

//nahodný výber příkladu z pole

const randomPropertyKey = Math.floor(Math.random() * 3) + 1;

//správný výsledek  jako je  překážka
const getCorrectResult = () => {
  const object = examples.find((obj) => obj.idExamples === blocker);
  return {
    text: object[randomPropertyKey],
    idExamples: object.idExamples,
  };
};
//menší vysledek než je překážka ale větší než je nula

const getLowerResult = () => {
  const smallerthenBlocker = Math.ceil(Math.random() * (blocker - 1));
  const object = examples.find((obj) => obj.idExamples === smallerthenBlocker);
  return {
    text: object[randomPropertyKey],
    idExamples: object.idExamples,
  };
};

//větší výsledek než je překážka o 2

const getHigherResult = () => {
  const higherthenBlocker =
    Math.floor(Math.random() * (examples.length - blocker)) + blocker + 1;
  const object = examples.find((obj) => obj.idExamples === higherthenBlocker);
  return {
    text: object[randomPropertyKey],
    idExamples: object.idExamples,
  };
};

// vytvoří pole s příklady
const resultArray = [getCorrectResult(), getLowerResult(), getHigherResult()];

// zamíchá pole
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
const shuffledResults = shuffleArray(resultArray);

export const Gameschuffler = ({ onExams }) => {
  const [play] = useSound(soundclik);

  return (
    <div className="gamelevel-game">

    <div className="result-exams">3</div>
     <div className="result-blocker">{blocker}</div>

      <div className="examples">
        

        {shuffledResults.map((result, index) => (
          <div>
            <button
              className="example-button"
              key={result.idExamples}
              onClick={() => {
                play();
                onExams(result.idExamples);
              }}
            >
              {result.text}
            </button>
          
          </div>
        ))}
        <section className="blocker"></section>
      </div>
      
    </div>
  );
};
