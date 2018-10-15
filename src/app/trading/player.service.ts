import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Player } from './player';
import { Pools } from './pools.enum';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerPool = new BehaviorSubject<Player[]>([]);

  constructor(private http: HttpClient) {}

  getPlayerPool = () => this.playerPool.asObservable();

  addToPlayerPool = (player: Player) =>
    this.playerPool.next(
      this.playerPool.getValue().concat({ ...player, pool: Pools.WAITING })
    );

  removeFromPlayerPool = (player: Player) =>
    this.playerPool.next(
      this.playerPool.getValue().filter(p => p.id !== player.id)
    );

  moveToPlayerPool = (player: Player, pool: Pools) =>
    this.playerPool.next(
      this.playerPool
        .getValue()
        .map(p => (p.id === player.id ? { ...p, pool } : p))
    );

  getPlayer = (term: string) =>
    this.http.get(`https://www.futbin.com/search?year=19&term=${term}`).pipe(
      map((players: any[]) => players.slice(0, 10)),
      map(players =>
        players.map(p => ({
          fullName: p.full_name,
          rating: p.rating,
          position: p.position,
          id: p.id,
          version: p.version,
          image: p.image
        }))
      ),
      retry(3),
      catchError(e => [])
    );
}
