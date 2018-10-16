import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player';
import { Pools } from '../pools.enum';
import { FutbinService } from './futbin.service';
import { EaService } from './ea.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerPool = new BehaviorSubject<Player[]>([]);

  constructor(private futbinService: FutbinService, private eaService: EaService) {}

  getPlayerPool = () => this.playerPool.asObservable();

  addToPlayerPool = (player: Player) =>
    this.playerPool.next(this.playerPool.getValue().concat({ ...player, pool: Pools.WAITING }));

  removeFromPlayerPool = (player: Player) =>
    this.playerPool.next(this.playerPool.getValue().filter(p => p.id !== player.id));

  moveToPlayerPool = (player: Player, pool: Pools) =>
    this.playerPool.next(
      this.playerPool.getValue().map(p => (p.id === player.id ? { ...p, pool } : p))
    );

  searchPlayers = (term: string) => this.eaService.searchPlayers(term);
}
