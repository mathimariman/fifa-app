import { Component, OnInit } from '@angular/core';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

import { PlayerService } from '../player.service';
import { Player } from '../player';
import { Pools } from '../pools.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  playerPool$: Observable<Player[]>;
  pools = Pools;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerPool$ = this.playerService.getPlayerPool();
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      filter(t => t.length > 3),
      switchMap(t => this.playerService.getPlayer(t))
    );

  itemSelected = (event: NgbTypeaheadSelectItemEvent, searchInput) => {
    event.preventDefault();
    this.playerService.addToPlayerPool(event.item);
    searchInput.value = '';
  };

  moveToPool = (player: Player, pool: Pools) =>
    this.playerService.moveToPlayerPool(player, pool);

  addToBuyingPool = player =>
    this.playerService.moveToPlayerPool(player, Pools.BUYING);
  addToSellingPool = player =>
    this.playerService.moveToPlayerPool(player, Pools.SELLING);

  removeFromPlayerPool = (player: Player) =>
    this.playerService.removeFromPlayerPool(player);

  myFormatter = player => player && player.fullName;
}
