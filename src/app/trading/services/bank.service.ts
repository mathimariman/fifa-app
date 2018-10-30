import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerService } from './player.service';
import { map } from 'rxjs/operators';
import { Player } from '../models/player';
import { Pools } from '../pools.enum';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor(private playerService: PlayerService) {}

  getBankSaldo(): Observable<number> {
    return this.playerService.getPlayerPool().pipe(map(pool => this.calculateSaldo(pool)));
  }

  calculateSaldo(pool: Player[]) {
    return pool.reduce((acc, val) => {
      switch (val.pool) {
        case Pools.BUYING:
          return acc - val.price;
        case Pools.SELLING:
          return acc + val.price * 0.95;
        default:
          return acc;
      }
    }, 0);
  }
}
