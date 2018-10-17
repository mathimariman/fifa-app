import { Pools } from '../pools.enum';

export class Player {
  fullName: string;
  rating: string;
  position: string;
  id: string;
  version: string;
  image: string;
  pool?: Pools;
  prices: any;
}
