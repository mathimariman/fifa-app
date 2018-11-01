import { Injectable } from '@angular/core';
import { BehaviorSubject, defer, forkJoin, Subject } from 'rxjs';
import { switchMapTo, tap } from 'rxjs/operators';
import { Player } from '../models/player';
import { Pools } from '../pools.enum';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerPool = new BehaviorSubject<Player[]>([]);
  priceTrigger = new Subject();

  constructor(private dataService: DataService) {
    this.priceTrigger
      .pipe(
        tap(console.log),
        switchMapTo(this.getPricesForPlayers())
      )
      .subscribe(priceItems => {
        const updatedPlayerPool = this.playerPool
          .getValue()
          .concat(priceItems)
          .reduce(
            (merged, item) => merged.set(item.id, Object.assign(merged.get(item.id) || {}, item)),
            new Map()
          );
        this.playerPool.next(Array.from(updatedPlayerPool.values()));
      });
  }

  getPricesForPlayers = () =>
    defer(() =>
      forkJoin(
        ...this.playerPool.getValue().map(player => this.dataService.getPlayerPrice(player.id))
      )
    );

  getPlayerPool = () => this.playerPool.asObservable();

  addToPlayerPool = (player: Player) => {
    this.playerPool.next(this.playerPool.getValue().concat({ ...player, pool: Pools.WAITING }));
    this.updatePricesPlayerPool();
  };

  updatePricesPlayerPool = () => {
    this.priceTrigger.next();
  };

  removeFromPlayerPool = (player: Player) =>
    this.playerPool.next(this.playerPool.getValue().filter(p => p.id !== player.id));

  moveToPlayerPool = (player: Player, pool: Pools) =>
    this.playerPool.next(
      this.playerPool.getValue().map(p => (p.id === player.id ? { ...p, pool } : p))
    );

  searchPlayers = (term: string) => this.dataService.getPlayers(term);
}
