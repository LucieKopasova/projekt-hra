import { GameLevel } from '../GameLevel/GameLevel';
import { GameMap } from '../GameMap/GameMap';
import { HappyEnd } from '../HappyEnd/HappyEnd';

export const GameContainer = () => {
  let i = 2;

  return <>{i === 1 ? <GameLevel /> : <HappyEnd />}</>;
};
