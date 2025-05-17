import './shuffler.css';
import examples from '../../data/examples.json';

// hodnota přkážky
const blocker = 3;

//nahodný výber příkladu z pole

const randomNumber = Math.floor(Math.random() * 3) + 1;

//správný výsledek  jako je  překážka
const correctResult = () => {
  const object = examples.find((obj) => obj.id === blocker);
  return `Spravný výsledek: ${object[randomNumber]}`;
};
//menší vysledek než je překážka ale větší než je nula

const smallerResult = () => {
  const smallerthenBlocker = Math.ceil(Math.random() * (blocker - 1));
  const object = examples.find((obj) => obj.id === smallerthenBlocker);
  return `Nizká hodnota: ${object[randomNumber]}`;
};

//větší výsledek než je překážka o 2

const higherResult = () => {
  const higherthenBlocker =
    Math.floor(Math.random() * (examples.length - blocker)) + blocker + 1;
  const object = examples.find((obj) => obj.id === higherthenBlocker);
  return `Vysoká hodnota: ${object[randomNumber]}`;
};

// vytvoří pole s příklady
const resultArray = [correctResult(), smallerResult(), higherResult()];

// zamíchá pole
const shuffler = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
const shuffledResults = shuffler(resultArray);

export const Exams = ({}) => {
  return (
    <div className="container">
      <br />
      <div className="Exams">
        <h2>Příklad</h2>

        {shuffledResults.map((result, id) => (
          <div>
            <button className="button--result" key={id}>
              {result}
            </button>
            <br />
          </div>
        ))}
      </div>
      <div className="Blocker">
        <h2>Obrázek</h2>
        <p>{blocker}</p>
      </div>
    </div>
  );
};
