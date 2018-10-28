import { Injectable } from '@angular/core';
import { BehaviorSubject, defer, forkJoin, timer } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';
import { Player } from '../models/player';
import { Pools } from '../pools.enum';
import { FutbinService } from './futbin.service';
import { EaService } from './ea.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerPool = new BehaviorSubject<Player[]>([]);

  constructor(private futbinService: FutbinService, private eaService: EaService) {
    timer(5000)
      .pipe(switchMapTo(this.getPricesForPlayers()))
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
        ...this.playerPool.getValue().map(player => this.futbinService.getPlayerPrice(player.id))
      )
    );

  getPlayerPool = () => this.playerPool.asObservable();

  addToPlayerPool = (player: Player) => {
    this.playerPool.next(this.playerPool.getValue().concat({ ...player, pool: Pools.WAITING }));
  };

  removeFromPlayerPool = (player: Player) =>
    this.playerPool.next(this.playerPool.getValue().filter(p => p.id !== player.id));

  moveToPlayerPool = (player: Player, pool: Pools) =>
    this.playerPool.next(
      this.playerPool.getValue().map(p => (p.id === player.id ? { ...p, pool } : p))
    );

  searchPlayers = (term: string) => this.eaService.searchPlayers(term);
}
