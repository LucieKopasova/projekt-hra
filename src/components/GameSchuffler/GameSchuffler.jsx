import { useState } from 'react';
import examples from '../../data/examples.json';
import useSound from 'use-sound';
import soundclik from '../../sounds/mouse-click.mp3';
import { getSoundOn } from '../../pages/App/App';

export const Gameschuffler = ({
  onExams,
  blockerTarget,
  initBlockerTarget,
}) => {
  const [play] = useSound(soundclik);

  const initResults = () => {
    // hodnota přkážky
    const blocker = initBlockerTarget;

    //nahodný výber příkladu z pole
    const randomPropertyKey = Math.floor(Math.random() * 15) + 1;

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
      const object = examples.find(
        (obj) => obj.examplesValue === smallerthenBlocker,
      );
      return {
        text: object[randomPropertyKey],
        examplesValue: object.examplesValue,
      };
    };

    //větší výsledek než je překážka o 2

    const getHigherResult = () => {
      const higherthenBlocker =
        Math.floor(Math.random() * (examples.length - blocker)) + blocker + 1;
      const object = examples.find(
        (obj) => obj.examplesValue === higherthenBlocker,
      );
      return {
        text: object[randomPropertyKey],
        examplesValue: object.examplesValue,
      };
    };

    // vytvoří pole s příklady
    const resultArray = [
      getCorrectResult(),
      getLowerResult(),
      getHigherResult(),
    ];

    // zamíchá pole
    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };

    return shuffleArray(resultArray);
  };

  const [shuffledResults] = useState(initResults);

/* zneaktivnění zvoleného příkladu */

const [disabledButtons, setDisabledButtons] = useState([]);

  const handleExampleClick = (value) => setDisabledButtons((prev) => [...prev, value])

  //RETURN --------------------------
  //---------------------------------

  return (
    <div className="examples">
      {shuffledResults.map((result) => (
        <div key={result.examplesValue}>
          <button
            className="example-button"
            onClick={() => {
              if (getSoundOn()) {
                play();
              }
              onExams(result.examplesValue);
              handleExampleClick(result.examplesValue)
            }}
            disabled={blockerTarget <= 0 || disabledButtons.includes(result.examplesValue) }
          >
            {result.text}
          </button>
        </div>
      ))}
    </div>
  );
};
