import { GameLevel } from '../../components/GameLevel/GameLevel';
import { GameLevel1 } from '../../components/GameLevel/GameLevel1';
import { GameLevel2 } from '../../components/GameLevel/GameLevel2';

export const GamePage = () => {
  let i = 1;

  return <>{i === 1 ? <GameLevel2 /> : <GameLevel1 />}</>;
};
