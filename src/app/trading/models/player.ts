import { Pools } from '../pools.enum';

export class Player {
  name: string;
  rating: string;
  position: string;
  id: string;
  image: string;
  pool?: Pools;
  price?: number;
}
