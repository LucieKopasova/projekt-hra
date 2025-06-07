
import examples from '../../data/examples.json';
import useSound from 'use-sound';
import soundclik from '../../sounds/mouse-click.mp3';

// hodnota přkážky
const blocker = 3;

//nahodný výber příkladu z pole

const randomPropertyKey = Math.floor(Math.random() * 3) + 1;

//správný výsledek  jako je  překážka
const getCorrectResult = () => {
  const object = examples.find((obj) => obj.examplesValue === blocker);
  return {
    text: object[randomPropertyKey],
    examplesValue: object.examplesValue,
  };
};
//menší vysledek než je překážka ale větší než je nula

const getLowerResult = () => {
  const smallerthenBlocker = Math.ceil(Math.random() * (blocker - 1));
  const object = examples.find((obj) => obj.examplesValue === smallerthenBlocker);
  return {
    text: object[randomPropertyKey],
    examplesValue: object.examplesValue,
  };
};

//větší výsledek než je překážka o 2

const getHigherResult = () => {
  const higherthenBlocker =
    Math.floor(Math.random() * (examples.length - blocker)) + blocker + 1;
  const object = examples.find((obj) => obj.examplesValue === higherthenBlocker);
  return {
    text: object[randomPropertyKey],
    examplesValue: object.examplesValue,
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

      <div className="examples">
        

        {shuffledResults.map((result) => (
          <div> 
            <button
              className="example-button"
              key={result.idExamples}
              onClick={() => {
                play();
                onExams(result.examplesValue);
              }}
            >
              {result.text}
            </button>
          
          </div>
        ))}
      </div>
      
    
  );
};
