import { GameLevel } from '../../components/GameLevel/GameLevel';
import { GameLevel1 } from '../../components/GameLevel/GameLevel1';

export const GamePage = () => {
  let i = 2;

  return <>{i === 1 ? <GameLevel /> : <GameLevel1 />}</>;
};
