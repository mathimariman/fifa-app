import { Injectable } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { PlayerService } from './player.service';
import { map } from 'rxjs/operators';
import { Player } from '../models/player';
import { Pools } from '../pools.enum';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  bankUpdateSubject = new Subject<number>();

  constructor(private playerService: PlayerService) {
  }

  getBankSaldo(): Observable<number> {
    return combineLatest(this.playerService.getPlayerPool(), this.bankUpdateSubject.asObservable())
      .pipe(map(([pool, bank]) => this.calculateSaldo(pool, bank)));
  }

  calculateSaldo(pool: Player[], bank: number) {
    return pool.reduce((acc, val) => {
      switch (val.pool) {
        case Pools.BUYING:
          return acc - val.price;
        case Pools.SELLING:
          return acc + val.price * 0.95;
        default:
          return acc;
      }
    }, bank);
  }

  updateBank(bankSaldo: number) {
    this.bankUpdateSubject.next(bankSaldo);
  }
}
